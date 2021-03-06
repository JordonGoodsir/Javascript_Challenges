let step0 = "Hello";  

let message2 = step0 + " world";

// 01. Use the string above to build a string that says
//     "Hello world"
//     and save that new string into the "message2" variable below.
let step1 = "";

// 02. Find out what the character at the 6th position 
//     in the step1 variable is and save it as step2.
//     If you followed step 1 correctly, it should be "w".
let step2 = message2.charAt(6); 

// console.log(step2);
// 03. Take the string from step1, save it to the variable step3,
//     and make the step3 string completely uppercase. 
let step3 = message2.toUpperCase();


// 04. Take the string from step3, save it to the variable step4,
//     and make the step4 string completely lowercase. 
let step4 = step3.toLowerCase(); 


// 05. Take the string from step4, save it to the variable step5,
//     and slice the first word & the space out of the step5 string.
let step5 = step4.split(" ").slice(1).join(""); 




// 06. Take the string from step5, save it to the variable step6,
//     and insert the word "hello " to the front of the step6 string.
let step6 = "hello " + step5; 
// let step6 = step5.split(" ").unshift("hello")


// 07. Take the string from step6, save it to the variable step7.
//     Capitalize the first letter of the step7 string. 
//     This one can be tricky! But it is just a 
//     combo of all previous steps.
let step7 = step6.charAt(0).toUpperCase() + step6.slice(1);


// 08. Use 'console.log()' and string interpolation
//     to show both the final string & a count of 
//     how many characters are in that string.
//     Save the number to the variable step8.
let step8 = console.log(`${step7} ${step7.length}`);



// Do not touch below, this is for the Ed testing:
module.exports = {
    step1, step2, step3, step4, step5, step6, step7, step8
};