const express = require ('express');
const router = express.Router();
const home = require ('../controlers/home.js');
const image = require('../controlers/image.js');


module.exports = app => {

    app.get('/', home.index);

    app.use(router);

};