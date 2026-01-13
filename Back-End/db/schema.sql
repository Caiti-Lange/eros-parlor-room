DROP TABLE IF EXISTS muses;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  first_name text,
  last_name text,
  username text NOT NULL UNIQUE,
  password text NOT NULL,
  email text
);

CREATE TABLE muses (
  muse_id serial PRIMARY KEY,
  name text,
  origin text NOT NULL,
  media_type text NOT NULL,
  portrait text,
  user_id integer REFERENCES users(user_id) ON DELETE CASCADE
);