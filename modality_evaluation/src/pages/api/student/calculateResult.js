import database from "../../../util/questions";

export default async function calculateResult(req, res) {
    const { method, body } = req;
    console.log(body);

    if (method === "POST") {
        try {
            let response = await database.query("INSERT INTO PERSON VALUES ($1,$2,$3)", [body.name, body.password, body.type]);
            res.status(200).json({ date: "check" });

        } catch (error) {
            res.status(400).json({ date: "fail" });
        }
    } else {
        res.status(400).json({ date: "fail" });
    }

}