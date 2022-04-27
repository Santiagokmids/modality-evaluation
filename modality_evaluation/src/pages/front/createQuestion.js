import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";

let state = {
    id: 0,
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    correctAsnwer: ""
};

let handleChange = e => {
    switch (e.target.name) {
        case "id":
            state.id = e.target.value;
            break;
        case "question":
            state.question = e.target.value;
            break;
        case "answerA":
            state.answerA = e.target.value;
            break;
        case "answerB":
            state.answerB = e.target.value;
            break;
        case "answerC":
            state.answerC = e.target.value;
            break;
        case "answerD":
            state.answerD = e.target.value;
            break;
        case "correctAsnwer":
            state.correctAsnwer = e.target.value;
            break;
        default:
            console.log("Something is wrong");
            break;
    };
}

let handleSubmit = async e => {
    e.preventDefault();
    let question = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }

    let response = await fetch("http://localhost:3000/api/teacher/insertQuestion", question);
    console.log(response);
}

export default function questionForm(req, res) {
    return (
        <div>
            <Header title="Create question"> </Header>
            <section className={styles.mainContainer} onSubmit={handleSubmit}>
                <section className={styles.sectionCard}>
                    <form className="form">
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="id" placeholder="Número identificador del examen" />
                        </div>
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="question" placeholder="Pregunta" />
                        </div>
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="answerA" placeholder="Respuesta A" />
                        </div>
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="answerB" placeholder="Respuesta B" />
                        </div>
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="answerC" placeholder="Respuesta C" />
                        </div>
                        <div className="form-group" onChange={handleChange}>
                            <input className={styles.form} name="answerD" placeholder="Respuesta D" />
                        </div>
                        <div>
                            <p>Respuesta correcta</p>
                        </div>
                        <div className={styles.radioButton} onChange={handleChange}>
                            <input type="radio" name="correctAsnwer" value="A" /> A
                            <input type="radio" name="correctAsnwer" value="B" /> B
                            <input type="radio" name="correctAsnwer" value="C" /> C
                            <input type="radio" name="correctAsnwer" value="D" /> D
                        </div>
                        <br></br>
                        <div className="form-group">
                            <button type="submit" > Agregar </button>
                        </div>
                    </form>

                </section>
            </section>

        </div>
    );
}