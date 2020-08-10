const Sequelize = require('sequelize');

const sequelize = new Sequelize('vooy-shops', 'root', '123456', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;