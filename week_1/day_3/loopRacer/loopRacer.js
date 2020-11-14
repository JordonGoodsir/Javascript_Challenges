let sampleData = [
    {
        name:"Alex",
        state:"NSW"
    },
    {
        name:"Nands",
        state:"NSW"
    },
    {
        name:"Zeb",
        state:"VIC"
    },
    {
        name:"Carl",
        state:"VIC"
    },
    {
        name:"Varsha",
        state:"BRI"
    },
    {
        name:"Lav",
        state:"BRI"
    },
];

// Iterate over the sample data above & log the value of each key in each object!
// Note the example below to track the time
// that it took to do the lines of code 
// between each of the Date() lines.
// -------------------------------------------
// Note when we started:
// let startTime = new Date();
// // Do what we wanna do while counting time:
// console.log("Hello world!")
// // Note the time when we finished:
// let endTime = new Date();
// // Calculate how much time passed between startTime & endTime:
// let timeDiff = endTime - startTime; // duration in milliseconds
// console.log(`Saying hello world took ${timeDiff} milliseconds.`);
// // -------------------------------------------

// Pre-declaring variables for cleanliness: 

forDurations = () => {
    let startTime = new Date();
    for (i = 0;i< sampleData.length; i++) { 
        console.log(sampleData[i])
    } 
    let endTime = new Date(); 
    let timeDiff = endTime - startTime; 
    console.log(`Saying hello world took ${timeDiff} milliseconds. for `) 
    };

    forEachDurations = () => {
        let startTime = new Date();
        sampleData.forEach(x=> console.log(x));
        let endTime = new Date(); 
        let timeDiff = endTime - startTime; 
        console.log(`Saying hello world took ${timeDiff} milliseconds. forEach`) 
        };


// let startTime = new Date();
// let endTime = new Date();
let forDuration =  forDurations();
let forEachDuration = forEachDurations(); 
let forInDuration = null;  
let forOfDuration = null; 
let whileDuration = null; 
let doWhileDuration = null; 




// module.exports = {
//     forDuration, 
//     forEachDuration, 
//     forInDuration, 
//     forOfDuration, 
//     whileDuration, 
//     doWhileDuration
// }