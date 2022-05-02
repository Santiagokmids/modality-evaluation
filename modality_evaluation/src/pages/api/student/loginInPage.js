import database from "../../../util/database.js";

export default async function handler(req, res) {
    const { method, body } = req;

    if (method === "POST") {

        let response = await database.query("SELECT * FROM PERSON WHERE(NAME = $1 AND PASSWORD = $2)", [body.name, body.password]);

        if (response.rows.length > 0) {

            if (body.type == 1) {
<<<<<<< HEAD
                res.status(200).json({ name: body.name ,type: 1 });
                console.log("entro")
=======
                res.status(200).json({ type: 1 });
>>>>>>> abd6d8b2af5c264a29edd1a03d2e691214be46c0

            } else if (body.type == 2) {
                res.status(200).json({ type: 2 });
            }
        } else {
            res.status(400).json({ type: 0 });
        }

    } else {
        res.status(400).json({ type: 0 });
    }

}