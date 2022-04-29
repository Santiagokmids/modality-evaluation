import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";

let state = {
    id: 0,
    question1: "",
    answerA1: "",
    answerB1: "",
    answerC1: "",
    answerD1: "",
    correctAsnwer1: "",
    question2: "",
    answerA2: "",
    answerB2: "",
    answerC2: "",
    answerD2: "",
    correctAsnwer2: "",
    question3: "",
    answerA3: "",
    answerB3: "",
    answerC3: "",
    answerD3: "",
    correctAsnwer3: "",
    question4: "",
    answerA4: "",
    answerB4: "",
    answerC4: "",
    answerD4: "",
    correctAsnwer4: "",
    question5: "",
    answerA5: "",
    answerB5: "",
    answerC5: "",
    answerD5: "",
    correctAsnwer5: ""
};

let handleChange = e => {
    switch (e.target.name) {
        case "id":
            state.id = e.target.value;
            break;
        case "question1":
            state.question1 = e.target.value;
            break;
        case "answerA1":
            state.answerA1 = e.target.value;
            break;
        case "answerB1":
            state.answerB1 = e.target.value;
            break;
        case "answerC1":
            state.answerC1 = e.target.value;
            break;
        case "answerD1":
            state.answerD1 = e.target.value;
            break;
        case "correctAsnwer1":
            state.correctAsnwer1 = e.target.value;
            break;
        case "question2":
            state.question2 = e.target.value;
            break;
        case "answerA2":
            state.answerA2 = e.target.value;
            break;
        case "answerB2":
            state.answerB2 = e.target.value;
            break;
        case "answerC2":
            state.answerC2 = e.target.value;
            break;
        case "answerD2":
            state.answerD2 = e.target.value;
            break;
        case "correctAsnwer2":
            state.correctAsnwer2 = e.target.value;
            break;
        case "question3":
            state.question3 = e.target.value;
            break;
        case "answerA3":
            state.answerA3 = e.target.value;
            break;
        case "answerB3":
            state.answerB3 = e.target.value;
            break;
        case "answerC3":
            state.answerC3 = e.target.value;
            break;
        case "answerD3":
            state.answerD3 = e.target.value;
            break;
        case "correctAsnwer3":
            state.correctAsnwer3 = e.target.value;
            break;
        case "question4":
            state.question4 = e.target.value;
            break;
        case "answerA4":
            state.answerA4 = e.target.value;
            break;
        case "answerB4":
            state.answerB4 = e.target.value;
            break;
        case "answerC4":
            state.answerC4 = e.target.value;
            break;
        case "answerD4":
            state.answerD4 = e.target.value;
            break;
        case "correctAsnwer4":
            state.correctAsnwer4 = e.target.value;
            break;
        case "question5":
            state.question5 = e.target.value;
            break;
        case "answerA5":
            state.answerA5 = e.target.value;
            break;
        case "answerB5":
            state.answerB5 = e.target.value;
            break;
        case "answerC5":
            state.answerC5 = e.target.value;
            break;
        case "answerD5":
            state.answerD5 = e.target.value;
            break;
        case "correctAsnwer5":
            state.correctAsnwer5 = e.target.value;
            break;
        default:
            console.log("Something's wrong");
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

    const result = await response.json();

    if (result.date === "check") {
        window.alert("Se ha registrado correctamente las preguntas del examen!");
        window.location.href = "http://localhost:3000/front/test"
    } else {
        window.alert("Ooh! algo salió mal");
    }

}


export default function questionForm(req, res) {
    return (
        <div>
            <Header title="Create question"> </Header>
            <section className={styles.mainContainer} onSubmit={handleSubmit}>
                <section className={styles.sectionCard}>
                    <form className="form">

                        <div className="form1">
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="id" placeholder="Número identificador del examen" required />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="question1" placeholder="Pregunta" required />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerA1" placeholder="Respuesta A" required />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerB1" placeholder="Respuesta B" required />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerC1" placeholder="Respuesta C" required />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerD1" placeholder="Respuesta D" required />
                            </div>
                            <div>
                                <p>Respuesta correcta</p>
                            </div>

                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                                <input type="radio" className="btn-check" name="correctAsnwer1" id="btnradio1" value="A" autoComplete="off" required />
                                <label className="btn btn-outline-primary" htmlFor="btnradio1">A</label>

                                <input type="radio" className="btn-check" name="correctAsnwer1" id="btnradio2" value="B" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio2">B</label>

                                <input type="radio" className="btn-check" name="correctAsnwer1" id="btnradio3" value="C" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">C</label>

                                <input type="radio" className="btn-check" name="correctAsnwer1" id="btnradio4" value="D" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio4">D</label>
                            </div>

                            <br></br>
                        </div>

                        <div className="form2">
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="question2" placeholder="Pregunta" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerA2" placeholder="Respuesta A" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerB2" placeholder="Respuesta B" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerC2" placeholder="Respuesta C" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerD2" placeholder="Respuesta D" />
                            </div>
                            <div>
                                <p>Respuesta correcta</p>
                            </div>

                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                                <input type="radio" className="btn-check" name="correctAsnwer2" id="btnradio5" value="A" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio5">A</label>

                                <input type="radio" className="btn-check" name="correctAsnwer2" id="btnradio6" value="B" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio6">B</label>

                                <input type="radio" className="btn-check" name="correctAsnwer2" id="btnradio7" value="C" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio7">C</label>

                                <input type="radio" className="btn-check" name="correctAsnwer2" id="btnradio8" value="D" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio8">D</label>
                            </div>

                            <br></br>
                        </div>

                        <div className="form3">
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="question3" placeholder="Pregunta" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerA3" placeholder="Respuesta A" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerB3" placeholder="Respuesta B" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerC3" placeholder="Respuesta C" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerD3" placeholder="Respuesta D" />
                            </div>
                            <div>
                                <p>Respuesta correcta</p>
                            </div>

                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                                <input type="radio" className="btn-check" name="correctAsnwer3" id="btnradio9" value="A" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio9">A</label>

                                <input type="radio" className="btn-check" name="correctAsnwer3" id="btnradio10" value="B" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio10">B</label>

                                <input type="radio" className="btn-check" name="correctAsnwer3" id="btnradio11" value="C" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio11">C</label>

                                <input type="radio" className="btn-check" name="correctAsnwer3" id="btnradio12" value="D" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio12">D</label>
                            </div>

                            <br></br>

                        </div>

                        <div className="form4">
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="question4" placeholder="Pregunta" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerA4" placeholder="Respuesta A" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerB4" placeholder="Respuesta B" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerC4" placeholder="Respuesta C" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerD4" placeholder="Respuesta D" />
                            </div>
                            <div>
                                <p>Respuesta correcta</p>
                            </div>

                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                                <input type="radio" className="btn-check" name="correctAsnwer4" id="btnradio13" value="A" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio13">A</label>

                                <input type="radio" className="btn-check" name="correctAsnwer4" id="btnradio14" value="B" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio14">B</label>

                                <input type="radio" className="btn-check" name="correctAsnwer4" id="btnradio15" value="C" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio15">C</label>

                                <input type="radio" className="btn-check" name="correctAsnwer4" id="btnradio16" value="D" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio16">D</label>
                            </div>

                            <br></br>

                        </div>

                        <div className="form5">
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="question5" placeholder="Pregunta" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerA5" placeholder="Respuesta A" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerB5" placeholder="Respuesta B" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerC5" placeholder="Respuesta C" />
                            </div>
                            <div className="form-group" onChange={handleChange}>
                                <input className={styles.form} name="answerD5" placeholder="Respuesta D" />
                            </div>
                            <div>
                                <p>Respuesta correcta</p>
                            </div>

                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                                <input type="radio" className="btn-check" name="correctAsnwer5" id="btnradio17" value="A" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio17">A</label>

                                <input type="radio" className="btn-check" name="correctAsnwer5" id="btnradio18" value="B" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio18">B</label>

                                <input type="radio" className="btn-check" name="correctAsnwer5" id="btnradio19" value="C" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio19">C</label>

                                <input type="radio" className="btn-check" name="correctAsnwer5" id="btnradio20" value="D" autoComplete="off" />
                                <label className="btn btn-outline-primary" htmlFor="btnradio20">D</label>
                            </div>

                            <br></br>

                        </div>

                        <div className="form-group">
                            <button type="submit" > Agregar </button>
                        </div>

                    </form>
                </section>
            </section>

        </div>
    );
}