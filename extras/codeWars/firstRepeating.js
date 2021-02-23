function firstNonRepeatingLetter(s) { 
    let letters = {} 

    s.split("").forEach((v,i) => { 
        
        if (v == v.toUpperCase()) {   
            if (letters[v.toLowerCase()]){  

                letters[v.toLowerCase()][0] = letters[v.toLowerCase()][0] + 1

            } else {  
                letters[v.toLowerCase()] = [1]     
                letters[v.toLowerCase()].push(true)
            }
        } else {   
            letters[v] ?  letters[v][0] = letters[v][0] + 1 : letters[v] = [1] 
        }
    
    })  

   

let ans = ""


let i = 0  



Object.values(letters).forEach((v,i)=>{  
    if (Object.values(letters)[i][0] == 1) { 
        Object.values(letters)[i].length == 2 ? ans = [i, true] : ans = [i]
   }
}) 

 return ans == "" ? ans : (ans.length == 2 ? console.log(Object.keys(letters)[ans[0]].toUpperCase()) : console.log(Object.keys(letters)[ans[0]]))

 

   
  }

  firstNonRepeatingLetter(`stress`)