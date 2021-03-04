function incrementString (strng) { 

  let nums = []
  strng.split("").forEach((v,i)=>{  
    
    if (parseInt(v) !== NaN) {  
            nums.push(v) 
            console.log(parseInt(v))
          } 
          
  })

    console.log(nums) 


  } 

  incrementString("foobar000")