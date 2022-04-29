import database from "../../../util/database.js";

export default async function handler(req, res) {
    const { method, body } = req;
    var verify = false;

    for (var i = 0; i < database.length && !verify; i++) {
        if (database[i].name === body.name && database[i].password === body.password && database[i].type == body.type) {
            verify = true;
        }
    }

    if (method === "POST" && verify) {
        console.log(body);

        if (body.type == 1) {
            res.status(200).json({type : 1});
            console.log("entro")

        } else if (body.type == 2) {
            res.status(200).json({type : 2});
            console.log("entro2");
        }

    } else {
        res.status(400).json({type : 0});
    }

}