//import express
import express from "express";
//create express router
const authRouter = express.Router();
//middlewares
import requireBody from "#middlewares/requireBody";
//utils
import { createToken } from "#utils/jwt";
//import db functions from /db/queries/books
import { getUserByUsername, createUser } from "#db/queries/users";

authRouter
  .route("/register")
  .post(requireBody(["username", "password"]), async (req, res) => {
    const user = await createUser(req.body);

    const token = createToken({ id: user.user_id });
    res.status(201).send({ token });
  });

authRouter
  .route("/login")
  .post(requireBody(["username", "password"]), async (req, res) => {
    const { username, password } = req.body;

    const user = await getUserByUsername({ username, password });

    if (!user) {
      return res.status(401).send("Invalid email or password.");
    }

    const token = createToken({ id: user.user_id });
    res.send({ token });
  });

export default authRouter;