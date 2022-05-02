import { Pool } from "pg/lib";

var conn;

if (!conn){
    conn = new Pool({
        host: "localhost",
        user: "postgres",
        password: "HolaMundo",
        database: "Tests",
        port: "5432"
    })
}

export default conn;