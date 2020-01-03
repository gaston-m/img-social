const path = require ('path');
const { randomNumber } = require ('../helpers/libs.js');
const fs = require('fs-extra');
const { Image, Comment } = require('../models/index.js'); 
const md5 = require ('md5');

const ctrl = {};

ctrl.index = async (req, res) => {
   
   const image = await Image.findOne({ filename: { $regex: req.params.image_id}});
   
   if (image) {
      
      image.views = image.views + 1;
      image.save();
      const comments = await Comment.find({idImage: image._id});   
      res.render('image', {image, comments });
   } else {
      res.redirect('/');
   }
};

ctrl.create = async (req, res) => {


   const saveImage = async () => {
      const imgUrl = randomNumber();
      const images = await Image.find({filename: imgUrl})
      if (images < 0){

         saveImage();
      } else {
   
      const imageTempPath = req.file.path;
      const ext = path.extname(req.file.originalname).toLowerCase();
      const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);
     
      console.log(targetPath);
     
   
      if (ext==='.png' || ext === '.jpeg' || ext === '.jpg' || ext === '.gif')
      {
         await fs.rename(imageTempPath, targetPath)
   
         const newImg = new Image ({
   
            title: req.body.title,
            filename: imgUrl + ext,
            description: req.body.description
   
         });
         console.log(newImg);
   
         const imgSave = await newImg.save();
         res.render('/images/' + imgUrl)
   
   
      } else {
   
         await fs.unlink(imageTempPath,() =>{ console.log('Archivo eliminado de Temp')} );
         res.status(500).json({error: "Solo se permiten Imagenes"});
   
      }
   
   }

   };







   saveImage();
  
   res.send('Create from to images');

};

ctrl.like = (req, res) => {

   res.send('Like from images');

};

ctrl.comment = async (req, res) => {

   const image = await Image.findOne({ filename: { $regex: req.params.image_id}});

   if ( image ){

      const newComment = new Comment (req.body);
      newComment.gravatar = md5( newComment.email );
      newComment.idImage = image._id;
      await newComment.save();
      res.redirect('/images/' + image.uniqueId);

   } else {

      res.redirect('/');
   }
};

ctrl.delete = (req, res) => {

   res.send('DELETE FROM iMAGES')

};


module.exports = ctrl;