class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

class Display {
  addtoUi(book) {
    let tableBody = document.getElementById("tableBody");
    let uiString = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr> `;
    tableBody.innerHTML += uiString;
  }

  clearForm() {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
  }

  validateBook(book) {
    if (book.name.length < 2 || book.author.length < 2) {
      return false;
    } else {
      return true;
    }
  }

  message(state, statement) {
    let message = document.getElementById("message");
    let boldText;
    if (state == "success") {
      boldText = "Success!";
    } else {
      boldText = "Error!";
    }
    message.innerHTML = `<div class="alert alert-${state} alert-dismissible fade show" role="alert"> 
        <strong>${boldText}:</strong> ${statement}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
    setTimeout(function () {
      message.innerHTML = "";
    }, 3000);
  };
}
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;

  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else {
    type = cooking.value;
  }

  let book = new Book(name, author, type);

  // let notes = localStorage ('notes');
  // if (notes == null) {
  //   notesObj = [];
  // } else {
  //   notesObj = JSON.parse(notes);
  // }
  // notesObj.push(book);
  // localStorage.setItem("notes", JSON.stringify(notesObj));

  let display = new Display();
  if (display.validateBook(book)) {
    display.addtoUi(book);
    display.clearForm();
    display.message("success", "Book is successfully added.");
  } else {
    display.message("error", "Book cannot be added.");
  }
  e.preventDefault();
}