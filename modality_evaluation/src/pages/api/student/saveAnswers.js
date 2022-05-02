import database from "../../../util/answers";

export default async function saveAnswers(req, res) {
    const { method, body } = req;

    let verify = false;

    try {
        let response = await database.query("SELECT * FROM ANSWERS WHERE QUESTION = $1", [body.question]);

        if (response.rows.length == 1) {

            await database.query("DELETE FROM ANSWERS WHERE QUESTION = $1", [body.question]);
            await database.query("INSERT INTO ANSWERS VALUES ($1,$2)", [body.question, body.answer]);
            verify = true;
        }

        if (method === "POST" && !verify) {

            let r = await database.query("INSERT INTO ANSWERS VALUES ($1,$2)", [body.question, body.answer]);
            let amount = await database.query("SELECT * FROM ANSWERS")

            if (amount.rows.length % 5 == 0) {
                verify = true;
                res.status(200).json({ date: "finish" });
            }
        }
        res.status(200).json({ date: "check" });

    } catch (error) {
        res.status(400).json({ date: "fail" });
    }
}