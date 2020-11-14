function sumIfPossible(arr) { 
 let filterdArr = arr.filter(v=> typeof v == "number")  
 let sumArr = filterdArr.reduce((a,b) => a+b)
 
  let ans = { 
      sum: sumArr, 
      skip: arr.length - filterdArr.length
  } 

  return ans 
}   

sumIfPossible(["number", 234, 34, "string", -9])


