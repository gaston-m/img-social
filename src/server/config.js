const path = require ('path');
const exphbs = require ('express-handlebars');
const morgan = require ('morgan');
const multer = require('multer');
const express = require('express');
const routes = require ('../routes/index'); 
const errorHandler = require('errorhandler');

module.exports = app => {



    /// Settings

  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join( __dirname, '../views' ));  
  app.engine('.hbs', exphbs({  // Con esto definimos el motor de Plantillas pero no lo estamnos usando todavia..........

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./helpers.js'),
    extname: '.hbs'
  }));

  app.set('view engine', '.hbs');


//Middlewares

app.use(morgan('dev'));
app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//Routes

routes(app);

//Static Files

app.use(express.static(path.join(__dirname, '../public')));
app.use('./favicon.ico', express.static('/favicon.ico'));

//Errorhandler
if ('develpement' === app.get('env')) { app.use(errorHandler)}

    return app;
};