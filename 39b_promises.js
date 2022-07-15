//converting file 37_callback.js using promises.
//firstly copied code from 37_callback here.
console.log("callback functions in javascript");

const students = [
  { name: "meet", subject: "javascript" },
  { name: "meet2", subject: "machine learning" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("Student has been enrolled.");
      const error = false;
      if(!error) {
        resolve();
      } else {
        reject();
      }
    }, 3000);
  });
}

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li>${student.name}</li>`;
    });
    document.getElementById("students").innerHTML = str;
    console.log("Students have been fetched.");
  }, 1000);
}

let newStudent = { name: "sunny", subject: "python" };

// enrollStudent(newStudent).then(function() {
//     getStudents();
// }).catch(function() {
//     console.log(`Some error occured.`);
// });

//.then() returns a promise and we can catch that.

//other syntax
enrollStudent(newStudent).then(getStudents).catch(function() {
    console.log(`Some error occured.`);
})

//if change the timeout for first as 1000 and second as 3000 then also result is printed.