function addStash(event) {  
    document.getElementById("stash-pic").style.top = "55%" 
    document.getElementById("stash-pic").style.right = "83%"
  } 

  document.getElementById("stashButton").addEventListener("click", addStash)
  
  // Add an event listener to the correct DOM node here - using your addStash function, and firing on click.