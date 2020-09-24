xAxisMoving = document.getElementById("moving_square").getBoundingClientRect().x 
yAxisMoving = document.getElementById("moving_square").getBoundingClientRect().y   

xAxisStill = document.getElementById("still_square").getBoundingClientRect().x 
yAxisStill = document.getElementById("still_square").getBoundingClientRect().y  

// gets width off obstacle
console.log("width " + document.getElementsByClassName("obstacle")[0].offsetWidth) 

// get obstacle coords  

// console.log("top " + document.getElementsByClassName("obstacle")[0].getBoundingClientRect().top)  
// console.log("left " + document.getElementsByClassName("obstacle")[0].getBoundingClientRect().left) 






controls = (event) => {   

switch(event.key) { 

  case "ArrowLeft": 

  // xAxisMoving -= 10  
  //   document.getElementById("moving_square").style.left = xAxisMoving + "px" 
  // console.log(xAxisMoving) 

  if (xAxisMoving <= document.getElementsByClassName("obstacle")[0].getBoundingClientRect().top) { 
    xAxisMoving += 10  
      document.getElementById("moving_square").style.left = xAxisMoving + "px" 
  } else { 
    xAxisMoving -= 10  
      document.getElementById("moving_square").style.left = xAxisMoving + "px"  
      console.log(xAxisMoving) 

  }
  break;  
  
  case "ArrowRight":  
  xAxisMoving += 10
    document.getElementById("moving_square").style.left = xAxisMoving + "px"  
  break; 

  case "ArrowUp":  
  yAxisMoving -= 10
    document.getElementById("moving_square").style.top = yAxisMoving + "px"  
  break; 

  case "ArrowDown":   
  yAxisMoving += 10
    document.getElementById("moving_square").style.top = yAxisMoving + "px" 
  break;

} 

if (xAxisMoving == xAxisStill && yAxisMoving == yAxisStill) {  
  console.log("woo")
}

} 




window.addEventListener("keydown", controls)
