const dataString = JSON.parse(require('./data')); 


class Weather { 

    static decimal2(num1,num2 = 1) {  
        return Math.round(num1 / num2 * 100) / 100
      };  
    
    maxTemps() { 
       console.log(dataString.consolidated_weather.map(x=> x.max_temp)) 
    }   

    averageTemp() { 
        let temps = dataString.consolidated_weather.map(x=> x.the_temp)
        console.log(Weather.decimal2(temps.reduce((a,b) => a + b,1), temps.length))    
    } 

    forcast(date) {    
        // yyyy-mm-dd 
       try { 
        let found = dataString.consolidated_weather.filter(x=> date == x.applicable_date)[0] 
        if (!found) throw "Invalid date" 
        console.log(`The temperature was ${Weather.decimal2(found.the_temp)} degrees with a high of ${Weather.decimal2(found.max_temp)} and a low of ${Weather.decimal2(found.min_temp)}.`)
       } 
       
       catch(err) { 
           console.log(err)
       }
    } 

  }  



  w1 = new Weather   
  w1.maxTemps() 
  w1.averageTemp() 
  w1.forcast("2020-05-26")
  
  // Don't change this line
  module.exports = Weather;