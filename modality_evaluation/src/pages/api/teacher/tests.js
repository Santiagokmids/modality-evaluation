import db from '../../../util/tests'; 
export default function handler(req,res){
    res.json(db);
}