


class SaveData {
 

    constructor (data) {  
        // let refined = JSON.parse(data) 
        
        let letters = /^[a-z]+$/i
        // console.log(letters.test(data.name)) 

        if( data.name.length >= 3 && letters.test(data.name)) { 
            this.name = data.name;   
            console.log(eval(letters).test(data.name))
        } else { 
          console.log("bad") 
        }  


        if ( data.level > 0 && data.level < 100 && (data.level - Math.floor(data.level)) == 0) { 
        this.level = data.level; 
        } else { 
            console.log("bad") 
        }  

        if ( data.money > 0 && data.money < 999999 && (data.money - Math.floor(data.money)) == 0) { 
            this.money = data.money; 
            } else { 
                console.log("bad") 
            }  
      
    } 

    display() { 
       console.log(this.name)
    }
}


let hi = new SaveData({"name":"Big","level":36,"money":81376}) 

