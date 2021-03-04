Array.prototype.sameStructureAs = function (other) {
  
    let toMatch = [] 

    // toMatch.push(this.length) 
    
    //  this.forEach((v,i)=>{ 

    //  })       

    // let ans = []

    // let hello = "h h h ]           [" 

    // hello.split("").forEach((v,i) =>{ 
    //    ans.push(v.replace(/[^\[\] ]+/ ,"bye"))
    // })
 
    // console.log(ans.join(""))  

    let original = []  
    let second = []

    JSON.stringify(this).split("").forEach((v,i) => { 

        // console.log(JSON.stringify(this).split("")[i])
        if(JSON.stringify(this).split("")[i - 1] == `"` && v == "[" || v == "]" && JSON.stringify(this).split("")[i + 1] != undefined) {  
            original.push("")  
        } else { 
            original.push(v.replace(/[^\[\], ]+/ ,""))
        }
    })  
    
    JSON.stringify(other).split("").forEach((v,i) => {  
        
        if(JSON.stringify(other).split("")[i - 1] == `"` && v == "[" || v == "]" && JSON.stringify(this).split("")[i + 1] != undefined) { 
            original.push("")  
        } else { 
            second.push(v.replace(/[^\[\], ]+/ ,""))

        }
    })   


    console.log(original.join("")) 
    console.log(second.join(""))



    console.log(JSON.stringify(original.join(""))==JSON.stringify(second.join("")))  

    return JSON.stringify(original.join(""))==JSON.stringify(second.join(""))




    // console.log(JSON.stringify([[]]).replaceAll("[", "p"))
    // console.log(JSON.stringify([[]])==JSON.stringify([])) 


}; 
[1,'[',']'].sameStructureAs(['[',']',1]);