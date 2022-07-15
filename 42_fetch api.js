//will use fetch api and not xhr object. because it is modern and more easy to use.
//aim - whenever use clicks on add button all the data is fetched and added to div id='content';

let myBtn = document.getElementById("myBtn");

let content = document.getElementById("content");

function getData() {
  console.log("Started getData.");
  //we will see what to return but first we want to have data in console.
  //we will use fetch for this. fetch will return a promise.
  url = "35_meet.txt";
  fetch(url)
    .then((response) => {
      console.log("inside first then");
      return response.text();
      //after executing first then function we get a promise so after executing that again then(). this is default syntax of fetch.
    })
    .then((data) => {
      console.log("inside second then");
      console.log(data);
    });
  //use getdata() to print output in console.
}

console.log("Before running getdata");
getData();
console.log("After running getdata");
//getdata to execute and print text of file in output.

//after writing all console.logs
//explanation of output -> fetch is async. it runs in the bg. fetch urls to both thens all goes in bg. so after running getdata is printed. meanwhile fetch is running so first and then second getdata is printed.
//this is fetch api just with 2 then functions, simpler than xhr object.

//now to know hw to bring json data. for that type in browser - api.github.com/users then it returns some amount of users. we can use that as an api.

function getData() {
  url = `https://api.github.com/users`;
  fetch(url)
    .then((response) => {
      return response.json();
      // return response.text();
      //here can use response.text but in output it will show in plain text but we want it to show in parsed - objective form hence response.json(). if our return value is a valid js object then use json. so we do not need to use json.parse or json.stringify. so in second then function will return data as object.
    })
    .then((data) => {
      console.log(data);
    });
}
getData();
//above both were get request using fetch api. Now towards post api.

function postData() {
  url = `https://jsonplaceholder.typicode.com/posts`;
  data = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  });
//   data = ` {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   } `;
  //if data is given in form of string then no need to use stringify.
  parameters = {
    method: "post",
    //method is will be post
    headers: {
      //headers -> from where data will come?
      "Content-Type": "application/json",
      //here by default value is this but sometimes it is form encoded url hence write it here.
    },
    body: data
    //it needs data in the form of string. in most cases data would be in object form. hence need to convert.
  };
  
//   fetch(url, parameters)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });

  fetch(url, parameters)
    .then(response => response.json())
    .then(data => console.log(data));
    // .then(json => console.log(json)); /same output
}
postData();