function shortestWalk(walk) {
    // your code here  


  for(i = 0; i < walk.length; i++){ 
    switch (walk[i]){ 
        case "NORTH":
        //   if north found go find the first south and delete it  
         if (walk.findIndex(v => v == "SOUTH") != -1) {  
            walk.splice(i,1) 
            i--            
            target = walk.findIndex(v => v == "SOUTH") 
            walk.splice(target,1)   
         }

        break; 

        case "SOUTH": 
        if (walk.findIndex(v => v == "NORTH") != -1) {  
            walk.splice(i,1) 
            i--    
            target = walk.findIndex(v => v == "NORTH") 
            walk.splice(target,1)   
         }
        break; 

        case "EAST": 
        if (walk.findIndex(v => v == "WEST") != -1) { 
            walk.splice(i,1) 
            i--   
            target = walk.findIndex(v => v == "WEST")  
            walk.splice(target,1)    
         }
        break; 

        case "WEST":  
        if (walk.findIndex(v => v == "EAST") != -1) { 
            walk.splice(i,1) 
            i--      
            target = walk.findIndex(v => v == "EAST")  
            walk.splice(target,1)     
              
         }
        break;
    }  
  } 
console.log(walk)  


}  

// if u find 2 direction that clash anialate them with .find 
// switch to find opposite

module.exports = shortestWalk 

shortestWalk(["NORTH", "SOUTH", "EAST", "WEST"])