// Exes and Ohs
// Write some fun JS code that will take a string as an argument. The method will check this string, and count the amount of 'x's and 'o's. It should return true if the amount of 'x's and 'o's are the same, and should return false if they are different. It should also be case insensitive.

// E.g. exesAndOhs("ooxx") should return true

// E.g. exesAndOhs("oOxXxoX") should return false 

const exesAndOhs = (string) => { 
    let x = [] 
    let o = []
	string.toLowerCase().split("").map( v => {   
        

        if (v === "x") { 
          x.push(v)
        } else if (v === "o") { 
            o.push(v)
        } 

    }) 
    if (x.length === o.length) {  
        console.log("true")
        return true
    } else {  
        console.log("false")
     return false 
    }
}; 

exesAndOhs("Xoxo")