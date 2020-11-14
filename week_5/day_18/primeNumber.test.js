let primeNumber = require("./primeNumber.js")

describe("primeNumber", () => { 

    test("should return the number if it's prime"), () => {  
        expect(primeNumber(7)).toBe(7) 
    } 

})