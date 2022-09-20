//Auxiliar Libraries
const express = require('express');
//Database Connection
const { db_connection } = require('./database/connection');

//Using express
const app = express();

//Defining the API port
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Limitations
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

//Routes
app.use('/api/users', require('./routes/user'));

//Testing the db connection

try {
    const db_status = db_connection.authenticate();
    console.log("Connection has been established succesfully.");
} catch (error) {
    console.error("Unable to connect to the database.", error);
}

//Server
app.listen(app.get('port'), () => {
    console.log('Server in port: ', 4000);
});

