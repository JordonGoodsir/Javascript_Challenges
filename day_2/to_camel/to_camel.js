function toCamelCase(str) {  
    let camel = str.split(" ");  
    let complete = [];  
    let non_camel = 0;
    if (camel.length <= 1) {  
        console.log(str) 
        return str
    } else {
    for (let i = 1; i < camel.length;i += 2) {   
        let split = camel[i].split("").slice(1).join("");
        complete.push(camel[non_camel]); 
        non_camel += 2
        complete.push(camel[i].charAt(0).toUpperCase() + split ) 
        
    }} 

    console.log(complete.join(""))

    } 

    toCamelCase("the good person good ye")
    
    //this is here to run the tests
    module.exports = {toCamelCase};