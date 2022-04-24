import Header from "../../components/Header";

let person = {
    name: "",
    password: "",
    type: 0
}

let handleChange = e => {

    switch (e.target.name) {
        case "name":
            person.name = e.target.value
            break;

        case "password":
            person.password = e.target.value
            break;

        case "profesion":
            person.type = e.target.value
            break;
    }
}

let handleSubmit = async e => {

    let object = {
        method: 'POST',
        body: JSON.stringify(person)
    }

    let response = await fetch("http://localhost:3000/api/insertIntoDatabase", object);

}

let handleClick = async e => {

    person.name = "Jaun";

    let object = {
        method: 'POST',
        body: JSON.stringify(person)
    }

    let response = await fetch("http://localhost:3000/api/insertIntoDatabase", object);
}

export default function loginRegister() {
    return (
        <div>
            <Header title="Login and Register"> </Header>
            <h1 className="text-center"> Ingresa o registrate al módulo de exámenes </h1>
            <card className="card w-50 m-auto mt-5" onSubmit={handleSubmit}>
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
                        <button type="submit" > Ingresar </button> <button onClick={handleClick}> Registrarse </button>
                    </div>

                </form>
            </card>
        </div>
    )
}