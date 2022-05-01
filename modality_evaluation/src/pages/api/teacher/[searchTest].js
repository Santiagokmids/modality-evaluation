import database from '../../../util/tests';

export default async function handler(req, res) {

    try {
        let response = await database.query("SELECT * FROM TESTS WHERE ACCESS = $1", [req.query.searchTest]);

        if (response.rows.length == 1) {
            
            res.status(200).json({ date: response.rows[0].id});

        } else {
            res.status(404).json({ date: "not found"});
        }
    } catch (error) {
        res.status(404).json({ date: "fail"});
    }
}
