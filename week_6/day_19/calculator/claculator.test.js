const {one, two, three, plus, minus, divide, multiply} = require('./calculator')

describe("calculator tests", () =>{ 
    it("plus", () =>{ 
     expect(one(plus(one()))).toBe(2)
    })  

    it("minus", () =>{  
        expect(three(minus(two()))).toBe(3)
    }) 

    it("divide", () =>{  
        expect(three(divide(one()))).toBe(3)
    }) 

    it("multiply", () =>{  
        expect(two(multiply(two()))).toBe(4) 
    })
})