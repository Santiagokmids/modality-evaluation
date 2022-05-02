import Header from '../../../../components/Header';
import Navbar from "../../../../components/Navbar";
import styles from "../../../../styles/Home.module.css";
import {useRouter} from 'next/router';

let state = {
  accessCode: "123"
}

let handleChange = e => {
  if (e.target.name === "access") {
    state.accessCode = e.target.value;
  }
}

let handleSubmit = async e => {

  e.preventDefault();

  if (state.accessCode === "") {
    window.alert("Tiene que ingresar el código de acceso")

  } else {
    let response = await fetch("http://localhost:3000/api/teacher/" + state.accessCode);

    let result = await response.json();

    if (result.date !== "fail" && result.date !== "not found") {
      window.location.href = "http://localhost:3000/front/" + result.date;

    } else if (result.date === "fail") {
      window.alert("Ha ocurrido un error");

    } else if (result.date === "not found") {
      window.alert("El código que ingresó no es el correcto");

    }
  }
}

export default function test({ tests }) {
  return (
    <div >
      <Header title="Exámenes disponibles"></Header>
      <Navbar title={useRouter().query.test}></Navbar>
      <h1 className='text-centers' style={{ textAlign: "center", marginTop: "50px", marginBottom: "-43px"}}>Lista de exámenes</h1>
      <div >
        <div className='list-group' onSubmit={handleSubmit}>
          <form className={styles.exams}>
            {tests.map(e => (
              <div className={styles.square}>
                <div className="card" >
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">{e.description}</p>
                    <small>{new Date().toISOString().split('T')[0]}</small>
                    <div className="mb-3" onChange={handleChange}>
                      <label className="form-label">Código de acceso: </label>
                      <input className={styles.codeTest} type="password" placeholder="Código" name="access" code="code" />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginRight: "50px" }}>Ingresar</button>
                  </div>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  )
}

test.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/teacher/tests');
  const test = await res.json();
  return { tests: test }
}