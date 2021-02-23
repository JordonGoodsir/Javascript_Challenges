function firstNonRepeatingLetter(s) { 
    let letters = {} 

    s.split("").forEach((v,i) => {  
    letters[v] ? letters[v] = letters[v] + 1 : letters[v] = 1 
    }) 

   return Object.keys(letters)[Object.values(letters).indexOf(1)] ? console.log(Object.keys(letters)[Object.values(letters).indexOf(1)]) : ""

  }

  firstNonRepeatingLetter('s,ress')