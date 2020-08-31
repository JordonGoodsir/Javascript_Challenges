// display the common characters
// Write some fun JS code which will return the common characters found in two different strings. 

// Let us some conditions to it.

// It must return only one copy of each common character. 

// Character case should be ignored (your solution should be case-insensitive).

// Examples:
// commonCharacters("efg", "feg") => "efg"
// commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
// commonCharacters("Alright alright alright", "") => "" 

const commonCharacters = (string1, string2) => {  
let common = [] 
let str = string1.replace(/\s/g, '');
 
str.toLowerCase().split("").filter( s1Letter => {  

//    return console.log(string2.includes(s1Letter)) 
if (string2.includes(s1Letter)) { 
   common.push(s1Letter)
}
 })  

 let unique = [...new Set(common)]

 console.log(unique.join("")) 
 return unique.join("")

} 

commonCharacters("Tf","Ttf")