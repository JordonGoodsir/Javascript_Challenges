const Random = () =>{  
    const numbers = [1,2,3,4,5,6,7] 
    let randomNumber = Math.floor(Math.random() * numbers.length); 
    return <h1>Your random number is {numbers[randomNumber]}</h1>
}  

export default Random