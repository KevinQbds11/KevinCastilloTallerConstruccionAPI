const { Sequelize } = require('sequelize');

const db_connection = new Sequelize(
    'users_test',
    'root',
    '131001',
    {
        host: '127.0.0.1',
        dialect: 'mysql',
    });

module.exports = {
    db_connection
};