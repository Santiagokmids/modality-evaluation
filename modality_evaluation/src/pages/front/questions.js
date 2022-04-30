import Header from '../../components/Header';
import styles from "../../styles/Home.module.css";

let state = {
    id: 0,
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    answer5: ""
};

let handleSubmit = async e => {

    let object = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
    }
    let r = await fetch("http://localhost:3000/api/student/calculateResult", object)

    const result = await r.json();
}