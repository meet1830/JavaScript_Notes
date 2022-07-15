// for (let index = 0; index < 45; index++) {
//     const element = index;
//     console.log("This is index number" + index); 
//     //write index or element in console.log same output
// }
// console.log("Done printing");
//here if number is more like 4000, then done printing will be printed only when completed printing till 4000. if we want to print it first and the loop to keep running in bg till completed, then: 

setTimeout(() => {
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number" + index); 
    }
}, 100); 
//100 miliseconds - after passing goes to next task
//setTimeout - made the call asynchronous instead of back to back, now non-blocking.
console.log("Done printing"); 