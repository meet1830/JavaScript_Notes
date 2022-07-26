//generators are used when we need to store large amount of information and if everything is stored in an array then it will occupy more memory. In such case, we need something that can generate values on the fly. Array limit is 1-1lakhs.
//on the fly means whenever we call a generator a new value should be generated.

//syntax function*
function* numbersGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
//we are telling it to generate, yield a new value whenever we initialize the gen variable and call it
const gen = numbersGen();
console.log(gen.next());
// {value: 1, done: false}
//here in output it says done false after value means we still have some values pending
console.log(gen.next());
// {value: 2, done: false}
console.log(gen.next());
// {value: 3, done: false}
console.log(gen.next());
// {value: 4, done: false}
console.log(gen.next());
// {value: undefined, done: true}

let i = 0;
function* numbersloopGen() {
    while(true) {
        yield i++;
        // yield (i++).toString();
        //gets converted to string
    }
}
const genloop = numbersloopGen();
console.log(genloop.next().value);
console.log(genloop.next().value);
console.log(genloop.next().value);
console.log(genloop.next().value);
//generates upto infinity

//program efficiency increases. if indexing value from array takes 60 sec and we have one lakh items then would not be efficient. 