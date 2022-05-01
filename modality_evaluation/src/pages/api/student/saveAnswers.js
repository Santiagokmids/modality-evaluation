import database from "../../../util/answers";

export default async function saveAnswers(req, res) {
    const { method, body } = req;

    for (let i = 0; i < database.length; i++) {

        if (body.question == database[i].question) {
            database[i].answer = body.answer;
        }
    }

    if (method === "POST") {
        database.push({
            question: body.question,
            answer: body.answer
        });

        res.status(200).json({ date: "check" });

    } else {
        res.status(400).json({ date: "fail" });
    }

}