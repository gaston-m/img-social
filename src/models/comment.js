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

module.exports = mongoose.model('Comment', Comment )