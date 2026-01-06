//create a client connection to the db and export as default
import pg from "pg";
const db = new pg.Client(process.env.DATABASE_URL);
export default db;