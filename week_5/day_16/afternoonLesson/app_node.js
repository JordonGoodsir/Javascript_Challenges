const http = require("http")  
const hostName ="127.0.0.1" 
const port= 3000 

let students = ["hi","bye"]

const server = http.createServer((req,res) =>{  
    // req.statusCode = 200;  
    // res.setHeader("Content-Type", "text/plain") 
    // console.log(req.method, req.url)
    // res.end("hello world") 

    if (req.method == "GET" && req.url == "/") { 
        console.log("matching") 
    } else if (req.method == "GET" && req.url == "/students") { 
        console.log("getting students") 
        res.writeHead(200, {"Content-Type" : "application/json"}) 
        res.write(JSON.stringify(students))
    } else if (req.method == "POST" && req.url == "/students") { 
        console.log("creating students")
    } else { 
        console.log("no route found")
    } 
    res.end()

}) 

server.listen(port, hostName, () =>{ 
    console.log(`server running on ${hostName}:${port}`)
})