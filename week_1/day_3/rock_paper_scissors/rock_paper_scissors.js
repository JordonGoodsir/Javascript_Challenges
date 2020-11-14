// const rps = (player1, player2) => {
    
//     // Rock beats Scissor
//     // Paper beats Rock
//     // Scissor beats Paper   
//     player1 = player1.toLowerCase();
//     player2 = player2.toLowerCase();
//     let p1Win = "The winner is player 1"; 
//     let p2Win = "The winner is player 2";  
//     let draw = "It's a draw";
    
//     if (player1 === "rock" && player2 ==="scissors") { 
//         return p1Win  
//     }else if (player1 === "paper" && player2 ==="scissors") {   
//         return p1Win  
//     } else if (player1 === "scissors" && player2 ==="paper") {   
//         return p1Win  
//     } else if (player2 === "paper" && player1 ==="scissors") {   
//         return p2Win  
//     } else if (player2 === "rock" && player1 ==="scissors") {   
//         return p2Win  
//     } else if (player1 === "scissors" && player2 ==="paper") {   
//         return p2Win  
//     } else if (player1 == player2) { 
//         console.log(draw)   
//         return draw  
//     } 
//     }; 

//     rps("rock", "scissors")
    
//     // Dont't change this!
//     module.exports = rps; 

function checkExam(array1, array2) {
    let score = 0;
     
    array1.forEach( (v) => {  
       array2.forEach( (s) => { 
       
       if (v == s) { 
        score += 4 
        console.log(score)  
       } else if (s == "") {
         score += 0
       }else { 
          score -= 1 
       }; 
       
     })
     
     })  

     return score
   
   }

  checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"])