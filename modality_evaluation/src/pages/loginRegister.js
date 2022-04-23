import Header from "../../components/Header";

export default function loginRegister(req, res) {
    return (
        <div>
            <Header title="Login and Register"> </Header>
            <h1 className="text-center"> Ingresa o registrate al módulo de exámenes </h1>
            <card className="card w-50 m-auto mt-5">
                <form className="form">
                    <div className="form-group p-2">
                        <input className="form-control" type="text" placeholder="Nombre completo" name="name" required />
                    </div>

                    <div className="form-group p-2">
                        <input className="form-control" type="password" placeholder="Contraseña" name="password" required />
                    </div>

                    <div className="form-group p-2">
                        <input type="radio" name="profesion" value="1" /> Profesor <input type="radio" name="profesion" value="2" />Estudiante <br />
                    </div>

                    <div className="form-group p-2">
                        <button type="submit"> Ingresar </button> <button type="submit"> Registrate </button>
                    </div>
                </form>
            </card>
        </div>
    )
}