const dataFile = "../data/blog_posts.json"
let blogPosts = require(dataFile) 
const { fs} = require("fs") 


const getAllPosts = (req,res) =>{ 
    return blogPosts
} 

// func for test pourpose 

loadData = (path) =>{ 
    blogPosts = JSON.parse(fs.readFileSync(path, 'utf8'))
} 

getDataFileRelativeToApp = (file) =>{ 
    return file.substring(file.lastIndexOf("../") + 3, file.length)
}

module.exports= { 
    getAllPosts, 
    loadData, 
    getDataFileRelativeToApp
}