colors = ["red","blue","green","purple","black"] 



red = () => {  
    document.getElementById("warning").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

document.getElementById("makeItRed").addEventListener("click", red)