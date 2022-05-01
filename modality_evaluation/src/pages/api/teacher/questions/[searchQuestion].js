import database from "../../../../util/questions";

export default async function searchQuestion(req, res) {

    try {
        let response = await database.query("SELECT * FROM QUESTIONS WHERE ID = $1", [req.query.searchQuestion]);

        if (response.rows.length = 1) {
            res.status(200).json({ date: response.rows[0] });

        } else {
            res.status(400).json({ date: "not found" });
        }

    } catch (error) {
        res.status(400).json({ date: "fail" });
    }

}