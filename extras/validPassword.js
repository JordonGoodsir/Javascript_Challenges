// Create a file called advanced.js for this challenge.

// Write a function called isValidPassword that takes a string as an argument and returns true when the password:

// is at least 8 characters
// contains at least one uppercase character
// contains at least one number
// This is a difficult challenge, so take your time. Think about how you can solve each case, and write out some pseudocode first. You can try working with a colleague if you get stuck.

// Looking at the String, Array, and Number methods that are available may help you to solve this one.

// If the password is valid, the function should output “Password accepted!”. If the password is invalid, the program should indicate the problem (for example, “Valid passwords contain at least one capital letter”, or “Valid passwords contain at least 1 number”, or “Valid passwords are at least 8 characters”). Note that you may have to modify your isValidPassword function to return different values for the different cases for an invalid password.

// See if you can print out all relevant issues for an invalid password.

validPassword = password => { 
    let errors = [];  
    let capCheck = /[A-Z]/.test(password);
    let numCheck = /[0-9]/.test(password);

    if (password.length < 8) { 
      errors.push("8 Characters");
    };

    if (!capCheck) { 
      errors.push("1 Capital Letter");  
    };  

    if (!numCheck) { 
      errors.push("1 Number"); 
    }; 

    // switch(true) { 
      
    //     case password.length < 8: 
    //   errors.push("8 Characters");  
      
    //   case !capCheck: 
    //   errors.push("1 Capital Letter");  
      
    //   case !numCheck:  
    //   errors.push("1 Number"); 

    //   break;
    // } 

    if (errors.length === 1) { 
       console.log("Password Requires " + errors.join(" ")) 
    } else if (errors.length > 1) { 
        console.log("Password Requires " + errors.join(", "))
    } else {
        console.log("Valid Password")
    } 

}  

validPassword("Gooss2123123")
