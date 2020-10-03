deleteNth = (arr,n) =>{ 

    let arrSorted = arr.sort() 
    let arrLength = arr.length

    // for(i=0;i < arrSorted.length;i++) {    
    // reapeated = 1 
    //  console.log(arrSorted.length) 

    let reapeated = 0 

    arrSorted.forEach((v,i) =>{   
        console.log(reapeated)
        
        if (reapeated > n) { 
            arrSorted.splice(i, reapeated - n)  
          }
      reapeated = 0 

      for(inner=0;inner <= arrSorted.length;inner++) {  
          if (arrSorted[i] == arrSorted[i + inner]) { 
            reapeated++  
          }  
        } 
    })
    // }

console.log(arrSorted)
    // for(i=0;i < arr.length;i++) {  
    //     if (arr[i] == first) { 
    //         occur++ 
    //     } 

    //     if (arr[i] == first && occur > n){ 
    //       arr.splice(i,1)
    //     } 
    // }  
  } 

  deleteNth([1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,5,5,5,5,5,5], 2)