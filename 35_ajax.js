console.log("AJAX - asynchronous javascript and xml");
//for 1., 2., 3. etc. read upto that para without new line

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked fetchBtn");
  //create and instantiate an xhr object
  const xhr = new XMLHttpRequest();

  //open the object
  //1.
  // xhr.open("GET", "35_meet.txt", true);
  //give it a get request - its first argument
  //get request means just fetching data, post request means in addtion some data is also sent with the request. for example in get we give it a url and it tells us the contents of that url, wheras in post we give it a url and also some data and we get response based on that data.
  //second argument - from where does data come from
  //third argument - want to give request for synchronous -> blocking request -> false or asynchronous -> non blocking -> true

  // 8.
  //now go to google and type fake json data ans on the website jsonplacehodler.typicode.com a code is given. Run that code. copy the link from that code. and paste it in here. run and result is displayed in console same as result of code.
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  // 9.
  //now for post request, go to dummy.restapiexample.com and click on details. it lists the data to be given for psot request. go back and copy the link and paste.
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);
  //also need to send data with it.
  //  xhr.getResponseHeader('Content-type', 'application/x-www-form-urlencoded');
  //this means that we are sending our form data in the url itself.

  // 11.
  xhr.getResponseHeader("Content-type", "application/JSON");

  //2.
  //what to do on progress - optional to use
  xhr.onprogress = function () {
    console.log("on progress");
  };

  // 5.
  //onprogress can be used for loaders and spinners. on progress can be used to show spinners and whenever onload is done spinners can be removed.

  // 7.
  //now using onload but first used to use onreadystate
  xhr.onreadystatechange = function () {
    console.log("Ready state is ", xhr.readyState);
  };
  //when click fetchBtn = we got 4 ready states. there are five 0-4. google ready state code values and get names and its meaning in mdn website. so whenever state changes, it prints in console. onload means that readystate has reached 4.

  //3.
  //when response is ready what to do - optional
  //optional because not everytime we want to track progress
  xhr.onload = function () {
    if (this.status === 200) {
      //200-->response ok = http status code. search google for all of them. no need to remember
      console.log(this.responseText);
    } else {
      console.log("Some error occured.");
    }
  };

  // 6.
  //also STATUS CHECK can be performed inside onload for example if meet2.txt which does not exist then throws error. but we want it to behave differently when error occurs and when it does not.

  //4.
  //nothing happens in console when clicking fetchBtn because we also have to send request
  //   xhr.send();
  //now when click gives error beacause we have not defined meet.txt. make that file. Now the text inside meet.txt file is printed in console. got output without reloading the page.

  // 10.
  //   let params = "name=test&salary=123&age=23";
  //copy the data after clicking on details in dummyapi website and copy and paste here. changed and modified using = and &.
  //we sent data using xml but they want it in json hence we dont get desired output (we got output also on xml, they may have updated the api to accept xml too). hence repaste exact data in details from website and type JSON at end of getresponseheader. and in params change test to test214 or anything to make it unique. after running if clicked again on fetchBtn without refreshing then give error of too many requests in our case. in video have to change id to process another request.
  // xhr.send(params);

  // 12.
  let params = ` {"name":"test","salary":"123","age":"23"} `;
  xhr.send(params);

  // 8.
  console.log("we are done.");
  //here in console output first we are done is printed, then onprogress and then fake json output. because we have asynchronous true. if false, then console gives output, but gives warning that you should true value as false can make user wait if server is slow, etc.

  // 13.
  //post request - no limit on data sending can send big data also always send passwords through post request only because security. Yours customers data may get hacked because of this.
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener("click", popHandler);

function popHandler() {
  console.log("you have clicked pop handler");

  //instantiate xhr object
  const xhr = new XMLHttpRequest();

  //open project
  xhr.open("GET", "https://reqres.in/api/users?page=2", true);

  //when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      //parse because we get output in the form of string.
      console.log(obj);

      // 2.
      let list = document.getElementById("list");
      //iterate appending li in the list
      str = "";
      for (key in obj) {
        str += `<li>${obj[key].email}</li>`;
      }
      list.innerHTML = str;
    } 
    
    else {
      console.log("some error occured.");
    }
  };
  //fetches the data of employees' names and populates them on webpage
  //send request
  xhr.send();
  console.log("we are done fetching employees.");
}