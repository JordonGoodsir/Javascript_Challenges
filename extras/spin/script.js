// https://css-tricks.com/capturing-all-events/ 

// display the number 

// logic of if number new message 

// particle effects on mose as higher number  

// instead of pointer animation 

// make animation in background more aggressive each milestone


let movement = 0  
let dots = document.getElementById("movingDots") 


// dotsPhase1 = () => {  
//          for (i = 0; i >= 10; i++) { 
         
//             let size = Math.floor(Math.random() * 3) + 1  
         
//             let newDot = document.createElement("LI")  
//             newDot.style.width = `${size}rem`;  
//             newDot.style.height = `${size}rem`; 
//             newDot.style.left = `${Math.floor(Math.random() * 100)}%`; 
//             newDot.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
//             newDot.style.animationDuration = `${Math.floor(Math.random() * 10) + 10}s`;  
   
//             dots.appendChild(newDot)  
   
//            //  potential fixes 
   
//            //  promises
   
//            // async
            
//            }  
// }

moveCounter = () => {  
    document.getElementById("mouseMove").innerHTML = movement+=1;   

    switch (movement) { 

        case 100: 
         document.getElementById("message").innerHTML = "MORE POWER"  
        
         let size = Math.floor(Math.random() * 3) + 1  
         
         let newDot = document.createElement("LI")  
         newDot.style.width = `${size}rem`;  
         newDot.style.height = `${size}rem`; 
         newDot.style.left = `${Math.floor(Math.random() * 100)}%`; 
         newDot.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
         newDot.style.animationDuration = `${Math.floor(Math.random() * 10) + 10}s`;  

         dots.appendChild(newDot)  

        break; 

        case 250: 
        document.getElementById("message").innerHTML = "HOLY HECK"
       break;

    } 


} 

document.getElementById("background").addEventListener("mousemove", moveCounter)  


// +++++++++++++++++++++++++++ 

