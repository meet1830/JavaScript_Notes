//Iterators
//they are a syntax in js which traverses or iterates or travels the particular here array, taking each of the value of it one at a time.
//it uses the iterator protocol - implementing next method, has to have a done value and should have a value.
//new concept in js.


const myArray = ["apples", "oranges", "grapes", "chiku"];
console.log(myArray);


function fruitsIterator(values) {
  let nextIndex = 0;
  //function will return an object
  return {
    next: function () //here in the object we have function named next
    //function essentially returns an iterator which should be an object containing at least one method called next.
    {
      if (nextIndex < values.length) {
        //values.length gives length of array
        //if condition fullfilled then again returning below object
        return {
          value: values[nextIndex++],
          //returning values[0] and then incrementing nextIndex
          done: false,
          //done means are all values finished? here false. there can be more values in the array
        };
      } else {
        //if index not < valuelength then in else statement
        //else we will return below object
        return {
          done: true,
        };
      }
    },
  };
}


//using the iterator
const fruits = fruitsIterator(myArray);

console.log(fruits);
// {next: ƒ}
console.log(fruits.next());
// {value: 'apples', done: false}
//will print the first value of array as object
//if .value written then prints the name of fruit in string form

console.log(fruits.next().value);
// oranges
//print second value and iterates with each console log

console.log(fruits.next().value);
// grapes

console.log(fruits.next());
// {value: 'chiku', done: false}

//with the above clog, all array elements are printed

console.log(fruits.next());
//prints done: true;

console.log(fruits.next().value);
//prints undefined


let myArray2 = [1, 2, 3, 4, 5, 4535];
let iterator = myArray2[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


function squaredFinite() {
    let n = 0;
    //starting number for iteration
    return {
        next() {
            n++;
            //each time n is called, we want it to increment by 1. Also on first call, we expect it to be 1.
            if (n<=5) {
                //if this if condition is fullfilled, then we return an object
                return {
                    value: n*n,
                    done: false
                }
            }
            //if the if condition is not satisfied then return an object as the else condition
            return {
                value: undefined,
                done: true
            }
        }
    };
}

const squaredIterator = squaredFinite();

console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());
console.log(squaredIterator.next());

//now modify the function to print squared numbers upto no. of digits we need.
//remember for objects to be iterable they need to contain the symbol.iterator key which returns a function which is then the iterator.
function squared(max) {
  return {
    //defining new key for this operator
    //the function returns a new iterator which then loops through and do the squared operation 
    [Symbol.iterator]() {
      let n = 0;
      return {
        next() {
          n++;
          if (n<=max) {
            return {
              value: n*n,
              done: false
            }
          }
          return {
            value: undefined,
            done: true
          }
        }
      }   
    }
  }
}

for (const n of squared(10)) {
  console.log(n);
}

//can use this for array destructuring
let [a, b, c] = [4, 5, 6];
//here a=4, b=5, c=6;

[a, b, c] = squared(10);
console.log(a, b, c);
//a=1, b=4, c=9;

//creating an iterable es6 class or a class which has an iterator
class numberList {
  constructor() {
    this.numbers = [1, 2, 3, 4];
  }
  //define a key
  [Symbol.iterator]() {
    const numbers = this.numbers;
    //makes it easier to access numbers below
    let currentIndex = -1;
    // will return an object
    return {
      //calling next method
      next() {
        //this should return an object with (value and done).
        return {
          value: numbers[++currentIndex],
          done: currentIndex >= numbers.length
          //if done condition is true then finished iterating
        }
      }
    }
  }
}

// const numListIterator = new numberList()[Symbol.iterator]();

// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());
// console.log(numListIterator.next());

const numList = new numberList();

for (const number of numList) {
  console.log(number);
}