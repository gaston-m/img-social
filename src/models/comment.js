const mongoose = require('mongoose');
const { Schema } =  mongoose;
const { ObjectId } = Schema;

const Comment = new Schema ({

    name: { type: String },
    email: {type: String },
    comment: {type: String },
    timestamp: { type: Date, default: Date.now },
    idImage: { type: ObjectId },
    gravatar : { type: String }
});

Comment.virtual('image').set(function (image) {

    this._image = image;
}).get(function(){

    return this._image;

});



module.exports = mongoose.model('Comment', Comment )