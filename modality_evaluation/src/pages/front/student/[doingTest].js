import Header from '../../../components/Header';
import styles from '../../../styles/Home.module.css';

let router = "";
let number = "1";

let state = {
    question: number,
    answer: ""
}

let handleChange = async e => {

    state.answer = e.target.value;

    let id = window.location.pathname;

    let route = id.split("/");
    let txt = "";

    for (let i = 0; i < route.length; i++) {

        if (route[i].indexOf("-") > -1) {
            txt = route[i].split("-");
            state.question = txt[1];

        }else{
            state.question = number;
        }
    }
}

let handleSubmit = async e => {

    e.preventDefault();
    let object = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }

    let r = await fetch("http://localhost:3000/api/student/saveAnswers", object);

    const result = await r.json();

    if (result.date === "check") {
        window.alert("Respuesta guardada de forma correcta");

    } else if (result.date === "finish") {

        window.alert("Ha terminado el examen");

        let id = window.location.pathname;

        let route = id.split("/");
        let txt = "";

        for (let i = 0; i < route.length; i++) {

            if (route[i].indexOf("-") > -1) {
                txt = route[i].split("-");
            }
        }

        id = txt[0];

        let object = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(id)
        }

        let r = await fetch("http://localhost:3000/api/student/calculateResult", object);

        let result = await r.json()

        if (result.date != "fail") {
            window.alert("Su puntaje en este examen ha sido de: "+result.result);
            window.location.href = "http://localhost:3000"
        }
    }
}

export default function test({ title }) {

    return (
        <div>
            <Header title="Examen"></Header>
            <div className={styles.mainContainer} onSubmit={handleSubmit} onChange={handleChange}>
                <form className='form'>
                    <div className="card" style={{ width: "1000px", height: "500px" }}>
                        <div className="card-body">
                            <h5 className="card-title"> {title.question} </h5>
                            <p className="card-text"> Seleccione una opción </p>
                            <input type="radio" name="answer1" value="A" /> {title.answer1} <br />
                            <input type="radio" name="answer1" value="B" /> {title.answer2} <br />
                            <input type="radio" name="answer1" value="C" /> {title.answer3} <br />
                            <input type="radio" name="answer1" value="D" /> {title.answer4} <br />
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <button type='submit' className="btn btn-primary" style={{ marginTop: "30px", marginLeft: "10px" }}> Guardar respuesta</button>
                    </div><br />
                </form>
            </div>

            <div className={styles.pagination} >
                <nav aria-label="Page navigation example" >
                    <ul className="pagination" >
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item" >
                            <a className="page-link" href={router + "-1"}>
                                <button type='submit' className='page-link' style={{ background: "none", color: "inherit", border: "none" }} > 1 </button>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={router + "-2"}>
                                <button type='submit' className='page-link' style={{ background: "none", color: "inherit", border: "none" }} > 2 </button>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={router + "-3"}>
                                <button type='submit' className='page-link' style={{ background: "none", color: "inherit", border: "none" }} > 3 </button>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={router + "-4"}>
                                <button type='submit' className='page-link' style={{ background: "none", color: "inherit", border: "none" }} > 4 </button>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href={router + "-5"}>
                                <button type='submit' className='page-link' style={{ background: "none", color: "inherit", border: "none" }} > 5 </button>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

test.getInitialProps = async ({ asPath }) => {

    let text = "";
    let rute = "";
    let title = "";
    let verify = false;
    let r = "";

    text = asPath;
    rute = text.split("/");

    for (let i = 0; i < rute.length; i++) {

        if (rute[i].indexOf("-") > -1) {
            text = rute[i].split("-");
            verify = true;
            number = text[1];
        }
    }

    let current = {
        num: number,
    };

    let object = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(current)
    }

    if (!verify) {
        r = await fetch("http://localhost:3000/api/teacher/questions/" + rute[3], object);
        router = "http://localhost:3000/front/student/" + rute[3];

    } else {
        r = await fetch("http://localhost:3000/api/teacher/questions/" + text[0], object);
        router = "http://localhost:3000/front/student/" + text[0];
    }

    const questions = await r.json();
    title = questions;

    return { title };
};