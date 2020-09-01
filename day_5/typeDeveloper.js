
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
      return console.log(`Hello ${this.name}, im a human`)
  }  

   about() {  
      return console.log(`Im a ${this.devType}, that uses ${this.languages.join(", ")}`)
  }  

  all_devs() { 
      return console.log(Developer.devs)
  }

} 


let devInstance = new Developer("Alex", "gamedev", ["C#","JS"]);
devInstance.greet();
devInstance.about();
console.log(`There are currently ${Developer.count} developers!`); 