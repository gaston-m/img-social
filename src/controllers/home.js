const ctrl = {};
const { Image }= require ('../models');
const sidebar = require ('../helpers/sidebar.js');


ctrl.index = async (req, res) => {
    const images = await Image.find().sort({timestamp: -1});
    let viewModel = {image: []};
    viewModel.images = images;
    viewModel = await sidebar (viewmodel);
    res.render('index', viewModel);

};

module.exports = ctrl;