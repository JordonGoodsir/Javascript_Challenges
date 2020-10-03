function solution(number){
    // convert the number to a roman numeral 
    // divide each postion 

    let roman = [ 
        {num: 1, letter: "I"},  
        {num: 5, letter: "V"},
        {num: 10, letter: "X"}, 
        {num: 50, letter: "L"}, 
        {num: 100, letter: "C"}, 
        {num: 500, letter: "D"}, 
        {num: 1000, letter: "M"}
    ]
     
  //   if 3 of smame characters + one of after index  

  console.log(roman[0].num)

//   let numerals = number.split("")

//   for(i=0; i< numerals.length;i++){  
//       if (numerals[i] == numerals[i+1] && numerals[i] == numerals[i+2]){ 
//         console.log("triple")
//     } else { 
//         console.log("nothing to report")
//     }
    
//   }
  
  } 

  solution("111")