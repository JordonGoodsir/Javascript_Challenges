function LCS(x, y) {  

    let common = []

    x.split("").forEach((v,i)=>{  
        if (y.split("").includes(v)){ 
            common.push(v)
        }
    }) 
    console.log([...new Set(common)])
    return [...new Set(common)]
  } 

  LCS("abcdef", "abc") 