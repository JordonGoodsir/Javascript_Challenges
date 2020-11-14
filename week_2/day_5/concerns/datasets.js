let dataset01 = {
	email: "test@email.com",
	password: "Password123456",
	country: "france",
	language:"french",
	isSubscribedToNewsletter: true,
	agreedToTermsAndConditions: true,
	coveredByGDPR: true,
	coveredByAPP: false
};

let dataset02 = {
	email: "test@email.com",
	password: "Password123456",
	country: null,
	language:null,
	isSubscribedToNewsletter: null,
	agreedToTermsAndConditions: null,
	coveredByGDPR: null,
	coveredByAPP: null
}; 

test = obj => { 
    console.log(obj.email)
} 

test(dataset01)

module.exports = {dataset01, dataset02};