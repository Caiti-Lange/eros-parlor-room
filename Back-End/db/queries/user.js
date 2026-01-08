import db from "#db/client";
import bcrypt from "bcrypt";

/** @returns the user created according to the provided details */
export async function createUser({
  first_name = "",
  last_name = "",
  password,
  username,
  email = "",
}) {
  const sql = `
        INSERT INTO users
            (first_name, last_name, password, username, email)
        VALUES 
            ($1, $2, $3, $4, $5)
        RETURNING *
    `;

  const hashedPassword = await bcrypt.hash(password, 10);

  const {
    rows: [user],
  } = await db.query(sql, [
    first_name,
    last_name,
    hashedPassword,
    username,
    email,
  ]);

  return user;
}

/**
 * @returns the user with the given id
 * @returns undefined if user with the given id does not exist
 */
export async function getUserById(id) {
  const sql = `
  SELECT *
  FROM users
  WHERE user_id = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [id]);
  return user;
}

/**
 * @returns the user with the given username
 * @returns undefined if user with the given id does not exist
 */
export async function getUserByUsername({ username, password }) {
  const sql = `
  SELECT *
  FROM users
  WHERE username = $1
  `;

  const {
    rows: [user],
  } = await db.query(sql, [username]);

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return null;
  }

  return user;
}