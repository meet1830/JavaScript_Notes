console.log('Project 6 - PostMan Clone');

//  Utility functions:
//  1. Utility function to get DOM elemwnt from string
function getElementFromString(string) {
  let div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
}

//  hide the parameters box initially when app starts
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

//if user clicks on parameters box then hide json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
  document.getElementById('requestJson').style.display = 'none';  
  document.getElementById('parametersBox').style.display = 'block';
})

//if user clicks on json box then hide parameters box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
  document.getElementById('parametersBox').style.display = 'none';
  document.getElementById('requestJson').style.display = 'block';  
})

//add parameters when clicking on '+' button
//initiaize number of parameters
let addedParamCount = 0;
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', (e) => {
  let params = document.getElementById('params');
  let string = `<form class="row g-3 my-2">
                  <legend class="col-form-label col-sm-2 pt-0">Parameter ${addedParamCount+2}</legend>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="form-control"
                      id="parameterKey${addedParamCount+2}"
                      placeholder="Enter parameter ${addedParamCount+2} Key"
                    />
                  </div>
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="form-control"
                      id="parameterValue${addedParamCount+2}"
                      placeholder="Enter parameter ${addedParamCount+2} Value"
                    />
                  </div>
                  <button class="deleteParam btn btn-primary col-md-1">-</button>
                </form>`;
  addedParamCount++;
  //to add this in the dom we will have to make an element of this. Utility function --> 1
  //convert the element string to DOM
  let paramElement = getElementFromString(string);
  params.appendChild(paramElement);

  //OR without using utility function just use
  //params.innerHTML += string;

  //add event listener to '-' button to delete parameter
  //added 'deleteParam' class to button in string
  let deleteParam = document.getElementsByClassName('deleteParam');
  for (item of deleteParam) {
    item.addEventListener('click', (e) => {
      //TODO: add a confirmation box for parameter deletion 
      e.target.parentElement.remove();
      //target means whichever '-' button is clicked
      //in loop because to know which '-' was clicked.
    })
  }
  e.preventDefault();
})

//if user clicks submit button
let submit = document.getElementById('submit').addEventListener('click', () => {
  //show please wait in the response box to request patience from user
  // document.getElementById('responseJsonText').innerHTML = 'Fetching response please wait...';
  document.getElementById('responsePrism').innerHTML = 'Fetching response please wait...';
  //get all the values added by user 
  let url = document.getElementById('urlBox').value;
  let requestType = document.querySelector("input[name='requestType']:checked").value;
  let contentType = document.querySelector("input[name='contentType']:checked").value;
  // console.log(url, requestType, contentType);
  //if user has selected paramsRadio then collect all the parameters in an object
  let data = {};
  if (contentType == 'paramsRadio') {
    for (let i=0; i<addedParamCount+1; i++) {
        if (document.getElementById(`parameterKey${i+1}`) != undefined) {
        let key = document.getElementById(`parameterKey${i+1}`).value;
        let val = document.getElementById(`parameterValue${i+1}`).value;
        //adding it in object
        data[key] = val;
        //now if parameter is deleted and then submit then its value undefined and shows error. hence perform check through if condition
      }
    }
    //to keep data variable in uniform typeoff and not object when custom params is selected and string when json is selected, convert data object here to string
    data = JSON.stringify(data);
  }
  else {
    //if user selected json then get data from json textarea
    data = document.getElementById('requestJsonText').value;
  }
  //log all values in console for debugging
  console.log(url);
  console.log(requestType);
  console.log(contentType);
  console.log(data);

  //if request type if get then invoke fetch api to create a get request
  if (requestType == 'get') {
    fetch(url, {
      method: 'get',
    })
    .then(response => response.text())
    .then((text) => {
      // document.getElementById('responseJsonText').value = text;
      document.getElementById('responsePrism').innerHTML = text;
      Prism.highlightAll();
    })
  }
  //for get request use: https://randomuser.me/api
  //for post request use: https://jsonplaceholder.typicode.com/posts and in json textarea add {"title":"foo","body":"bar","userId":1} or in custom parameters add same thing without "" and 3 boxes here.
  else {
    fetch(url, {
      method: 'post',
      body: data,
      //body is a string and needs a string as an input
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => response.text())
    .then((text) => {
      // document.getElementById('responseJsonText').innerHTML = text;
      document.getElementById('responsePrism').innerHTML = text;
      Prism.highlightAll();
    })
  }
})