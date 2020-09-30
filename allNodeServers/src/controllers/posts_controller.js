const {getAllPosts} = require("../util/utilities")
const getPosts = (req,res) => {

    // util file would be the best place to have your logc + helper function, as it can be accessed by both tester and controller
    res.send(getAllPosts(req))
}

module.exports = {
    getPosts
}