var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces 
  


    //  do { 
    //     bits.replace('111', '-')
    //     bits.replace('000', ' ') 
    //     bits.replace('1', '.') 
    //     bits.replace('0', '')  
 


    //     console.log(bits)

    //  } while(bits.includes("1" || "0")) 
    //  console.log(bits) 

    // let tempBits = bits
    // tempBits.replaceAll('111', '-') 
    // console.log(tempBits)
    // bits.replace('000', ' ') 
    // bits.replace('1', '.') 
    // bits.replace('0', '')  
 
    
     console.log(bits.replace(/111/g, '-').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, ''))


    // console.log(bits)
} 


decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')
 

// const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replace(/dog/g, 'monkey')); 

var decodeMorse = function(morseCode){
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    return morseCode.replace('.', MORSE_CODE['.']).replace('-', MORSE_CODE['-']).replace(' ', '');
} 


str = "hello       man" 

console.log(str.split(/    |   /))