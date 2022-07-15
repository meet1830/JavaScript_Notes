console.log("callback functions in javascript");
//callback function is a function inside a function, for example forEach loop. Callback function can also be defined as any function that is passed as an argument is called a callback function
//pass function as an argument to another function and call same function inside the function.

//assume we bring students by making xmlhttprequest to server - pretend that this response is coming from server
const students = [
  { name: "meet", subject: "javascript" },
  { name: "meet2", subject: "machine learning" },
];

// function enrollStudents(student) {
//     setTimeout(function () {
//         students.push(student);
//         console.log('Student has been enrolled.')
//     }, 3000);
//     //settimeout function manages function in the background, after a given time interval.
// }
function enrollStudents(student, callback) {
  setTimeout(function () {
    students.push(student);
    console.log("Student has been enrolled.");
    callback(); //can give any name
  }, 3000);
  //settimeout function manages function in the background, after a given time interval.
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      //here can pass argument post, element, student all same
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched.");
  }, 1000);
}

let newStudent = { name: "sunny", subject: "python" };
// enrollStudents(newStudent);
// getStudents();

enrollStudents(newStudent, getStudents);
//getstudents is our callback func here.

//here we can only see first two students in output because enrollment of sunny lasts completes after 3 seconds timeout whereas getstudents get completed in 1 sec hence sunny is not printed.
//hence callback functions can be synchronous or async. foreach function is sync func.
//if this is the case for timeout then we will give callback func to enrollstudent. callback means after executing the task of enrollment the function is instructed to call the callback func, whereever specified.
//so here getstudents - callback function only runs after the execution of enroll students is done after 3 seconds. hence it blocks the execution.
//if the case is reversed, enroll takes 1 sec and getstu takes 5 sec then also in one second after completing enrol callback calls getstu function.
