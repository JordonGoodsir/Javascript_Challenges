decodeMorse = function(morseCode){
  

decodeMorse = function(morseCode){
  
    let setCode = morseCode.split(" ")  
    
    let ans = []
    
    setCode.map((v,i)=>{  
    
        if(v == "" && setCode[i+1] == "") {  
            setCode.splice(i, 1)  
        }
    })  
      
    setCode.map((v,i)=>{ 
    
      if (v == "") { 
        ans.push(" ")
        } else {  
          
          ans.push(MORSE_CODE[v])
          }
      
    }) 
      
      return ans.join("").trim()
      
      
    }  
}


  decodeMorse('.... . -.--   .--- ..- -.. .') 

