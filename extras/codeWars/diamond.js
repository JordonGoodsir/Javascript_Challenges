function diamond(n){ 
    if(n%2 ==0){ 
        return null
    } else if(n== 1){ 
        return `*\n`
    }


    ansArr=[]   

    realN= n 
    ansArr.push(`${"*".repeat(n)}\n`) 
    do{    
        n = n - 2     
        
        if(n==1){  
            ansArr.push(`${" ".repeat(Math.floor(realN)/ 2)}${"*".repeat(n)}\n`) 
            ansArr.unshift(`${" ".repeat(Math.floor(realN)/ 2)}${"*".repeat(n)}\n`)
        } else {  
            ansArr.push(`${" ".repeat(Math.floor(realN)/ n)}${"*".repeat(n)}\n`) 
            ansArr.unshift(`${" ".repeat(Math.floor(realN)/ n)}${"*".repeat(n)}\n`) 
        } 
    } 
    while(n > 1)   

    console.log(ansArr.join(""))

    return ansArr.join("")
  }  

  diamond(5)    



  

// what should look like
//   console.log(' *\n***\n *\n')  

// mine
//   console.log(' *\n ***\n *\n')

