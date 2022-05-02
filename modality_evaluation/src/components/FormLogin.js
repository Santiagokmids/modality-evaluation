import { Component } from 'react'
import styles from "../styles/Home.module.css";

export default class Form extends Component {

    state = {
        name: "",
        password: "",
        type: 0
    }

    handleChange = e => {
        this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = async e => {

        e.preventDefault();
        let object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        console.log(this.state);


        let r = await fetch("http://localhost:3000/api/student/loginInPage", object);

        const result = await r.json();

        if (result.type == 1) {
            window.location.href = "http://localhost:3000/front/teacher/createTest";

        } else if (result.type == 2) {
            window.location.href = "http://localhost:3000/front/student/list/"+this.state.name;

        } else {
            window.alert("No se encuentra registrado en la base de datos. Registrese!");
        }
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className="card" style={{width: "30rem", height: "25rem", marginTop: "132px"}}>
                    <div className="card-body">
                        <h5 className="card-title">Iniciar sesión</h5>
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
                            <label htmlFor="exampleInputPassword1" className="form-label">Yo soy un...</label>
                            <br></br>
                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="type" id="btnradio1" value={1} required/>

                                <label className="btn btn-outline-primary" htmlFor="btnradio1">Profesor</label>

                                <input type="radio" className="btn-check" name="type" id="btnradio3" value={2} required/>
                                
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">Estudiante</label>
                            </div>

                            <br></br>
                            <br></br>

                            <button type="submit" className="btn btn-primary" style={{ marginRight: "50px" }}>Ingresar</button>
                        </form>
                        <a href="http://localhost:3000/front/register">
                            <button className="btn btn-primary" style={{ marginTop: "-65px", marginLeft: "108px" }}>Registrarse</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}