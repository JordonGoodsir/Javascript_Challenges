function nextBigger(n){ 
  let ans = [] 
  let brokenNum = n.toString().split("")

  
    for (i = 0; i < brokenNum.length; i++) {  
      
      if (brokenNum[i] > brokenNum[i + 1]){  
        ans.push(brokenNum[i])
      } else {  
        ans.push(brokenNum[i + 1]) 
        ans.push(brokenNum[i]) 
        i++ 
        i++
      }
    } 
  //  challenge complete
    console.log(ans)


  } 

 nextBigger(2017)