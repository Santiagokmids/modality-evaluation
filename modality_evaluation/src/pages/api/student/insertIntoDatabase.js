import database from "../../../util/database.js";

export default async function handler(req, res) {
    const { method, body } = req;

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