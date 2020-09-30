const express = require("express")  
const router = express.Router() 
const getPosts  = require("../controllers/posts_controller")   


router.get("/", getPosts)

module.exports = { 
    router 
}