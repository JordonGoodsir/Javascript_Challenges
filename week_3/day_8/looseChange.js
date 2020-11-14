enough = (amount, whole) => {  
    let times = 0 

    if (amount > whole) {
     while (amount > 0) {  
     amount -= whole 
     times +=1
     }   
    } 
    return times
}  

// console.log(enough(23,0.10) * 0.10)


// looseChange = (amount) => { 
//     let change = { 
//         "2d": 0, 
//         "1d": 0, 
//         "50c": 0, 
//         "10c": 0, 
//         "5c": 0
//      }   
      

//         change["2d"] = enough(amount, 2); 
//         amount -= (change["2d"] * 2);
  
//         change["1d"] = enough(amount, 1); 
//         amount -= (change["1d"] * 1);
 

//         change["50c"] = enough(amount, 0.50); 
//         amount -= (change["50c"] * 0.50);

 
//         change["10c"] = enough(amount, 0.10); 
//         amount -= (change["10c"] * 0.10);
  

//         change["5c"] = enough(amount, 0.05);
//         amount -= (change["5c"] * 0.05); 


//      console.log(change)
// }   

 let change = { 
        "2d": 0, 
        "1d": 0, 
        "50c": 0, 
        "10c": 0, 
        "5c": 0
        }   

const looseChange = (amount) => { 

    return new Promise((resolve,reject) => {   

      resolve(amount)

    })
} 

looseChange(5) 
    .then(am => change["2d"] = enough(am, 2)) 
    .then(res => console.log(res))

// change["2d"] = enough(amount, 2); 
//         amount -= (change["2d"] * 2);

// looseChange(23) 

