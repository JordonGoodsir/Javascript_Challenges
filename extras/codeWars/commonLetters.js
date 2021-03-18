function LCS(x, y) {  

    let common = []

    x.split("").forEach((v,i)=>{  
        if (y.split("").includes(v)){ 
            common.push(v)
        }
    })  
    
    console.log([...new Set(common)].join(""))
    return [...new Set(common)].join("")
  } 

  LCS("a", "b") 