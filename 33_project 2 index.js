console.log("This is index.js");
//we will do this is in an object oriented way
//first with using prototypes and then same thing using es6
//now after completing the code, when refreshing the website all the books added are not showing or are not stored, this is because all the data always comes from backend like php or nodejs, etc and hence not done here.

// Todos
// 1. Store all the data to the localStorage
// 2. Give another column as an option to delete the book
// 3. Add a scroll bar to the view

//constructor
//our book is an object
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}
//display constructor - it will be used to display books. we will add some methods in its prototype, which will be responsible to display added books in the ui. 
function Display() {}

//adding methods to book's prototype which will be responsible to display books in our user interface, which is display it in website
//add methods to display prototype
Display.prototype.addToUi = function (book) {
  console.log("adding to UI");
  //to add in the UI need to create a template string
  let tableBody = document.getElementById("tableBody");
  let uiString = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr> `;
  tableBody.innerHTML += uiString;
};

//add to in display's prototype -> add and clear
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
  //resets all form fields
};

//implement validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

Display.prototype.showMessage = function (type, displayMessage) {
  let message = document.getElementById("message");
  let boldText;
  if (type == "success") {
    boldText = "Success!";
  } else {
    boldText = "Error!";
  }
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert"> 
        <strong>${boldText}:</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
  //also want this message to automatically remove after some time
  setTimeout(function () {
    message.innerHTML = "";
  }, 3000);
  //gets removed automatically after 2 sec
};

//1. add submit event listener to form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
//whenever we submit library form this function will run
function libraryFormSubmit(e) {
  console.log("you have submitted the form");
  //page reloads whenever we click add book button after displaying console.log for a short time, hence preventDefault();

  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  //here in type which ever is selected, we have to bring that element's id only

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  //.checked tells if checked or not
  if (fiction.checked) {
    type = fiction;
    //or type = fiction.checked
  } else if (programming.checked) {
    type = programming;
    //or type = programming.checked
  } else {
    type = cooking;
    //or type = cooking.checked
  }

  let book = new Book(name, author, type);
  console.log(book);
  //now books are added to local storage

  // to bring books to user interface define display object
  let display = new Display();
  if (display.validate(book)) {
    display.addToUi(book);
    //this method defined will add book to the dom
    display.clear();
    //clears form when user clicks submit
    display.showMessage("success", "Your book has been successfully added.");
    //displays success message on the screen after adding the book to user using bootstrap.
  } else {
    display.showMessage("danger", "Sorry, you cannot add this book.");
  }
  //Validate function - when user continuosly clicks add book option then books continue to get added without name and author,so for this validate function book name and author should be at least 3 characters to add a book. if validated then only add the book or else not.
  //now at this time without defining the validate and show functions the page is reloading when we click add book button.

  e.preventDefault();
}