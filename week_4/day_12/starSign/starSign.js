
let form = document.getElementById("bDay");

starFinder = (event) => {  

    event.preventDefault();   



    form.elements["date"].value 

    fetch("https://pokeapi.co/api/v2/pokemon/ditto") 
    .then(result => {  
        console.log(result)
    }) 
    .catch(err=>{ 
        console.log(err)
    })


}

form.addEventListener("submit", starFinder)