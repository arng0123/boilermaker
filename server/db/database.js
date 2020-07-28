const Sequelize = require('sequelize');

// Postgres database by creating a Sequelize instance (called `db`).
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432:boilerUsers', {
  logging: false // unless you like the logs
  // ...and there are many other options you may want to play with
});

module.exports = db;