import { Pool } from "pg/lib";

var conn;

if (!conn){
    conn = new Pool({
        host: "localhost",
        user: "postgres",
        password: "sebas0212",
        database: "answers",
        port: "5432"
    })
}

export default conn;