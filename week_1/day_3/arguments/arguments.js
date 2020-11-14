const multipleArguments = (...args) => {
    // return console.log(args.length) 
    if (args.length === 0)  {  
        console.log(0)
        return args
    } else if (args.length === 1) {  
        console.log(args) 
        return args
    } else {    
        console.log(args.reduce(function(a, b) {return a * b;}, 1))

       return args.reduce(function(a, b) {return a * b;}, 1)
    }


} 

multipleArguments(1,2,3,4,5,6,7)