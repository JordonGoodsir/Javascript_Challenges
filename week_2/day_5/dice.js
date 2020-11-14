diceRoller = max => {  
    if (max > 1) {
    return console.log(Math.floor((Math.random() * max) + 1)) 
    } else { 
        return console.log("Invalid dice max")
    }
} 

diceRoller(-1)