const Sequelize = require('sequelize')
const db = require ('./database')

module.exports = db.define('users', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
            notEmpty: true
        }
    }, 

    imageUrl: {
        type: Sequelize.TEXT, 
        defaultValue: 'https://i.pinimg.com/originals/a1/3d/59/a13d594d0df160a546c25ad906011893.jpg'
    }, 

    description: {
        type: Sequelize.TEXT
    }

})