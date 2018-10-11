const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

/* importing routes */

const customerRoutes = require('./routes/customers');


/*settings */

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* middlewares */

app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'files.000webhost.com',
    user: 'mycrudnodejs',
    password: '',
    port: 3306,
    database: 'id7396225_newusuarios'
}, 'single'));

app.use(express.urlencoded({ extended: false }));

/* routes*/

app.use('/', customerRoutes);

/*  static files */

app.use(express.static(path.join(__dirname, ' public')));

app.listen(app.get('port'), () => {
    console.log('escuchando en el puerto 3000');
});
