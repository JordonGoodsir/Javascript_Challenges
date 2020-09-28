const express = require("express"); 
const fetch = require("node-fetch")  
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;   


app.get("/person/:name", (req,res) =>{  
    res.send(`I greet you ${req.params.name}`)
})  

app.get("/", (req,res) =>{ 
    // console.log("hi") 
    res.send("hi")
})  

app.get("/coinflip/:amount", (req,res) =>{ 
    let flips = req.params.amount  
    let heads = 0 
    let tails = 0  
    for(i=1; i <= flips;i++) {  
      
        if(Math.floor(Math.random() * 2) + 1 == 1) { 
            heads++
        } else { 
            tails++
        }
    } 
    res.send(`heads ${heads}:tails ${tails}`) 
})  

app.get("/poketeam/:size", async (req,res) =>{   

let team = { 
    pokemon:[]
}

for(i=1; i <= req.params.size;i++) {
    
await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 894)}`)  
  .then (response => response.json()) 
  .then (data =>{ 
    let name = data.species.name; 
    let pic = data.sprites.back_default  

    if (data.types.length == 2) { 
      let type1 = data.types[0].type.name 
      let type2 = data.types[1].type.name 
      team.pokemon.push({name:name, pic:pic,type1:type1,type2:type2})
    } else {  
      let type1 = data.types[0].type.name 
      team.pokemon.push({name:name, pic:pic,type1:type1})
    }  
              
                  
  })  
  .catch(err => console.log(err)) 
} 

res.send(team)

})  



app.listen(port, ()=> console.log(`listening on ${port}`)) 
