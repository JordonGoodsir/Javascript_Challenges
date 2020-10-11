const express = require("express")  
const router = express.Router() 
const {getPosts, getPost}  = require("../controllers/posts_controller")   


router.get("/", getPosts)  

// get partiuclar post 

router.get("/:id", getPost) 

router.post()

module.exports = router 
