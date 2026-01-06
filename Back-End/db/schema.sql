DROP TABLE IF EXISTS muse;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id serial PRIMARY KEY,
  first_name text,
  last_name text,
  username text NOT NULL UNIQUE
  password text NOT NULL,
  email text
);

CREATE TABLE muse (
  muse_id serial PRIMARY KEY,
  name text,
  origin text NOT NULL,
  media_type text NOT NULL,
  img_url text,
  user_id integer UNIQUE REFERENCES users(user_id) ON DELETE CASCADE,
);