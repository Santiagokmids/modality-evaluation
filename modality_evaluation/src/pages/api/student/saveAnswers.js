import database from "../../../util/answers";

export default async function saveAnswers(req, res) {
    const { method, body } = req;

    let verify = false;

    for (let i = 0; i < database.length; i++) {

        if (body.question == database[i].question) {
            database[i].answer = body.answer;
        }
    }

    if (method === "POST" && !verify) {
        
        let r = await database.query("INSERT INTO ANSWERS VALUES ($1,$2)", [body.question, body.answer]);

        let response = await database.query("SELECT * FROM ANSWERS")

        if (response.rows.length % 5 == 0) {
            verify = true;
            res.status(200).json({date : "finish"});
        }
        res.status(200).json({ date: "check" });

    } else {
        res.status(400).json({ date: "fail" });
    }

}