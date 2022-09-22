
const dbConnection = require('../../config/dbConnection');
module.exports = app => {
    const connection = dbConnection();

    app.get('/', (req, res) => {
        connection.query('SELECT * FROM user', (err, result) => {
            console.log(result);
            res.render('user/user', {
                user: result
            });
        });

    });
}