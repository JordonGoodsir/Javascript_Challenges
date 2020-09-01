class Person {   

    static count = 0

    constructor(name, city) { 
        this.name = name 
        this.city = city   
        Person.count += 1
    } 

    greet() { 
       console.log(`I am ${this.name}`) 
       return this
    } 

    // identify() {   
    // console.log(this.name instanceof Person) 
    // console.log(this.name instanceof Student)
    // console.log(this.name instanceof Teacher)
    //     // let role = ("Person" && this.name instanceof Person) || ("Student" && this.name instanceof Student) || ("Teacher" && this.name instanceof Teacher);
    //     // console.log(`I am a ${role}`)
    // }

}  

class Teacher extends Person {  
      
    constructor (name, city,classesTeaching) {  
        super(name, city)
        this.classesTeaching = classesTeaching 
        Teacher.count +=1 
    } 
    
} 

class Student extends Person {   
    
    constructor (name,city,classesStudying) {  
      super(name, city)
      this.classesStudying = classesStudying 
      Student.count +=1
    }
    
}  

let person1 = new Person("james", "somewhere")  
// let person2 = new Person("james", "somewhere") 
let teacher1 = new Teacher("chair","room","math") 
let student1 = new Student("person","human place", "math") 

person1.greet()
teacher1.greet()  
student1.greet()
console.log(`There are currently ${Person.count} "humans"`)
