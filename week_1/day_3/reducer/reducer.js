/*
Taking the below Array & the learning from the lesson you need to:
 - flatten it,
 - Times it by 2
 - find the average
 */
arr = [[28, 50, 33],[23,33,55,70],[1]]

flattenedArr = arr.flat().map(x => x * 2)
console.log(flattenedArr)

averagedArr = flattenedArr.reduce(function(a, b) { return a + b; }, 0) / flattenedArr.length;



module.exports = {
    flattenedArr, averagedArr, arr
}