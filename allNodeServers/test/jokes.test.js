let randomJokes = require("../src/jokes")  



test("empty func call gives value", () =>{ 
   expect(Boolean(randomJokes.returnRandomJokes())).toBe(true)
});  

test("2 or greater func call is array", () =>{ 
   expect(Array.isArray(randomJokes.returnRandomJokes(2))).toBe(true)
});  

 test("error throw on decimal", () =>{ 
    expect(()=>{ 
      randomJokes.returnRandomJokes("the")
    }).toThrow()
 });    

 
 test("error throw on nan", () =>{ 
    expect(()=>{ 
      randomJokes.returnRandomJokes(1.2)     
   }).toThrow()
 });