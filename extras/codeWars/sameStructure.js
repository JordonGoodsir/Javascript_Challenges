Array.prototype.sameStructureAs = function (other) {
  
    let toMatch = [] 

    // toMatch.push(this.length) 
    
    //  this.forEach((v,i)=>{ 

    //  })       

    // let ans = []

    // let hello = "h h h e           e" 

    // hello.split("").forEach((v,i) =>{ 
    //    ans.push(v.replace(/[^h ]+/ ,"bye"))
    // })
 
    // console.log(typeof ans.join(""))  

    let ans = [] 

    this.split("").forEach((v,i) => { 
        ans.push(v.replace(/[^[]]+/ ," "))
    }) 

    ans.split(" ")



    // console.log(JSON.stringify([[]]).replaceAll("[", "p"))
    // console.log(JSON.stringify([[]])==JSON.stringify([])) 


}; 
[ [ ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 