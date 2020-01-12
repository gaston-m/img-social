const Stats = require ('./stats.js');
const Images = require ('./images.js');
const Comments = require ('./comments');

module.exports = async function (viewModel) {

    const result = await Promise.all([

        Stats(),
        Images.popular(),
        Comments.newest()
    ])

    viewModel.sidebar = {

        stats: result[0],
        popular: result[1],
        comments: result[2]
    }
    
    return viewModel;
    


}
