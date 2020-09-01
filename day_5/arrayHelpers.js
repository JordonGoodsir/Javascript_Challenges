var numbers = [1, 2, 3, 4, 5];

Array.prototype.sum = function() {  
return this.reduce((a,b) => a + b, 0)
}   

Array.prototype.square = function() {  
return this.map(x=> x ** 2)
}  

Array.prototype.cube = function() {  
return this.map(x=> x ** 3)
}  

Array.prototype.average = function() {  
return numbers.sum() / numbers.length
}   

Array.prototype.odd = function() {  
 return this.filter(x=> x % 2 == 1)
}   

Array.prototype.even = function() {  
 return this.filter(x=> Math.abs(x % 2) == 0)  
}  





console.log(numbers.sum())  
console.log(numbers.square())  
console.log(numbers.cube())  
console.log(numbers.average())  
console.log(numbers.odd()) 
 console.log(numbers.even()) 




