import Header from '../../components/Header';
import styles from '../../styles/Home.module.css';

export default function test({ title }) {

    return (
        <div>
            <Header title="Examen"></Header>
            <div className={styles.mainContainer}>
                <div className="card" style={{ width: "1000px", height: "500px" }}>
                    <div className="card-body">
                        <h5 className="card-title"> {title.question1} </h5>
                        <p className="card-text"> Seleccione una opción </p>
                        <input type="radio" name="answer1" value="A" /> {title.answera1} <br />
                        <input type="radio" name="answer1" value="B" /> {title.answerb1} <br />
                        <input type="radio" name="answer1" value="C" /> {title.answerc1} <br />
                        <input type="radio" name="answer1" value="D" /> {title.answerd1} <br />
                    </div>
                </div>
            </div>
            <div className={styles.pagination}>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="1">1</a></li>
                        <li className="page-item"><a className="page-link" href="2">2</a></li>
                        <li className="page-item"><a className="page-link" href="3">3</a></li>
                        <li className="page-item"><a className="page-link" href="4">4</a></li>
                        <li className="page-item"><a className="page-link" href="5">5</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

test.getInitialProps = async ({ asPath }) => {

    let text = "";
    let rute = "";
    let title = "";

    text = asPath;
    rute = text.split("/");

    let r = await fetch("http://localhost:3000/api/teacher/questions/" + rute[2]);
    const question = await r.json();
    title = question.date;

    return { title };
};