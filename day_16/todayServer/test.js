test = async () => {

await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 894)}`)  
  .then (response => response.json()) 
  .then (data =>{ 
      console.log(data)
  })  
  .catch(err => console.log(err)) 
} 

test()