import db from "#db/client";

/** @returns the muse created according to the provided details */
export async function createMuse({
    name = "",
    origin = "",
    media_type,
    portrait = "",
    user_id,
}) {
  const sql = `
        INSERT INTO muses
            (name, origin, media_type, portrait, user_id)
        VALUES 
            ($1, $2, $3, $4, $5)
        RETURNING *
    `;

  const {
    rows: [muse],
  } = await db.query(sql, [name, origin, media_type, portrait, user_id]);

  return muse;
}

export async function getAllMuses({ user_id }) {
  const sql = `
    SELECT * FROM muses
    WHERE user_id = $1
    ORDER BY muses.muse_id
    `;

  const { rows: muse } = await db.query(sql, [user_id]);

  return muse;
}

/**
 * @returns the muse with the given id
 * @returns undefined if muse with the given id does not exist
 */
export async function getMuseById(id) {
  const sql = `
    SELECT * FROM muses
    WHERE muses.muse_id = $1
    `;

  const {
    rows: [muse],
  } = await db.query(sql, [id]);

  return muse;
}

export async function updateMuse({
  name,
  origin,
  media_type,
  portrait,
  user_id
}) {
  const updates = [];
  const values = [];
  let paramCount = 1;

  if (name !== undefined) {
    updates.push(`name = $${paramCount}`);
    values.push(name);
    paramCount++;
  }
  if (origin !== undefined) {
    updates.push(`origin = $${paramCount}`);
    values.push(origin);
    paramCount++;
  }
  if (media_type !== undefined) {
    updates.push(`media_type = $${paramCount}`);
    values.push(media_type);
    paramCount++;
  }
  if (portrait !== undefined) {
    updates.push(`portrait = $${paramCount}`);
    values.push(portrait);
    paramCount++;
  }

  if (updates.length === 0) {
    // No fields to update, return the existing muse
    return await getMuseById(muse_id);
  }

  const sql = `UPDATE muses 
     SET ${updates.join(", ")}
     WHERE muse_id = $${paramCount}
     RETURNING *`;

  const {
    rows: [muse],
  } = await db.query(sql, [ muse_id]);

  return muse;
}

export async function deleteMuse({ muse_id }) {
  const sql = `DELETE FROM muse WHERE muse_id = $1 RETURNING *`;

  const {
    rows: [muse],
  } = await db.query(sql, [Muse_id]);

  return muse;
}