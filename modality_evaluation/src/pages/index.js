import Header from "../components/Header";
import styles from "../styles/Home.module.css";

let state = {
    name: "",
    password: "",
    type: 0
}

let handleChange = e => {

    switch (e.target.name) {
        case "name":
            state.name = e.target.value
            break;

        case "password":
            state.password = e.target.value
            break;

        case "profesion":
            state.type = e.target.value
            break;
    }
}

let handleSubmit = async e => {

    let object = {
        method: 'POST',
        body: JSON.stringify(state)
    }

    await fetch("http://localhost:3000/api/student/insertIntoDatabase", object)
}

export default function loginRegister() {
    return (
        <div>
            <Header title="Login and Register"> </Header>
            <h1 className={styles.hola}> Ingresa o registrate al módulo de exámenes </h1>
            <card className={styles.cardd} onSubmit={handleSubmit}>
                <form className="form">
                    <div className="form-group p-2" onChange={handleChange}>
                        <input className="form-control" type="text" placeholder="Nombre completo" name="name" required />
                    </div>

                    <div className="form-group p-2" onChange={handleChange}>
                        <input className="form-control" type="password" placeholder="Contraseña" name="password" required />
                    </div>

                    <div className="form-group p-2" onChange={handleChange}>
                        <input type="radio" name="profesion" value="1" /> Profesor <input type="radio" name="profesion" value="2" />Estudiante <br />
                    </div>

                    <div className="form-group p-2">
                        <button id="login" type="submit" > Ingresar </button> <button type="submit" id="register"> Registrarse </button>
                    </div>

                </form>
            </card>
        </div>
    )
}