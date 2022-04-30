import Header from '../../components/Header';
import styles from "../../styles/Home.module.css";

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
    let response = await fetch("http://localhost:3000/api/teacher/"+state.accessCode);
    
  }
}

export default function test({ tests }) {
  return (
    <div className='w-50 m-auto mt-5' onSubmit={handleSubmit}>
      <Header title="Cambio de nombre"></Header>
      <h1 className='text-center'>Lista de exámenes</h1>

      <div className='list-group'>
        {tests.map(e => (
          <a href="#" className="list-group-item list-group-item-action" aria-current="true">

            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{e.title}</h5>
              <small>{new Date().toISOString().split('T')[0]}</small>
            </div>

            <p className="mb-1">{e.description}</p>

            <div class="mb-3" onChange={handleChange}>
              <label class="form-label">Código de acceso: </label>
              <input className={styles.codeTest} type="password" placeholder="Código" name="access" code="code" required />
            </div>

            <div className="form-group p-2">
              <button id="testRequest" type="submit" > Ingresar</button>
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}

test.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/teacher/tests');
  const test = await res.json();
  return { tests: test }
}