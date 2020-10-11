const express = require("express");   
const app = express();
const postRouter = require("./routes/post_routes")
const port = 3000;   

app.listen(port, ()=> console.log(`listening on ${port}`))  

app.use("/post", postRouter)

app.get("/", (req,res) =>{ 
    res.json({message:"Hello World"})
})