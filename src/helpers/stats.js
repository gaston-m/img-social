const { Comment, Image } = require("../models");

async function imageCounter() {
  return await Image.countDocuments();
}

async function commentsCounter() {
  return await Comment.countDocuments();
}

async function imageTotalViewsCounter() {
  const result = await Image.aggregate([
    {
      $group: {
        _id: "1",
        viewsTotal: { $sum: "$views" },
      },
    },
  ]);

  if (result.length < 1) {
    return 0;
  }
  return result[0].viewsTotal || 0;
}

async function likesTotalCounter() {
  const result = await Image.aggregate([
    {
      $group: {
        _id: "1",
        likesTotal: { $sum: "$likes" },
      },
    },
  ]);

  console.log(result);

  if (result.length < 1) {
    return 0;
  }

  return result[0].likesTotal;
}

module.exports = async () => {
  const result = await Promise.all([
    imageCounter(),
    commentsCounter(),
    imageTotalViewsCounter(),
    likesTotalCounter(),
  ]);

  return {
    images: result[0],
    comments: result[1],
    views: result[2],
    likes: result[3],
  };
};
