describe("calculator tests", () =>{ 
    it("plus", () =>{ 
     expect(one(plus(two()))).toBe(3)
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