function rot13(str) { 

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');   
    let alphabetCapital = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');  
    let ans = [] 

    str.split("").forEach((v,i)=>{    

        if (alphabet.includes(v)) {    
            // (alphabet.indexOf(v) + 13) > (alphabet.length - 1) ? console.log(alphabet.indexOf(v) + 13 - alphabet.length + "greater") : console.log(alphabet.indexOf(v) + 13)

            let codedLetter = (alphabet.indexOf(v) + 13) > (alphabet.length - 1) ? alphabet.indexOf(v) + 13 - alphabet.length : alphabet.indexOf(v) + 13  
            ans.push(alphabet[codedLetter]) 


        } else if (alphabetCapital.includes(v)){   


            let codedLetter = (alphabetCapital.indexOf(v) + 13) > (alphabetCapital.length - 1) ? alphabetCapital.indexOf(v) + 13 - alphabetCapital.length : alphabetCapital.indexOf(v) + 13 

            ans.push(alphabetCapital[codedLetter])

        } else { 
            ans.push(v)
        } 

    }) 

    console.log(ans.join(""))

}  

rot13("EBG13 rknzcyr.") == "ROT13 example.";

// move characters 13 spaces up alphabet 

// when it gets to end of alphabet minus the index from array