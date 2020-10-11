const dataFile = "../data/blog_posts.json"
let blogPosts = require(dataFile) 
const { fs} = require("fs") 


const getAllPosts = (req,res) =>{ 
    return blogPosts
}  

const getPostById = (req,res) =>{  
    let post = blogPosts[req.params.id] 
    if (post) return post 
    else req.error = "post not found"
    
} 

const addPost =(req) =>{
    try{
        const date = Date.now()
		let blogPost = {
			title: req.body.title,
			create_date: date,
			modified_date: date,
			username: req.body.username,
			content: req.body.content,
			category: req.body.category || ""
		}
		blogPosts[getNextId()] = blogPost
		// node file write: in future this will be replaced with mogodb create
		fs.writeFileSync(getDataFileRelativeToApp(dataFile), JSON.stringify(blogPosts))
		return blogPost
    }catch{ 
        console.log(error) 
        req.error = error 
        return null

    }
} 

function getNextId(){
    let sortedIds = Object.keys(blogPosts).sort()
	nextId = (sortedIds.length != 0) 
			? parseInt(sortedIds[sortedIds.length-1]) + 1
			: 1
	return nextId
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
    getDataFileRelativeToApp, 
    getPostById
}