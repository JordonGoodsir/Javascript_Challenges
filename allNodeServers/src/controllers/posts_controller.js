const {getAllPosts, getPostById} = require("../util/utilities")
const getPosts = (req,res) => {

    // util file would be the best place to have your logc + helper function, as it can be accessed by both tester and controller
    res.send(getAllPosts(req))
} 

const getPost = (req,res) =>{ 
    let post = getPostById(req) 
    if (post) res.send(post) 
    else { 
        res.status(404) 
        res.send(req.error)
    }
} 

const makePost = (res,req) =>{ 
    let post = addPost(req) 
    if (post) { 
        res.status(201)  
        res.send(post)
    } else{ 
        res.status(500) 
        res.send(req.error)
    }
}

module.exports = {
    getPosts, 
    getPost, 
    makePost,
}