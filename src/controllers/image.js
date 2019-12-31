const path = require ('path');
const { randomNumber } = require ('../helpers/libs.js');
const fs = require('fs-extra');


const ctrl = {};

ctrl.index = (req, res) => {
   res.send('Index from to images');

};

ctrl.create = async (req, res) => {

   const imgUrl = randomNumber();
   console.log(imgUrl);

   const imageTempPath = req.file.path;
   const ext = path.extname(req.file.originalname).toLowerCase();
   const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
  
   console.log(req.file);
  

   if (ext==='.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif')
   {
      await fs.rename(imageTempPath, targetPath)


   }

   res.send('Create from to images');

};

ctrl.like = (req, res) => {

   res.send('Like from images');

};

ctrl.comment = (req, res) => {

   res.send('Comment from Images');

};

ctrl.delete = (req, res) => {

   res.send('DELETE FROM iMAGES')

};


module.exports = ctrl;