require("dotenv").config();

const knex = require("knex")({
    client: "mysql2",
    connection: {
      host: process.env.host,
      port: process.env.port,
      password: process.env.password,
      user: process.env.user,
      database: process.env.database,
    },
  });

// am dera bo awaya pet ble ka connetionaka sarkawtwbwa yan na! 
knex.raw('SELECT 1').then(() => {
    console.log('connected to the database successfully');
}).catch((err) => {
    console.log('Error connecting to the database', err);
});

module.exports = knex