
splitStrings = (str) =>{  
if (str.split("").length %2 == 0 && str.length > 0) {  
    return str.match(/.{1,2}/g)
} else if (str.length > 0) {  
    check = str.split("")
    check.push("_") 
    return check.join("").match(/.{1,2}/g) 
} else { 
return []
}
} 

splitStrings("")