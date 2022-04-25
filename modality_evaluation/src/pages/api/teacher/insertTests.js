import database from "../../../util/tests";

export default async function insertTests(req, res) {
    const { method, body } = req;

    if (method === "POST") {
        database.push({
            title: body.title,
            description: body.description,
            id: body.id,
            access: body.access
        });
        console.log(body);
    } else {
        res.status(400);
    }
}