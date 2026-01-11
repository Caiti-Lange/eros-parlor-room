//import app
import app from "./app.js";

//import db client
import db from "./db/client.js";

import 

const express = require("express");
const server = express();
const cors = require("cors");

server.use(express.json())
server.use(cors())


const PORT = process.env.PORT || 8080;

//connect to db
await db.connect();

//listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});