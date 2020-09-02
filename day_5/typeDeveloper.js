
class Developer {  

    static devs = []; 
    static count = 0; 
    
    constructor(name, devType, languages) {
    this.name = name;  
    this.languages = languages; 
    this.devType = devType;  
    Developer.devs.push({user_name: name, user_devType: devType, user_languages: languages});  
    Developer.count += 1
    
  }   

  greet() { 
    console.log(`Hello ${this.name}, im a human`) 
    return this
  }  

   about() {  
    console.log(`Im a ${this.devType}, that uses ${this.languages.join(", ")}`) 
    return this
  }  

  all_devs() { 
    console.log(Developer.devs) 
    return this 
  }

} 


let devInstance = new Developer("Alex", "gamedev", ["C#","JS"]); 
let devInstance1 = new Developer("Alex", "gamedev", ["C#","JS"]);
devInstance.greet().about().all_devs();  
console.log(`There are currently ${Developer.count} developers!`); 