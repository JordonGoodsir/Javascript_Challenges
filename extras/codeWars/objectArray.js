// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns '' 

list = names => { 
    nam = names.map(x=> x.name)
    
    switch (true) {  

        case nam.length <=1: 
        return nam.join(" ") 
        break; 

        case nam.length == 2: 
        return nam.join(" & ") 
        break; 

        case nam.length > 2: 
        
         let product = nam.map((x, i)=>{  
            if (i == nam.length - 1) { 
               return "& " + x 
            } else if (i == nam.length || i == nam.length - 2) { 
                return x
            } else { 
                return x + ","
            } 
        }) 

        product.join(" ")

        break;

    }
} 

list([{name: 'Bart'}, {name: 'Bart'}, {name: 'Bart'}] )