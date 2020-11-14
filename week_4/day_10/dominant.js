// if (x % 2 == 0) { 
//   console.log("even")
// }    


positiveDominant = array => {  

    let pos = 0 
    let neg = 0 
    let uniq = [...new Set(array)] 

     uniq.map(v=>{ 
        Math.sign(v) == 1 ? pos++ : neg++
    })

    return pos > neg ? true :false
     
} 

let arr = [2,2,2,2,2,2,3] 

positiveDominant(arr)