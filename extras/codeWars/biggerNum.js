function nextBigger(n){ 
  let ans = [] 
  let brokenNum = n.toString().split("")

  brokenNum.map((v,i) => { 
      if (i > -1) {  
       v >  brokenNum[i + 1] ? ans.push(brokenNum[i + 1]) : 
      } else { 
        ans.push(v)
      } 
    })
  } 

 nextBigger(12)