function remove(items, callback) {
    // let removed = removerFunction(items) 
    // let people = items.filter(x=> x.toLowerCase().charAt(0) != "t") 
    // console.log(people)  
    // console.log(removed)  
 
    let toKill = items.indexOf(callback(items)); 
    
    items.splice(toKill) 

    console.log(items)
}

function removerFunction(item) {   
    let removed = item.filter(x=> x.toLowerCase().charAt(0) == "t")
    return removed
	// Your code goes here
	// Should return true if item begins with 't' and false otherwise
}

// module.exports = {remove, removerFunction}; 

remove(["dog","cat", "Toad"], removerFunction)
