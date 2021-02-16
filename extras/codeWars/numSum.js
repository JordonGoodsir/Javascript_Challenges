function high(x){ 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');   
    let numbers = [] 
    let total = 0 

    x.split(" ").forEach((v,i) => {
        
        
        v.split("").map((letter,i)=>{  
            let letterNum = alphabet.indexOf(letter) + 1 
            total += letterNum    
         })  

        numbers.push(total) 

        total = 0

    });  
   return x.split(" ")[numbers.indexOf(Math.max(...numbers))]

} 

high('man i need a taxi up to ubud')

