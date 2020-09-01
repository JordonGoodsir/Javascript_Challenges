const {dataset01, dataset02} = require('.../datasets.js')

signUpEndpoint = obj => { 
    return console.log ([ 
        newUserAccountData(obj), 
        newUserLegalData(obj), 
        newUserLocaleData(obj), 
        newUserMarketingData(obj),  
    ])
} 

newUserAccountData = obj => { 
return { 
    email: obj.email.
    password: obj.password, 
}
} 

newUserLocaleData = obj => { 
  return  { country: obj.country ? obj.country : "australia", language: obj.language ? obj.language : "english" }
}

newUserMarketingData = obj => { 
  return { isSubscribedToNewsletter: obj.isSubscribedToNewsletter ? obj.isSubscribedToNewsletter : true  }
} 

newUserLegalData = obj => { 
  return {  
    agreedToTermsAndConditions: obj.agreedToTermsAndConditions ? obj.agreedToTermsAndConditions : true ,  
    coveredbyGDPR: obj.coveredbyGDPR ? obj.coveredbyGDPR : true,  
    coveredByAPP: obj.coveredByAPP ? obj.coveredByAPP : true 
  };

}

// Confirm that you're getting an array of objects.
console.log(signUpEndpoint(dataForEndpoint));

module.exports = {
    signUpEndpoint,
    newUserAccountData,
    newUserLocaleData,
    newUserMarketingData,
    newUserLegalData
}