// Capitalisation
// Create a function called capitalise that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, and make each other letter lowercase.

// E.g. capitalise(“sinGLE”), should return “Single”

// E.g. capitalise(“TWO words”), should return “Two Words”

// E.g. capitalise(“Quite a Long SENTENCE!”), should return “Quite A Long Sentence!” 

// capitalize first letter and capitalize first letter

const cap = str => {
  
  let split = str.split(" ").map((v,i)=> {   
    return v.split("")[0].toUpperCase() + v.split("").map(x=> x.toLowerCase()).splice(1).join("")
  }) 
  console.log(split.join(" "))

}

cap("Quite a Long SENTENCE!")