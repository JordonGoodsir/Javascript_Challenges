hats = [  
    "https://banner2.cleanpng.com/20180323/xqq/kisspng-cowboy-hat-baseball-cap-hats-5ab570a92c9e55.5793179215218402971828.jpg", "https://i7.pngguru.com/preview/55/8/39/top-hat-clip-art-hats.jpg", "https://img.pngio.com/wizard-clipart-cap-transparent-wizard-hat-png-221248-pinclipart-wizard-hat-transparent-background-880_771.png"

]

let hatID = document.getElementById("hat")

hat = () => {  

    hatEl = document.createElement("img") 
    hatEl.src = hats[Math.floor(Math.random() * hats.length)] 
 
    hatEl.style.width = "200px" 
    hatEl.style.height = "200px"
    hatID.appendChild(hatEl)
    
}

document.getElementById("activate").addEventListener("click", hat) 

