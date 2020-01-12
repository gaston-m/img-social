const { Comment, Image } = require ('../models');

async function imageCounter() {

    return await  Image.countDocuments();

}

async function commentsCounter (){

    return await Comment.countDocuments();

}

async function imageTotalViewsCounter () {

    const result =  Image.aggregate([{$group: {
    _id: '1',
    viewsTotal: {$sum: '$views'}

    }}]);

    return result[0].viewsTotal;


}

async function likesTotalCounter () {

    const result = await Image.aggregate([{$group: {

        _id: '1',
        likestotal: {$sum: '$likes'}

    }}]);

    return result[0].likesTotal;
}


module.exports = async () => {

    const result = await Promise.all([

        imageCounter(),
        commentsCounter(),
        imageTotalViewsCounter(),
        likesTotalCounter()
    ])

    return {

        images: result[0],
        comments: result[1],
        views: result[2],
        likes: result[3]

    }
};