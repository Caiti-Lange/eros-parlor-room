//import express
import express from "express";
//create express application
const app = express();
//routers
import authRouter from "#api/auth";
import museRouter from "#api/muses";
import usersRouter from "#api/users";
//middlewares
import getUserFromToken from "#middlewares/getUserFromToken";

//use a JSON body parser for all routes
app.use(express.json());
app.use(getUserFromToken);

app.use("/auth", authRouter);
app.use("/plants", museRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.send("Server working");
});

//error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong :(");
});

//export express application
export default app;