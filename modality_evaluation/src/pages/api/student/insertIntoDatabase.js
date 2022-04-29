import database from "../../../util/database.js";

export default async function handler(req, res) {
    const { method, body } = req;

    console.log(body);

    if (method === "POST") {
        database.push({
            name: body.name,
            password: body.password,
            type: body.type
        });

        res.status(200).json({date : "check"});

    } else {
        res.status(400).json({date : "fail"});
    }

}