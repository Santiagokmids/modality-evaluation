import db from "../../../util/tests"; 

export default async function handler(req,res){
    
    let response = await db.query("SELECT * FROM TESTS");

    res.json(response.rows);
}