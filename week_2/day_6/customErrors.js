function StationIndexError(message) {
    this.name = 'StationIndexError'; 
    this.message = "Index not found, " + message
  //  Your code here to assign the message of the error
  }
  
  function getStationAtIndex(index) {
    
    const trainLines = [
      'Alamein',
      'Belgrave',
      'Craigieburn',
      'Cranbourne',
      'Flemington',
      'Frankston',
      'Glen Waverley',
      'Hurstbridge',
      'Lilydale',
      'Mernda',
      'Pakenham',
      'Sandringham',
      'Stony Point',
      'Sunbury',
      'Upfield',
      'Werribee',
      'Williamstow',
    ]; 

    try { 
        if (index > trainLines.length - 1) throw new StationIndexError("too high"); 
        if (index < 0) throw new StationIndexError("too low"); 
        console.log(trainLines[index]) 
        return trainLines[index]
    } 
    catch(e) {  
       console.log(e.name + ": " + e.message )      
    }
  
  };   

  getStationAtIndex(1)


  
  module.exports = {
    getStationAtIndex,
    StationIndexError
  };