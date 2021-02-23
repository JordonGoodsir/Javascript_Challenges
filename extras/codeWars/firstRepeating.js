function firstNonRepeatingLetter(s) { 
    let letters = {} 

    s.split("").forEach((v,i) => { 
        
        if (v == v.toUpperCase()) {   
            if (letters[v.toLowerCase()]){  
                // letters[v.toLowerCase()] = letters[v.toLowerCase()] + 1     
                // console.log(typeof letters[v.toLowerCase()] + 1) 
                // console.log(letters[v.toLowerCase()][0] + 1) 
                // letters[v.toLowerCase()][0] = [letters[v.toLowerCase()] + 1 ]  
                letters[v.toLowerCase()][0] = letters[v.toLowerCase()][0] + 1

            } else {  
                // letters[v.toLowerCase()] = 1     
                letters[v.toLowerCase()] = [1]     
                letters[v.toLowerCase()].push(true)
            }
        } else {  
            // letters[v] ? letters[v] = letters[v] + 1 : letters[v] = [1]  
            
            // letters[v] ? letters[v][0] = letters[v][0] + 1 : letters[v] = [1]  
            letters[v] ?  letters[v][0] = letters[v][0] + 1 : letters[v] = [1] 


        }
    
    })  

   

    console.log(letters)
 

//    return Object.keys(letters)[Object.values(letters).indexOf(1)] ? console.log(Object.keys(letters)[Object.values(letters).indexOf(1)]) : "" 

   
  }

  firstNonRepeatingLetter('sTtrReSS')