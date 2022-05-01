import { Component } from "react";
import styles from "../styles/Home.module.css";

export default class Form extends Component {

    state = {
        name: "",
        password: "",
        password2: "",
        type: 0
    }

    handleChange = e => {
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {

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

            let r = await fetch("http://localhost:3000/api/student/insertIntoDatabase", object);

            const result = await r.json();

            if (result.date === "check") {
                window.alert("Se ha registrado correctamente!");
                window.location.href = "http://localhost:3000";
            }

        } else {
            window.alert("Las contraseñas que ingresó no coinciden");
            e.href("http://localhost:3000/front/register")
        }

    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className="card" style={{ width: "30rem", height: "30rem", marginTop: "195px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Registrate al módulo de exámenes</h5>
                        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nombre completo</label>
                                <input name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                <div id="emailHelp" className="form-text">Nunca compartiremos tu información con alguien más.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                                <input name="password" type="password" className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Repetir Contraseña</label>
                                <input name="password2" type="password" className="form-control" id="exampleInputPassword2" required />
                            </div>
                            <label htmlFor="exampleInputPassword1" className="form-label">Yo soy un...</label>
                            <br></br>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="profesion" id="btnradio1" value={1}/>

                                <label className="btn btn-outline-primary" htmlFor="btnradio1">Profesor</label>

                                <input type="radio" className="btn-check" name="profesion" id="btnradio3" value={2} />
                                
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">Estudiante</label>
                            </div>

                            <br></br>
                            <br></br>

                            <button type="submit" className="btn btn-primary" style={{ marginRight: "50px" }}>Registrarse</button>
                        </form>
                        <a href="http://localhost:3000">
                            <button className="btn btn-primary" style={{ marginTop: "-65px", marginLeft: "108px" }}>Cancelar</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}