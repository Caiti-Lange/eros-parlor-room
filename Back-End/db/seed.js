import { faker } from "@faker-js/faker";
//import db from client.js
import db from "#db/client";
//db query functions
import { createMuse } from "./queries/muses.js";
import { createUser } from "./queries/user.js";
//plantSpecies for seeding
import mediatype from "./mediatype.js";

//connect to the database using pg
await db.connect();

//call seedBooks function defined below
await seedTables();

//end the connection to the database
await db.end();

//log a message to the console ensuring a successing seeding
console.log("🌱 Database seeded.");

async function seedTables() {
  for (let i = 0; i < 10; i++) {
    const person = {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      password: faker.internet.password(),
      username: faker.internet.username(),
      email: faker.internet.email(),
    };

    const user = await createUser(person);

    const randomNum = Math.round(Math.random());

    const muse = {
      name: faker.person.firstName(),
      origin: faker.book.title(),
      media_type: mediatype[Math.floor(Math.random() * mediatype.length)],
      portrait: faker.image.personPortrait(),
      user_id: user.user_id,
    };

    await createMuse(muse);
  }
}