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
        console.log('Student has been enrolled.')
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
