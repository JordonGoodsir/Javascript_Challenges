const findNeedle = (haystack) => {  

    let needle = [] 

    haystack.map((val,ind) =>{ 
      
        let success = false 

        val.map((v,i) => { 
          if (v == "N") { 
            needle.push(i)
              success = true
          }   
        }) 

        if (success) { 
            needle.push(ind)
        } 

    })  

   return needle.reverse()
    
}


const stack = [
    ['H', 'H', 'H'],
    ['H', 'H', 'H'],
    ['H', 'N', 'H']
  ] 

  findNeedle(stack)