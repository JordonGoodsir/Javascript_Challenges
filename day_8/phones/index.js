const phones = require(`./phones`) 


const last2YearCheck = () => { 
    return new Promise((resolve,reject) => {  
    
    let good = phones.phones.filter((v) => {
    if (v.year >= 2018 && v.year <= 2020) { 
        return v
    }
    })

    if (good.length == 0) { 
        reject("nothing good")
    } 

    resolve(good)
    
}) 
} 

// console.log(phones.phones)
// last2YearCheck() 
//     .then(accYear=> {  
//         console.log(accYear) 
//     }) 
//     .catch(err => console.log(err))

const notAppleOrGoogle = (arr) => { 
    return new Promise((resolve,reject) => { 
    
    let notBigTwo = arr.filter(v => {  

       if(v.manufacturer != "Apple" && v.manufacturer != "Google") {  
       return v   
       }
    })   

     if (notBigTwo.length == 0) { 
        reject("nothing good")
    } 

    resolve(notBigTwo)

    
    })
}  

// notAppleOrGoogle() 
//  .then(noBig=> {  
//         console.log(noBig) 
//     }) 
//     .catch(err => console.log(err)) 

const afford = (arr) => { 
    return new Promise((resolve,reject) => { 
    
    let able = arr.filter(v => { 
       if(v.cost <= 500) {  
       return v   
       }
    })   

     if (able.length == 0) { 
        reject("nothing good")
    } 

    resolve(able)

    
    })
}  

// afford(phones) 
//     .then(x => console.log(x)) 
//     .catch(err => console.log(err))  

const options = () => {  
    
    last2YearCheck() 
        .then(last2 => notAppleOrGoogle(last2))
        .then(notBig2 => afford(notBig2)) 
        .then(result => console.log(result)) 
        .catch(err => console.log(err))  

} 

options()







