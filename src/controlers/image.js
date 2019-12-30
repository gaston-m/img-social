const ctrl = {};

ctrl.index = (req, res) => {
   res.send('Index from to images');

};

ctrl.create = (req, res) => {
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