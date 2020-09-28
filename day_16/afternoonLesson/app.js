const express = require("express");  
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3000;  


let hi =["hi","hi"]   

// body parser middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middle ware appllying to all routes

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })  

  // middle ware appllying to specific route
  app.post("/students",(req, res, next) =>{
    console.log("middle ware running")
    next()
}, (req,res) => {
    res.send(students)
}) 

//

app.get("/", (req,res) =>{ 
    res.render("home")
}) 
 

app.get("/hi", (req,res) =>{  
    res.send(hi) 
})  

app.post("/add", (req,res) =>{   
    console.log(req.body)
    hi.push(req.body.name)
    res.send(hi)
}) 

app.listen(port, ()=> console.log(`listening on ${port}`))