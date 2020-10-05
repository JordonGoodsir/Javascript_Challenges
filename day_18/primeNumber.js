primeNumber = (number) => {  

    if (number == 2) {  
        console.log(number)
        return number
    }

  for(i = 2; i < number; i++) { 

    if (number % i === 0) {  
            console.log("nop")
            return false; 
    } else {  
        console.log(number)
        return number
    }
  } 
}

// module.exports = primeNumber 

// only divisible by itself or 1  
// console.log("hi")

primeNumber(2)