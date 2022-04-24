import database from "../../util/database.js";

export default async function handler(req, res){
    const {method, body} = req;

    if(method === "POST"){
        database.push({
            name: body.name,
            password: body.password,
            type: body.type
        });
        console.log(body);
    }else{
        res.status(400);
    }
    
}