// in order to make http request on server using javascript, then we need httpxmlrequest object.

// steps for making http request
// if get request
/*
1. create xmlhttprequest object
const xhr = new XMLHttpRequest();

2. initialize created request
xhr.open("GET", "data.txt", true);
// type of request - file to get data from or to write data, asynchronous or not

3. send the request
xhr.send();
*/

// if post request
/*
1. same
2. xhr.open("POST", "signupform.php", true);
3. can set request header before sending request
xhr.setRequestHeader("Content-Type", 'application/JSON');
4. xhr.send(body);
// due to post request we need to send some data 
*/

// handling server response
// need to set a function which will receive and handle the response that is received with onreadystatechange prop
// xhr.onreadystatechange = function_name;
// then define the function
// or
// xhr.onreadystatechange = function() {}

// response handling function
// function needs to check the request's state by onreadystatechange.DONE (corresponsding to ready state 4)
/*
if (xhr.readyState == XMLHttpRequest.DONE) {// response received}
else {// not ready yet}
*/
// now in nested if check for http response status code of http response. it should be 200 for ok response code.
/*
if (xhr.status == 200) {// perfect}
else {// error code like 404}
*/
// now can process the response through following methods
// xhr.responseText -> returns the server response as string of text
// xhr.responseXML -> returns response as xmldocument object which can be traversed using dom

// remember -> whenever receiving any response, then the page should not reload.

document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest() {
  console.log("button clicked");

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  // xhr.onreadystatechange = showdata;
  // function showdata() {}
  // just declare function dont intialize hence no () in showdata

  // anonymous function
  xhr.onreadystatechange = function () {
    // xhr.onreadystatechange = () => {}
    if (xhr.readyState === XMLHttpRequest.DONE) {
      // OR if (xhr.readyState === 4)
      if (xhr.status === 200) {
        // write code here that handles reponse

        console.log(xhr);
        // object returned with response, responsetext (both having same string from data.txt), responseURL (live server url -> 127.0.0.1:55000/data.txt, responsetype, readystate, status, etc)

        console.log(xhr.responseText);
        // shows any text which is being returned by server
      } else {
        console.log("Problem occured");
      }
    }
  };

  xhr.send();
}

// if data.txt filename is wrong then get output
/*
error 404 not found
Problem occured
*/

// different ready states

function makerequest() {
  const xhr = new XMLHttpRequest();
  console.log("before open", xhr.readyState);
  // before open 0
  xhr.open("GET", "data.txt", true);
  console.log("after open", xhr.readyState);
  // after open 1
  xhr.onreadystatechange = function () {
    console.log("readyState", xhr.readyState);
    // readyState 2
    // readyState 3
    // readyState 4
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.responseText);
      } else {
        console.log("Problem occured");
      }
    }
  };
  xhr.send();
}

// if want to do some function between ready states
function makerequest() {
  const xhr = new XMLHttpRequest();
  if (xhr.readyState === 0) {
    console.log("Open method not yet called.");
  }
  xhr.open("GET", "data.txt", true);

  if (xhr.readyState === 1) {
    console.log("Open method called 1");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      console.log("Response Header 2");
    }
    if (xhr.readyState === 3) {
      console.log("Loading Data 3");
    }
    if (xhr.readyState === 4) {
      console.log("Done 4");
    }

    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr);
        console.log(xhr.responseText);
      } else {
        console.log("Problem occured");
      }
    }
  };
  xhr.send();
}

// using onload same output
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr);
      console.log(xhr.responseText);
    } else {
      console.log("Problem occured");
    }
  };
  xhr.send();
}
// first request opens then sends it (send function) then the if else condition becomes active

// xmlhttprequesteventtarget -> interface which contains event handlers that can be implemented in object that will handle events in xmlhttprequest
// onload, onprogress, onerror, onloadstart, onabort, ontimeout, onloadend

// onload -> XMLHttpRequestEventTarget.onload is function called when xmlhttprequest transaction completres successfully.

// onprogress -> .onprogress is function called periodically with information before the request completing successfully.
// has two properties
// e is event object
// e.loaded; -> the amount of data that is currently transfered while the process of transfer is ongoing
// e.total; -> the total amount of data to be transfered

// onerror -> called when xmlhttprequest fails

// onloadstart -> is called when xmlhttprequest starts transfering data
// onloadend -> when data transfer ends

// onabort -> called when the xmlhttprequest transaction is aborted for example when XMLHttpRequest.abort() function is called

// ontimeout -> called if event times out and timeout event is received by the object, this only happens if the timeout has been previously established by setting the value of xmlhttprequest object's timeout attribute.

function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.timeout = 2;
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr);
      console.log(xhr.responseText);
    } else {
      console.log("problem occured");
    }
  };

  xhr.onprogress = (e) => {
    console.log(e.loaded);
    console.log(e.total);
  };
  // 54
  // 54
  // due to small file size no change in load time

  xhr.onerror = function () {
    console.log("Network not available");
  };

  xhr.onloadstart = () => {
    console.log("Transaction has started");
  };

  xhr.onloadend = () => {
    console.log("Transaction has ended");
  };

  xhr.onabort = () => {
    console.log("Transaction aborted");
  };

  xhr.ontimeout = () => {
    console.log("Transaction timed out");
  };

  /*
  Transaction has started
  52
  52
  object onload
  Hello I am a Meet, a 22 year old software developer.
  Transaction has ended
  */

  // if filename changed
  /*
  Transaction has started
  GET http://127.0.0.1:5500/data2.txt 404 (Not Found)
  148
  148
  problem occured
  Transaction has ended
  */

  // if xhr.timeout = 2 -> request could not complete it 2 milliseconds hence output. we dont get any error
  /*
  Transaction has started
  Transaction timed out
  Transaction has ended
  */
  // if just given xhr.timeout and not defined xhr.ontimeout function then the output will be same but without the timeout message in this case

  xhr.send();
}

function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);

  xhr.withCredentials = true;
  // setting this will now give true below instead of false

  xhr.responseType = "text";
  // defining which type of data our file contains

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr);
      // output xhr object

      console.log(xhr.statusText);
      // OK

      console.log(xhr.response);
      // text from data.txt

      console.log(xhr.responseURL);
      // http://127.0.0.1:5500/data.txt

      console.log(xhr.withCredentials);
      // will get false by default as it is used to set origin and here not set

      console.log(xhr.getResponseHeader("LAST-Modified"));
      // type name of header of which want to get response
      // Tue, 19 Jul 2022 16:45:05 GMT

      console.log(xhr.getAllResponseHeaders());
      /*
        accept-ranges: bytes
        access-control-allow-credentials: true
        cache-control: public, max-age=0
        content-length: 52
        content-type: text/plain; charset=UTF-8
        date: Wed, 20 Jul 2022 10:25:17 GMT
        etag: W/"34-182175950c0"
        last-modified: Tue, 19 Jul 2022 16:45:05 GMT
        vary: Origin
        */
      // can also see all of headers, response text, etc in network tab -> click on data.txt
    } else {
      console.log("Problem occured");
    }
  };
  xhr.send();
}

// output content from data.txt on webpage
let data = document.getElementById("data");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      data.innerText = xhr.responseText;
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}
// page does not refresh when getting and printing data

// output data from data.json on webpage
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      // or console.log(this.response);

      /* output without parsing will be received in json form
      {
        "name": "sonam",
        "roll": 101
      }
      // but we dont want to use json we will use object hence parse json to object.

      */
      /* output with parsing
      {name: 'sonam', roll: 101}
      */

      // now as it is an object, its keys can be accessed
      console.log(xhr.response.name);
      // sonam
      console.log(xhr.response.roll);
      // 101

      n.innerText = xhr.response.name;
      r.innerText = xhr.response.roll;
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// doing same thing using json.parse
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      /*
      {
        "name": "sonam",
        "roll": 101
      }
      */
      let obj = JSON.parse(xhr.response);
      console.log(obj);
      // {name: 'sonam', roll: 101}
      console.log(obj.name);
      // sonam
      console.log(obj.roll);
      // 101

      n.innerText = obj.name;
      r.innerText = obj.roll;
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// working with xml
let n = document.getElementById("name-id");
let r = document.getElementById("roll-id");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", true);

  xhr.responseType = "document";

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      // get all data from data.xml in object form
      // with response type defined get all data in xml form

      console.log(xhr.response.getElementsByTagName("student"));
      // get htmlelementcollection
      console.log(xhr.response.getElementsByTagName("student")[0]);
      // get student code

      console.log(
        xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("name")
      );
      // get html collection

      console.log(
        xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("name")[0]
      );
      // <name>Sonum</name>

      console.log(
        xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("name")[0].childNodes[0]
      );
      // "Sonum"

      console.log(
        xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("name")[0].childNodes[0].nodeValue
      );
      // Sonum

      n.innerText = xhr.response
        .getElementsByTagName("student")[0]
        .getElementsByTagName("name")[0].childNodes[0].nodeValue;

      console.log(
        xhr.response
          .getElementsByTagName("student")[0]
          .getElementsByTagName("roll")[0].childNodes[0].nodeValue
      );
      // 101

      r.innerText = xhr.response
        .getElementsByTagName("student")[0]
        .getElementsByTagName("roll")[0].childNodes[0].nodeValue;
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// short way to display xml
let data = document.getElementById("data");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.xml", true);
  xhr.responseType = "document";
  xhr.onload = function () {
    if (xhr.status === 200) {
      let x = xhr.response.getElementsByTagName("student");
      for (let i = 0; i < x.length; i++) {
        data.innerHTML += `
        <p> ${x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue} </p>
        <p> ${x[i].getElementsByTagName("roll")[0].childNodes[0].nodeValue} </p>
        <br>`;
      }
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// working with links - single data
let data = document.getElementById("data");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      // gets whole object from link
      // since object can access it with its keys

      console.log(xhr.response.userId);
      // 1

      console.log(xhr.response.id);
      // 1

      console.log(xhr.response.title);
      // sunt aut facere repellat provident occaecati excepturi optio reprehenderit

      console.log(xhr.response.body);
      // quia et suscipit
      // suscipit recusandae consequuntur expedita et cum
      // reprehenderit molestiae ut ut quas totam
      // nostrum rerum est autem sunt rem eveniet architecto

      let text = document.getElementById("data-json");
      text.innerHTML = `<h2>${xhr.response.title}</h2>
      <p>${xhr.response.userId}</p>
      <p>${xhr.response.id}</p>
      <p>${xhr.response.body}</p>`;
      // or do it in different divs
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// let jsonTable = document.getElementById("json-table");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);
      // gets whole 100 items within an object in console

      let x = xhr.response;
      for (let i = 0; i < x.length; i++) {
        console.log(x[i].userId);
        console.log(x[i].id);
        console.log(x[i].title);
        console.log(x[i].body);

        // showing it on webpage in the form of table
        jsonTable.innerHTML += `<tr>
        <td>${x[i].userId}</td>
        <td>${x[i].id}</td>
        <td>${x[i].title}</td>
        <td>${x[i].body}</td>
        </tr>`;
      }
    } else {
      console.log("problem occured");
    }
  };
  xhr.send();
}

// working with post requests
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://dummy.restapiexample.com/api/v1/create", true);
  xhr.responseType = "json";
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response);

      let data = (document.getElementById("data").innerText = "Data inserted");
    } else {
      console.log("problem occured");
    }
  };

  mydata = '{"name":"sonam","salary":"10","age":"26"}';

  xhr.send(mydata);
  // {status: 'success', data: {…}, message: 'Successfully! Record has been added.'}

  // link will be our file saving user responses in the server. mydata is the response of the user entering data like in our website html form. and we are sending this data to the our php file in server link. then we will get response from the link which will be displayed here.
}
