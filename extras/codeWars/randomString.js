// way 1
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 console.log(makeid(5)); 

//  way 2 

let r = Math.random().toString(36).substring(7);
console.log("random", r); 

// way 3 

// dec2hex :: Integer -> String
// i.e. 0-255 -> '00'-'ff'
function dec2hex (dec) {
    return dec.toString(16).padStart(2, "0")
  }
  
  // generateId :: Integer -> String
  function generateId (len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
  }
  
  console.log(generateId())
  // "82defcf324571e70b0521d79cce2bf3fffccd69"
  
  console.log(generateId(20))
  // "c1a050a4cd1556948d41" 

//   way 4 

  var uuid = require("uuid");
var id = uuid.v4();