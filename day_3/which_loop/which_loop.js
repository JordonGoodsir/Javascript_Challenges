function whatDoingToday(day){
    
    switch(day) {  

        case "Monday": 
        return("Learning at Coder Academy")
        break; 

        case "Tuesday": 
        return("Learning at Coder Academy")
        break; 

        case "Wednesday": 
        return("Learning at Coder Academy")
        break; 

        case "Thursday": 
        return("Reviewing lessons from the week")
        break; 

        case "Friday": 
        return("Reviewing lessons from the week")
        break; 

        case "Satarday": 
        return("It is the weekend!")
        break; 

        case "Sunday": 
        return("It is the weekend!")
        break; 

        default: 
         return("That is not a valid day")
    }
}
// What day is it today?
let day = "Wednesday"
console.log(whatDoingToday(day))