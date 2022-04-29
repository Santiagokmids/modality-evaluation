import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";

let state = {
    name: "",
    password: "",
    password2: "",
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

        case "password2":
            state.password2 = e.target.value
            break;

        case "profesion":
            state.type = e.target.value
            break;
    }
}

let handleSubmit = async e => {

    if (state.password === state.password2) {
        
        e.preventDefault();
        let object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }

        let r = await fetch("http://localhost:3000/api/student/insertIntoDatabase", object)

        const result = await r.json();

        if(result.date === "check"){
            window.alert("Se ha registrado correctamente!")
            window.location.href = "http://localhost:3000"
        }

    } else {
        window.alert("Las contraseñas que ingresó no coinciden");
        e.href("http://localhost:3000/front/register")
    }

}

export default function loginRegister() {
    return (
        <div>
            <Header title="Register"> </Header>
            <h1 className={styles.hola}> Registrate al módulo de exámenes </h1>
            <card className={styles.cardd} onSubmit={handleSubmit}>
                <form className="form">
                    <div className="form-group p-2" onChange={handleChange}>
                        <input className="form-control" type="text" placeholder="Nombre completo" name="name" required />
                    </div>

                    <div className="form-group p-2" onChange={handleChange}>
                        <input className="form-control" type="password" placeholder="Contraseña" name="password" required />
                    </div>

                    <div className="form-group p-2" onChange={handleChange}>
                        <input className="form-control" type="password" placeholder="Repetir Contraseña" name="password2" required />
                    </div>

                   
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group" onChange={handleChange}>
                        <input type="radio" class="btn-check" name="profesion" id="btnradio1" value="1" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio1">Profesor</label>

                        <input type="radio" class="btn-check" name="profesion" id="btnradio3" value="2" autocomplete="off" />
                        <label class="btn btn-outline-primary" for="btnradio3">Estudiante</label>
                    </div>
                    

                    <div className="form-group p-2">
                        <button type="submit" > Registrarse </button>
                    </div>

                </form>
            </card>
            <div style={{ textAlign: "center" }}>
                <a href="http://localhost:3000">
                    <button> Cancelar</button>
                </a>
            </div>
        </div>
    )
}