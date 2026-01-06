import { faker } from "@faker-js/faker";
//import db from client.js
import db from "#db/client";
//db query functions
import { createPlant } from "./queries/plants.js";
import { createUser } from "./queries/users.js";
//plantSpecies for seeding
import plantSpecies from "./plantSpecies.js";

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

    const plant = {
      water_frequency: `${Math.floor(Math.random() * 10) + 1} per ${
        randomNum === 0 ? "day" : "week"
      }`,
      species: plantSpecies[Math.floor(Math.random() * plantSpecies.length)],
      user_id: user.user_id,
    };

    await createPlant(plant);
  }
}