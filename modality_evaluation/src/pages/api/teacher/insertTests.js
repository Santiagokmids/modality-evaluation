import database from "../../../util/tests";

export default async function insertTests(req, res) {
    const { method, body } = req;

    if (method === "POST") {
        
        try {

            let response = await database.query("SELECT * FROM TESTS WHERE ID = $1", [body.id]);

            if (response.rows.length < 0) {
                let r = await database.query("INSERT INTO TESTS VALUES ($1,$2,$3,$4)", [body.title, body.description, body.id, body.access]);
                res.status(200).json({ date: "check" });

            }else{
                res.status(400).json({ date: "found" });
            }

        } catch (error) {
            res.status(400).json({ date: "fail" });
        }
    }
}