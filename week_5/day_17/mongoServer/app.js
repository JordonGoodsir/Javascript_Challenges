const express = require("express");  
const port = 3000;    
const app = express();  

const {books} = require("./books")

app.listen(port, ()=> console.log(`listening on ${port}`)) 

app.get("/", (req,res) => { 
    res.send(books) 
})  

app.delete("/delete/:index", (req,res) =>{ 
    res.send(delete books[req.params.index]) 
}) 

app.post("/add", (req,res) =>{ 
    books.push({id:books.length+1, name:`movie ${books.length+1}`, author:`author ${books.length+1}`, movie:"true"}) 
    res.redirect('/');
}) 

app.patch("/edit/:index/:dot/:value", (req,res)=>{  
    
    let dot = req.params.dot 
    let value = req.params.value 

    books[req.params.index][`${dot}`] = value
    res.redirect('/');


})

// console.log(books)
