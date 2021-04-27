var decodeBits = function(bits){
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces 
  
    return bits.replace('111', '-').replace('000', ' ').replace('1', '.').replace('0', '');
}
