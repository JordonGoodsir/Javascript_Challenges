fibonacci = (num) => { 
let num1 = 1; 

let num2 = 0; 

let sum = num1 + num2 

for (i = 1;i < num;i++) { 
    sum = num1 + num2  
    num2 = num1 
    num1 = sum
}

console.log(sum)
}   

fibonacci(7)

// always start at 0  = num1

// one start 1 = num2

// add result = eachother 

// result + prev result

// if 0 return 0