const Sequelize = require('sequelize')
const db = require ('./database')

module.exports = db.define('puppies', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false, 
        validate: {
            notEmpty: true
        }
    }, 

    imageUrl: {
        type: Sequelize.TEXT, 
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1Ak0u72_UBPEqybVcqB4Z54WP5ebun85V-w&usqp=CAU'
    }, 

})