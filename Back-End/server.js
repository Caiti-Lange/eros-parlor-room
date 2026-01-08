//import app
import app from "#app";

//import db client
import db from "#db/client";

const PORT = process.env.PORT || 8080;

//connect to db
await db.connect();

//listen on port
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});