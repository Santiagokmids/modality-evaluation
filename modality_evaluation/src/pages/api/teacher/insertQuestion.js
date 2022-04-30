import questions from "../../../util/questions";
import tests from "../../../util/tests";

export default async function handlerInsert(req, res) {
    const { method, body } = req;

    if (method === "POST") {

        try {

            let response = await tests.query("SELECT * FROM TESTS WHERE ID = $1", [body.id]);

            if (response.rows.length = 1) {
                
                let r = await questions.query("INSERT INTO QUESTIONS VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31)",
                    [body.id, body.question1, body.answerA1, body.answerB1, body.answerC1, body.answerD1, body.correctAsnwer1, body.question2, body.answerA2, body.answerB2, body.answerC2, body.answerD2, body.correctAsnwer2,
                    body.question3, body.answerA3, body.answerB3, body.answerC3, body.answerD3, body.correctAsnwer3, body.question4, body.answerA4, body.answerB4, body.answerC4, body.answerD4, body.correctAsnwer4,
                    body.question5, body.answerA5, body.answerB5, body.answerC5, body.answerD5, body.correctAsnwer5]);

                res.status(200).json({ date: "check" });
                console.log("entra");
            } else {
                res.status(400).json({ date: "not found" });
                console.log("entra1");
            }

        } catch (error) {
            res.status(400).json({ date: "fail" });
            console.log("entra2");
        }
    } else {
        res.status(404).json({ date: "fail" });
        console.log("entra3");
    }
}
