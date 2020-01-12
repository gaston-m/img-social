const express = require ('express');
const router = express.Router();
const home = require ('../controllers/home.js');
const image = require('../controllers/image.js');


module.exports = app => {

    app.get('/', home.index);
    app.get('/images/:image_id', image.index);
    app.post('/images', image.create);
    app.post('/images/:image_id/likes', image.like);
    app.post('/images/:image_id/comment', image.comment);
    app.delete('/images/:image_id', image.delete);

    app.use(router);

};