// e.g 

// leftRotations("abc") ➞ ["abc", "bca", "cab"]

// rightRotations("abc") ➞ ["abc", "cab", "bca"]

// leftRotations("abcdef") 
// ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// rightRotations("abcdef") 
// ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"] 

// sol 1 

function leftRotations(str) {
    let leftRotationsArr = [];
    for (let i = 0 ; i< str.length ; i++){
      let currentLeftRotation =  str.slice(i)+str.slice(0,i);
      leftRotationsArr.push(currentLeftRotation);
    }
    return leftRotationsArr;
  }
  ​
  function rightRotations(str) {
    let rightRotationsArr = [];
    for (let  i = 0 ; i<str.length ; i++){
      let currentRightRotation = str.slice(-i) + str.slice(0,-i);
      rightRotationsArr.push(currentRightRotation);
    }
    return rightRotationsArr;
  }

// sol 2 

function leftRotations(str) {
	return str.split("").map((a,i)=>str.slice(i)+str.slice(0,i))
}

function rightRotations(str) {
	return str.split("").map((a,i)=>str.slice(-i)+str.slice(0,-i)) 
} 


