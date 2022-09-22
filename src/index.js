const app = require('./config/server');

require('./app/routes/user')(app);

//Starting server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});


