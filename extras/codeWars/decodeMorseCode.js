decodeMorse = function(morseCode){
    // console.log(MorseCode.get(".--")) 

//   let toDecode = []
//   morseCode.split("").map((v,i)=>{  

//     let start 
//     let end 

//     if (!v === "" && !start) { 
//         start = i 
//     } else if (morseCode.split("")[i+1] === "") {  
//         end = i
//     } else if (v === "" && morseCode.split("")[i+1] == "") {  
//         toDecode.push("")
//     }

//   })  

// console.log(morseCode.split(" ").length) 

let setCode = morseCode.split(" ") 

setCode.map((v,i)=>{  

    if(v == "" && setCode[i+1] == "") {  
        setCode.splice(i, 1) 
    }
}) 

  }  

//   let test 

//   test ? console.log("its true") :  console.log("nah")

  decodeMorse('.... . -.--   .--- ..- -.. .') 

//   arr = [1,2,3,4] 

// arr.splice(0,2)

//   console.log(arr)