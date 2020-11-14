repeatMessage = (message,repeatCount) => {  
    let messageToShow ="" 

    for (let index = 0; index < repeatCount; index++) {
        messageToShow += message
        
    } 

    return messageToShow

} 

// console.log(repeatMessage("hello",20)) 

module.exports = { 
    repeatMessage
}