//import express
import express from "express";
import cors from "cors";
//create express application
const app = express();
//routers
import authRouter from "#api/auth";
import museRouter from "#api/muses";
import usersRouter from "#api/users";
//middlewares
import getUserFromToken from "#middleware/getUserFromToken";

//use a JSON body parser for all routes
app.use(express.json());
app.use(cors());
app.use(getUserFromToken);

app.use("/auth", authRouter);
app.use("/muses", museRouter);
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
