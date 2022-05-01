import db from '../../../util/questions'; 

export default async function handler(req,res){
    
    let response = await db.query("SELECT * FROM QUESTIONS");

    res.json(response.rows);
}