const express = require("express");  
const postRouter = require("./routes/post_routes")
const app = express();
const port = 3000;   

app.listen(port, ()=> console.log(`listening on ${port}`))  

app.use("/post", postRouter.router )

app.get("/", (req,res) =>{ 
    res.json({message:"Hello World"})
})