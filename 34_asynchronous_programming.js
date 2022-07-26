// asynchronous programming means making multiple things happen at the same time. for example if a function has a lot of things to do, then will continue doing it but at the same time start executing the next part. it will return the output of function only when all the lines of function is completed till then it will keep returning and executing the part after that function.
// it can be applied using async/await, callbacks and promises

for (let index = 0; index < 45; index++) {
    const element = index;
    console.log("This is index number" + index);
}
console.log("Done printing");
// here if number is more like 4000, then done printing will be printed only when completed printing till 4000. if we want to print it first and the loop to keep running in bg till completed, then: 

setTimeout(() => {
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is index number" + index); 
    }
}, 100); 
console.log("Done printing"); 

// 100 miliseconds - after passing goes to next task
// setTimeout - made the call asynchronous instead of back to back, now non-blocking.