import Header from "../../../components/Header";

let test = {
    title: "",
    description: "",
    id: 0,
    access: 0
}

let handleChange = e => {

    switch (e.target.name) {
        case "title":
            test.title = e.target.value
            break;

        case "description":
            test.description = e.target.value
            break;

        case "id":
            test.id = e.target.value
            break;

        case "access":
            test.access = e.target.value
            break;
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
        body: JSON.stringify(test)
    }

    let r = await fetch("http://localhost:3000/api/teacher/insertTests", object)

    const result = await r.json();

    if(result.date === "check"){
        window.alert("Se ha creado correctamente el examen");
        window.location.href = "http://localhost:3000/front/teacher/createQuestion"

    } else if(result.date === "found"){
        window.alert("Ya existe un examen con ese código de identificación");
    }
   
}

export default function createTest() {
    return (
        <div>
            <Header title="Create test"> </Header>
            <h1 className="text-center"> Ingrese los datos para crear una nueva evaluación </h1>
            <card className="card w-50 m-auto mt-5" onSubmit={handleSubmit}>
                <form className="form">
                    <div className="form group p-2" onChange={handleChange}>
                        <input className="form-control" type="text" placeholder="Ingrese el título del examen" name="title" required />
                    </div>

                    <div className="form group p-2" onChange={handleChange}>
                        <textarea className="form-control" placeholder="Ingrese la descripción del examen" name="description" required />
                    </div>

                    <div className="form group p-2" onChange={handleChange}>
                        <input className="form-control" type="number" placeholder="Ingrese el código de identificación del examen" name="id" required />
                    </div>

                    <div className="form group p-2" onChange={handleChange}>
                        <input className="form-control" type="number" placeholder="Ingrese el código de acceso al examen" name="access" required />
                    </div>

                    <div className="form group p-2" style={{textAlign: "center"}}>
                        <button type="submit" > Crear nueva evaluación</button>
                    </div>
                </form>
            </card>
            <br/>
            <div style={{textAlign: "center"}}>
                <a href="http://localhost:3000">
                    <button> Cancelar</button>
                </a>
            </div>
        </div>
    )
}