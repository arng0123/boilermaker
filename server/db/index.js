const db = require('./database')
const Puppies = require('./puppies')
const User = require('./users')


 Puppies.belongsTo(User)

module.exports = {
  // Include your models in this exports object as well!
  db,
  Puppies,
  User,
}