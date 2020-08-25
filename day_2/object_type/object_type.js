// 01. Using the object provided below as a starting point,
//     copy the value of "containsPeanuts" and store it 
//     in the step1 variable provided.
let exampleObj = {
    dishName: "Bogan Poutine",
    mainComponents: ["cheese singles", "potato gems", "thick-sliced beef sausages", "chip shop gravy", "diced fried bacon"],
    // Allergen info based on allergen info from poutine specalists "New York Fries":
    // https://www.newyorkfries.com/pdf/nyf_allergens_chart_UPDATED_October15.pdf
    allergenInfo: {
        containsMilk: true,
        containsSoy: true,
        containsGluten: true,
        containsSulfites: true,
        containsPeanuts: false,
        containsTreeNuts: false,
        containsEgg: false,
        containsSesame: false,
        containsSeafood: false,
        containsMustard: false
    },
    healthStarRating: 0, // out of 5
    dishRating: 10 // out of 10
}
let step1 =exampleObj.allergenInfo.containsPeanuts


// 02. Define an object to represent a user account, and save it as step2 below.
//     The account object must have: 
//         - a string property named "username"
//         - a string property named "emailAddress"
//         - a number property named "phoneNumber"
//         - a property for an array of strings named "authRoles"
//         - a property for an object named "locationData", which has these properties:
//             - a string property named "country"
//             - a string property named "state"
//             - a string property named "city"
//     For each of these properties, give them some sensible data.
//     For example, authRoles might have ["user", "premium", "tester"]
let step2 = { 
    "username": "person", 
    "emailAddress": "person.person@personmail.com", 
    "phoneNumber": "123", 
    "authRoles": ["user", "premium", "tester"],  
    "locationData": { 
        "country": "Aus", 
        "state": "NSW", 
        "city": "Sydney"
    }

};



// 03. Perform a deep copy to copy the data in the step2 object into
//     the step3 object. Then, edit the username, authRoles & locationData
//     properties in the step3 object so that the step2 and step3 objects 
//     have different data.     
// let step3 = {...setp2};  
let step3 = JSON.parse(JSON.stringify(step2)); 

step3.authRoles = [1,2,3] 
step3.username = "different person" 
step3.locationData.city = "somewhere else"
step3.locationData.state = "somewhere else"
step3.locationData.country = "somewhere else"


 

module.exports = {
    step1, step2, step3
}