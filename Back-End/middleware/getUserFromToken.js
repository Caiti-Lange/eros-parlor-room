import { getUserById } from "#db/queries/user";
import { verifyToken } from "#utils/jwt";

export default async function getUserFromToken(req, res, next) {
  const token = req.get("authorization");
  if (!token) return next();

  try {
    const { id } = verifyToken(token);

    const user = await getUserById(id);

    req.user = user;
    next();
  } catch (error) {
    console.error(error);

    res.status(401).send("Invalid token.");
  }
}