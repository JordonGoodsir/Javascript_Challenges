deleteNth = (arr,n) =>{ 

    let arrSorted = arr.sort()

    for(i=0;i < arrSorted.length;i++) {    
    reapeated = 0
        
      for(inner=0;inner <= n;inner++) {  
          if (arrSorted[i] == arrSorted[i + inner]) { 
            reapeated++ 
          }  
          console.log(reapeated)

          if (reapeated > n) { 
            arrSorted.splice(i,reapeated - n)
          }
        }
    }
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

  deleteNth([1,1,3,3,7,2,2,2,2], 1)