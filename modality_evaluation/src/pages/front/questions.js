import Header from '../../components/Header';
import styles from "../../styles/Home.module.css";

let state = {
    name: "",
    results: "",
    type: 0
}

let handleSubmit = async e => {

    let object = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    await fetch("http://localhost:3000/api/teacher/insertTests", object)
}