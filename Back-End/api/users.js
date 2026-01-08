//import express
import express from "express";
//create express router
const usersRouter = express.Router();
//middlewares
import requireUser from "#middleware/requireUser";

// /users/ routes
usersRouter.route("/").get(requireUser, async (req, res) => {
  delete req.user.password;

  res.send(req.user);
});

export default usersRouter;