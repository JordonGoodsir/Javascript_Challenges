// happy(203) ➞ true

// happy(11) ➞ false

// happy(107) ➞ false 

function happy(n) {
	function getSingleDigitSqrSum(num) {
		var sqrSum = String(num).split("").reduce(
			function(pv, cv, ci) {
				var numValue = parseInt(cv);
				return pv + numValue*numValue;
			}, 0
		);
		return sqrSum;
	}
	var sum = getSingleDigitSqrSum(n);
	while(sum > 9) {
			sum = getSingleDigitSqrSum(sum);
	}
	return sum == 1 ? true:false;
}