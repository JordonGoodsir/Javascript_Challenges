function toCamelCase(str) {  
    let camel = str.replace(/[^0-9a-z" "]/gi, ' ').split(" ");

    function isEven(value){
        if (value%2 == 0)
            return true;
        else
            return false;
    }

    if (camel.length <= 1) {  
        console.log(str) 
        return str
    } else {  

     let second = camel.map((v, i) => {   
         if (isEven(i)) { 
            return v
         } else { 
             return v.charAt(0).toUpperCase() + v.slice(1)
         }
        }); 
     console.log(second.join(""))
    } 

    } 

    toCamelCase("thisIsquiteLong")
    
    //this is here to run the tests
    module.exports = {toCamelCase};