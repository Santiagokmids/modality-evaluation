import Header from '../../components/Header';
import styles from "../../styles/Home.module.css";

let state = {
    name: "",
    results: "",
    type: 0
}

let handleSubmit = async e => {
    e.preventDefault();
    let question = {
    }
}

export default function showResults() {
    return(
        <div>
            <Header title="Puntaje Final"> </Header>
            <h1 className='text-center'>Puntaje del examen</h1>
            <card>
                <form className="form">
                    <div className="form-group p-2">
                        <input className="form-control" type="text" studentName="name" required />
                    </div>

                    <div className="form-group p-2">
                        <input className="form-control" type="text" result="results" required />
                    </div>
                </form>
            </card>
            <div style={{ textAlign: "center" }}>
                <a href="http://localhost:3000">
                    <button> Salir</button>
                </a>
            </div>
        </div>
    )
}