console.log("callback functions in javascript");
//callback function is a function inside a function, for example forEach loop. Callback function can also be defined as any function that is passed as an argument is called a callback function
//pass function as an argument to another function and call same function inside the function.

//assume we bring students by making xmlhttprequest to server - pretend that this response is coming from server
const students = [
  { name: "meet", subject: "javascript" },
  { name: "meet2", subject: "machine learning" },
];

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      //here can pass argument as post, element, student all same
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched.");
  }, 3000);
  //settimeout function manages function in the background, after a given time interval.
}

function enrollStudents(student) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled.");
  }, 3000);
  //settimeout is a callback function. it manages function in the background, after a given time interval.
}

let newStudent = { name: "sunny", subject: "python" };

// enrollStudents(newStudent);
// getStudents();

// if settimeout for enroll students(for commented entroll students call) is 3 sec and for getstudents is 1 sec
// here we can only see first two students in output because enrollment of sunny lasts starts after 3 seconds timeout whereas getstudents starts and get completed after 1 sec hence sunny is not printed.
// this means that if both functions are called together then they will execute together and the one with less timeout will finish first and then the function with greater timeout.
// callback functions can be synchronous or async. foreach function is sync func.

function enrollStudents(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled.");
    callback(); //can give any name
  }, 1000);
}
/*
callback functions in javascript
Student has been enrolled.
Students have been fetched.
*/

newStudent = { name: "sunny", subject: "python" };
enrollStudents(newStudent, getStudents);
//getstudents is our callback func here.
// here callback function = getstudents and parent function = enroll students. here parent will first start to execute after its timeout. then at the line of callback function call, will start to execute it. but since callback itself has timeout, will keep executing parent function and callback function both together.

function enrollStudents(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled.");
    callback(); //can give any name
    setTimeout(() => {
      console.log("2 sec time");
    }, 2000);
  }, 1000);
}
/*
callback functions in javascript
Student has been enrolled.
2 sec time
Students have been fetched.
*/

// here the callback func has time 3 sec where as the 2 sec time has 2 sec. hence the 2 sec time if is printed first and then the students are fetched.

/* Higher order functions have one of the following props
-> passes another function as argument (callbacks)
-> returns/nest another function (closures)

callbacks -> when a function definition is passed as an argument to another function
*/

function abc(callback) {
  console.log("abc");
  callback();
}

abc(function () {
  console.log("def");
});

// using callbacks, we can define a function outside and then just call it in parent function. why to pass it as an argument
// callbacks can handle async code -> if the call back function is defined outside and called without passing it as an arguement, then it will not be able to process its output. there are three ways to do this -> callbacks, promises, async await

// using setTimeout to mock api requests
let firstFivePrimeNumbers = [];
function fetchRecords() {
  setTimeout(function () {
    firstFivePrimeNumbers = [2, 3, 5, 7, 11];
  });
}
console.log(firstFivePrimeNumbers);
// the output will be empty array
// and this will directly be executed bc sync code executes first

let firstFourPrimeNumbers = [];
function fetchRecords(callback) {
  setTimeout(function () {
    firstFourPrimeNumbers = [2, 3, 5, 7];
    callback();
  }, 5000);
}
fetchRecords(function () {
  console.log(firstFourPrimeNumbers);
});
// output after two seconds
// (4) [2, 3, 5, 7]

setTimeout(() => {
  console.log(1);
}, 5000);

setTimeout(() => {
  console.log(2);
}, 3000);

setTimeout(() => {
  console.log(3);
}, 4000);
// 2 3 1
// here in 5 seconds all three functions are completed. because they run independently

// how to handle the timeout functions such that they log out 1, 2 and then 3?

setTimeout(() => {
  console.log(1);

  setTimeout(() => {
    console.log(2);

    setTimeout(() => {
      console.log(3);
    }, 3000);
  }, 4000);
}, 5000);
// this can be a solution
// after 5 seconds 1 logs, then after 4 seconds 2 logs out and after 3 seconds 3 logs out. hence it takes 12 sec to log out 1 2 3

// hence it is async code but we want it to execute in a pattern that is why callbacks are used

/*
Order placed
After 2s -> Chef received the order and started preparing
After 10s -> pizza sauce added
After 5s -> first layer of cheese added
After 12s -> topping added
After 5s -> second layer of cheese added
After 15s -> pizza baked!
After 8s -> oregano added and packed
After 2s -> pizza received at counter
The order is ready and handed over to the zomato guy!
*/
// the reception gets updated with these steps when they are completed.

console.log("Order placed");

setTimeout(() => {
  console.log("Chef received the order and started preparing");
}, 2000);

setTimeout(() => {
  console.log("pizza sauce added");
}, 10000);

setTimeout(() => {
  console.log("first layer of cheese added");
}, 5000);

setTimeout(() => {
  console.log("toppings added");
}, 12000);

setTimeout(() => {
  console.log("second layer of cheese added");
}, 5000);

setTimeout(() => {
  console.log("pizza baked!");
}, 15000);

setTimeout(() => {
  console.log("oregano added and packed");
}, 8000);

setTimeout(() => {
  console.log("pizza received at counter");
}, 2000);

console.log("The order is ready and handed over to the zomato guy!");
/*
Order placed
The order is ready and handed over to the zomato guy!
Chef received the order and started preparing
pizza received at counter
first layer of cheese added
second layer of cheese added
oregano added and packed
pizza sauce added
toppings added
pizza baked!
*/
// since this is async code it does not run in order

// use callbacks to determine the order of execution
function executeOrder(callback) {
  console.log("Order placed");

  setTimeout(() => {
    console.log("Chef received the order and started preparing");

    setTimeout(() => {
      console.log("pizza sauce added");

      setTimeout(() => {
        console.log("first layer of cheese added");

        setTimeout(() => {
          console.log("toppings added");

          setTimeout(() => {
            console.log("second layer of cheese added");

            setTimeout(() => {
              console.log("pizza baked!");

              setTimeout(() => {
                console.log("oregano added and packed");

                setTimeout(() => {
                  console.log("pizza received at counter");

                  callback();
                }, 2000);
              }, 8000);
            }, 15000);
          }, 5000);
        }, 12000);
      }, 5000);
    }, 10000);
  }, 2000);
}
/*
Order placed
Chef received the order and started preparing
pizza sauce added
first layer of cheese added
toppings added
second layer of cheese added
pizza baked!
oregano added and packed
pizza received at counter
The order is ready and handed over to the zomato guy!
*/

// this is called callback hell and it should be avoided
// instead use async await and promises