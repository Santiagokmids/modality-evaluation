import database from '../../../util/tests';

export default async function handler(req, res) {

    console.log(req.query.searchTest]);

    let response = await database.query("SELECT * FROM TESTS WHERE ACCESS = $1", [req.query.searchTest]);

    if(response.rows.length === 1){
        res.status(200).json({ date: response});
    }else {
        res.status(404);
    }
}
  