/*
Taking the below variable, using the postcode, 
- copy the user element into the relevant state
SA = 5000, Qld = 4000 , Vic = 3000, NSW = 2000
*/ 



const users = [
    {
        id: 1,
        name: "Name 1",
        group: "Educator",
        location: {
                Street: "1 Dutch Lane",
                Suburb: "Biscuit",
                postcode: 4324
        }
    },
    {
        id: 2,
        name: "Name 2",
        group: "Educator",
        location: {
            Street: "1 chocolate Lane",
            Suburb: "cookie",
            postcode: 5431
        }
    },
    {
        id: 3,
        name: "Name 3",
        group: "Student",
        location: {
            Street: "1 Wagon Street",
            Suburb: "Wheel",
            postcode: 2334
        }
    },
    {
        id: 4,
        name: "Name 4",
        group: "Student",
        location: {
            Street: "1 Strawberry Circuit",
            Suburb: "Sundae",
            postcode: 3321
        }
    },
    {
        id: 5,
        name: "Name 5",
        group: "Mentor",
        location: {
            Street: "1 Inspiration Way",
            Suburb: "Turn it Around",
            postcode: 3333
        }
    }
];

 
var queensland = [];
var newSouthWales = [];
var victoria = [];
var southAustralia = []; 

addPosts = () =>{
var postcodes = users.map( (v,i) => { 
    let category = users[i].location.postcode; 
     
    switch(true) {  
       
        case (category < 6000 && category >= 5000): 
        southAustralia.push(users[i]);
        break; 
  
        case (category < 5000 && category >= 4000): 
        queensland.push(users[i]);
        break; 
  
        case (category < 4000 && category >= 3000): 
        victoria.push(users[i]);
        break; 
  
        case (category < 3000 && category >= 2000): 
        newSouthWales.push(users[i]);
        break;  

        default: 
        console.log(category);
  }
    });    
    }

addPosts()




console.log(newSouthWales)

module.exports = {
    queensland, newSouthWales, victoria, southAustralia
}