//import express
import express from "express";
//create express router
const museRouter = express.Router();
//middlewares
import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";
//utils
import { createToken } from "#utils/jwt";

//import db functions from /db/queries/muses
import {
  createMuse,
  deleteMuse,
  getAllMuses,
  getMuseById,
  updateMuse,
} from "#db/queries/muses";

museRouter.use(requireUser);

// muses routes
museRouter
  .route("/")
  .get(async (req, res) => {
    const muse = await getAllMuses({ user_id: req.user.user_id });

    res.send({ muse });
  })
  .post(requireBody(["name", "origin", "media_type", "portrait"]), async (req, res) => {
    const muse = await createMuse({
      ...req.body,
      user_id: req.user.user_id,
    });

    res.send({ muse });
  });

museRouter.param("id", async (req, res, next, id) => {
  const muse = await getMuseById(id);

  if (!muse) {
    return res.status(404).send("Muse not found.");
  }
  req.muse = muse;
  next();
});

//  /muses/:id routes
museRouter
  .route("/:id")
  .get(async (req, res) => {
    res.send(req.muse);
  })
  .put(requireBody([]), async (req, res) => {
    const { name, origin, media_type, portrait } = req.body;

    const muse = await updateMuse({
      muse_id: req.params.id,
      name,
      origin,
      media_type,
      portrait,
    });

    res.send({ muse });
  })
  .delete(async (req, res) => {
    const muse = await deleteMuse({ muse_id: req.params.id });

    res.send({ muse });
  });

export default museRouter;