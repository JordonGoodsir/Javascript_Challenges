let takenUsernames = [
	"JohnSmith", 
	"xX_UltraGamer_Xx",
	"",
	"JohnSmith",
	"a",
	"$$$$$$"
];

let ticTacToeBoard = [
	["x", "o", "o"],
	["x", "x", "o"],
	["", "x", "o"]
];

let arrayAsDatabase = [
	{
		username:"JohnSmith",
		email:"john.smith@gmail.com"
	},
	{
		username:"xX_UltraGamer_Xx",
		email:"ultragamer@gmail.com"
	},
	{
		username: "glitchUser",
		email:""
	}
];


// Step 01.
//	Modify the ticTacToeBoard array so that 
//	there is an "x" at the middle-right cell in the grid
//	instead of an "o". 

 
ticTacToeBoard[1].splice(2,1,"x")
console.log(ticTacToeBoard[1])


// Step 02.
//	Filter out & remove invalid usernames from the 
//	takenUsernames array based on these rules:
// - usernames can't be empty strings
// - usernames can't be shorter than 3 characters
// - usernames can only be in the array once
// - OPTIONAL, needs Regex: usernames must contain some letters (a-z / A-Z)
// NOTE: You don't have to do some ultra l33t ninja code
// to solve this - you can totally break this into a
// bunch of IF-ELSE statements & use a lot of code here. 

console.log([...new Set(takenUsernames)].filter(v=>{ 
    return v.split("").length >= 3 && /^[a-zA-Z]+$/.test(v)
}))  



// Step 03.
//	Compare the takenUsernames & arrayAsDatabase arrays
//	and log the usernames & emails of any users that
//	are in both arrays.
//	Delete any users from the arrayAsDatabase array if 
//	they aren't found in the takenUsernames array. 

takenUsernames.forEach((tv, ti)=>{  

arrayAsDatabase.forEach((av, ai)=>{ 
    if (tv == av.username){ 
        // console.log(av.username + " " + av.email)
    } else if(tv != av.username){ 
       delete arrayAsDatabase[ai] 
    }
})

}) 

console.log(arrayAsDatabase)






module.exports = {
	takenUsernames,
	ticTacToeBoard,
	arrayAsDatabase
}