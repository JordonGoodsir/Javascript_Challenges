one = (operation = 1) =>{  
    if (operation === 1){   
        return operation
    }else {  
        console.log(eval(1 + operation)) 
        return eval(1 + operation)
    }
 
} 

two = (operation = 2) =>{  
    if (operation === 2){  
        return operation
    }else {  
        console.log(eval(2 + operation)) 
        return eval(2 + operation)
    } 
    
} 

three = (operation = 3) =>{ 
    if (operation === 3){  
        return operation
    }else {  
        console.log(eval(3 + operation)) 
        return eval(3 + operation) 
    }
} 

plus = (num) =>{  
return ("+" + num)
    
} 

minus = (num) =>{  
return ("-" + num)  
} 

divide = (num) =>{  
return ("/" + num)  
}

multiply = (num) =>{  
return ("*" + num)   
}

// one(plus(one()))

module.exports = {
    one, two, three, plus, minus, divide, multiply
  } 

//   console.log(eval("3*" + 42))