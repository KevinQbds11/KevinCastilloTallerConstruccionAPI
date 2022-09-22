const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: '127.0.0.1',
        database: 'userstaller',
        user: 'root',
        password: '131001',
    });
}