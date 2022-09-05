console.log("Welcome to Notes App");
showNotes(); 
// function called cause whenever page reloaded, notes should be displayed

// if user adds a note, then add it to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  // whenver user clicks on add button then the text area (note) will be targeted

  // for adding title
  let addTitle = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");
  // may be possible that there would be some notes already stored in local storage before adding this note. Hence, it is retrieved

  // if local storage is null
  if (notes == null) {
    notesObj = [];
    //if notes are null then set it as blank array
  } else {
    notesObj = JSON.parse(notes);
    // parse the notes string, and get array
  }
  //we store our notes in notesObj array. if we have nothing then set it as blank array or otherwise if we are getting an array then with the help of notes string we are retrieving that array

  // For adding title to note
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }

  // when using without title
  // notesObj.push(addTxt.value); 

  // when using with title
  notesObj.push(myObj);
  // if user clicks add note then notes will be updated
  
  // also needs to update local storage
  localStorage.setItem("notes", JSON.stringify(notesObj));
  
  // notes is an array before this and now it is converted to string
  // converted to string bc in local storage array cannot be saved

  addTitle.value = "";
  addTxt.value = "";
  // after clicking add note the text area should update to blank


  // console.log(notesObj);
  // notesobj string converted to array and returned

  showNotes();
});

// function to read and then display elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } 
  else {
    notesObj = JSON.parse(notes);
  }
  // did exact same thing as above

  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class ='noteCard my-2 mx-2 card' style="width: 18rem;">
              <div class='card-body'>
                <h5 class='card-title'>${element.title}</h5>
                <p class='card-text'>${element.text}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class='btn btn-primary'>Delete Note</button> 
              </div>
            </div> `;
    // noteCard class added to identify notes
    // note strings are being appended as and when added
    // whatever would be in the local storage array would be appended in element

    // delete function will get called when clicking the delete button in html above. hence calling function when clicked hence onclick. which item (note) to delete from local storage array? for that the index of the array is given as a button id and button's id is passed to deletenode function. basically index of array is passed as function argument

    // adding note without title
    // <h5 class='card-title'>Note ${index + 1}</h5>
    // <p class='card-text'>${element}</p>
  });

  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html;
  } else {
    notesElem.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// function to delete a note
function deleteNote(index) {
  // console.log('i am deleting', index);

  let notes = localStorage.getItem("notes");
  // if (notes == null) {
  //   notesObj = [];
  // } else {
  //   notesObj = JSON.parse(notes);
  // } //reading local storage
  
  notesObj = JSON.parse(notes);
  
  notesObj.splice(index, 1);
  // length of 1 element gets deleted in local object notesObj. local storage needs to be updated with notesObj to reflect the changes.

  localStorage.setItem("notes", JSON.stringify(notesObj)); 
  // updating local storage
  
  showNotes(); 
  // showing all notes again
}

// search tab
let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {
  // console.log('input event fired!', inputVal); 
  // by this anything user types will be printed itteratively in the console
  // if inputval is changed then will print in console

  let inputVal = search.value.toLowerCase(); 
  // tolowercase to remove case sensitivity in search
  
  let noteCards = document.getElementsByClassName('noteCard');

  // console.log(typeof noteCard); 
  // object type
  // each card being added to show notes through inner html is given a class of notecard

  Array.from(noteCards).forEach(function (element) {
    // to match each and every content of card with the text in search tab
    // first bring content of the card
    let cardTxt = element.getElementsByTagName('p')[0].innerText; 
    // here in div of notecard class name only one element has paragraph so can get it by tag name, innertext to get it as string so that includes method can be used below
    // console.log(cardTxt); 
    // whatever typed in search bar displays all cards

    if (cardTxt.includes(inputVal)) {
      element.style.display = 'block';
    }
    else {
      element.style.display = 'None';
    }
  });
});

/* FURTHER FEATURES TO ADD
1. Add title
2. Mark a note as important
3. Separate notes by user
4. Sync and host to a web server
*/