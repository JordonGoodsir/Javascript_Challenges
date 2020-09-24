function getRandomNumberForPokeAPI(){
    // The "808" is just a safe maximum for how many Pokemon are currently in the API.
    // When they add more Pokemon, that number should go up.
    // Some newer Pokemon (numbers 808 and above) might be missing some data - 
    // if that's the case, just change this number back to 808 instead of 894.
    let suitableNumber = Math.floor(Math.random() * 894);
    return suitableNumber;
    
    // You would then place this number in the PokeAPI url as per the API docs,
    // using trusty ol' string interpolation.
    // Like so:
    // https    ://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}
} 

 pokeGet = () => {  
     

    axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`) 
    .then(response => {   

        document.getElementById("pokemonName").childNodes[1].innerHTML = "Name: " + response.data.species.name
                  
        if  (response.data.sprites.back_default) { 
            document.getElementById("pokImg").src = response.data.sprites.back_default
        } else { 
            document.getElementById("pokImg").src = "https://static.thenounproject.com/png/1103191-200.png"
        }



        if (response.data.types.length == 2) {     

            
            // let type1 = document.createElement("P") 
            // let type1Text = document.createTextNode(response.data.types[0].type.name)  
            // type1.appendChild(type1Text)  

            // let type2 = document.createElement("P") 
            // let type2Text = document.createTextNode(response.data.types[1].type.name)  
            // type2.appendChild(type2Text)
            
            
            // document.getElementById("pokemonType1").appendChild(type1)  
            // document.getElementById("pokemonType2").appendChild(type2)   
            document.getElementById("pokemonType1").childNodes[1].innerHTML = "Type1: " + response.data.types[0].type.name
            document.getElementById("pokemonType2").childNodes[1].innerHTML = "Type2: " + response.data.types[1].type.name






        } else {  
            // let type1 = document.createElement("P") 
            // let type1Text = document.createTextNode(response.data.types[0].type.name)  
            // type1.appendChild(type1Text)   

            // document.getElementById("pokemonType1").appendChild(type1)   
            document.getElementById("pokemonType1").childNodes[1].innerHTML = "Type1: " + response.data.types[0].type.name 
            document.getElementById("pokemonType2").childNodes[1].innerHTML = ""

        } 
    }) 
    .catch(err => { 
        console.log(err);
    }) 

}

// Write your own JS after this line --------------------------------------
document.getElementById("encounter").addEventListener("click", pokeGet)