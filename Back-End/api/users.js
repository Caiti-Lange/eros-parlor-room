//import express
import express from "express";
//create express router
const usersRouter = express.Router();
//middlewares
import requireUser from "#middlewares/requireUser";

// /users/ routes
usersRouter.route("/").get(requireUser, async (req, res) => {
  delete req.user.password;

  res.send(req.user);
});

export default usersRouter;