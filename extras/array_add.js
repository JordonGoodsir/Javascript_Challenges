// Use an appropriate array iterator method to do the following challenges:

// 1. Add 1

// Write a function called addOne that takes an array of numbers and returns an array with each number incremented by 1.

// E.g. addOne([1,2,3]), should return [2,3,4] 

const addOne = arr => { 
    console.log(arr.map(x => x + 1))
} 

// addOne([1,2,3]) 

// 2. Search

// Write a function called search that takes two arguments:

// an array of strings
// a string
// The function should return the values in the array that contain the string argument.

// E.g. findIt([“one”, “two”, “bone”], “on”), should return [“one”, “bone”] 

const addItem = (arr,item) => {   

    console.log(arr.filter(arrItems => {
        return eval(`/${item}/`).test(arrItems); 
    }));


} 

addItem(["ther","good","the"],"the") 

console.log(5 + "5") 

console.log(typeof(String(1))) 
