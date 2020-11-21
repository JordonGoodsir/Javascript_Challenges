// var moveZeros = function (arr) {
//   arr.forEach((v,i)=>{ 
//       if(v==0){ 
//       arr.push(arr.splice(i,1)[0])
//       }
//   }) 
//   console.log(arr)
//     return arr 
// } 

// moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]) 

// var moveZeros = function (arr) { 
//     count = 0 
//     ansArr= []
//     arr.forEach((v,i)=>{ 
//         if(v==0){ 
//         count +=1 
//         } else{ 
//             ansArr.push(v)
//         }
//     }) 
//     console.log( [...ansArr, Array(count).fill(0)].flat())  

//   } 
  
//   moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])  

var moveZeros = function (arr) { 
    count = 0 
    ansArr= []
    arr.forEach((v,i)=>{ 
        if(v==0){ 
        count +=1 
        } else{ 
            ansArr.push(v)
        }
    })   
    return ansArr.concat(Array(count).fill(0))

  } 
  
  moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])  

console.log(Boolean([] === 0)) 

