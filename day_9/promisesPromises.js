let result = "";

function printResult(result) {
	console.log(result);
}

function sendResult(theResult) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(theResult), 1000 );
	})
}

sendResult("winner") 
    .then(res => printResult(res)) 
