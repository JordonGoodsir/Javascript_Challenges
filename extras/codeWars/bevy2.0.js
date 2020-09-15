getDrinkByProfession = (bevy) => {
    
people = { 
    "Jabroni": "Patron Tequila", 
    "School Counselor": "Anything with Alcohol", 
    "Programmer":  "Hipster Craft Beer", 
    "Bike Gang Member":"Moonshine", 
    "Rapper":"Cristal" 
} 

return people[bevy] ? people[bevy] : "beer"

}
    
    getDrinkByProfession("Jabroni")