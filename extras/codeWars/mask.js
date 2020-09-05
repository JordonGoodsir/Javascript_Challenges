function maskify(cc) { 
  
  let maskLength = cc.split("").length 

  if (maskLength > 4) { 
      return cc.split("").map((v,i) => i < (maskLength - 4) ? "#": v).join("")

  } else { 
      return cc
  }
  
} 

maskify("hello") 

// let regex =  /\./g

// let paragraph = "the . plan"

// console.log(paragraph.replace(regex,"good"))