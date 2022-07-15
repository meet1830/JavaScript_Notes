/*
Create a library class and implement the following:
Create a constructor that takes the book list as an argument.
1. getBookList(): This function should return the list of all book present in the library.
2. issueBook(bookname, user): This function takes an argument of bookname and user, in bookname, we specify the name of the book, and in user, we specify the name of the user. This function will issue the book to the user.
3. returnBook(bookname): This function will take one argument, which is the name of the book. The purpose of this function is to remove the book from the users borrowed book data. It is totally up to you how you implement it.
*/

class Library {
  constructor(booklist) {
    this.booklist = booklist;
    this.issuedBooks = {};
  }
  getBooklist() {
    this.booklist.forEach(function (element) {
      console.log(element);
    });
  }
  issueBook(bookName, user) {
    if (this.issuedBooks[bookName] == undefined) {
      this.issuedBooks[bookName] = user;
      console.log(`"${bookName}" has been issued to "${user}"`);
    } else {
      console.log(`This book is already issued!`);
    }
  }
  returnBook(bookName) {
    this.booklist.forEach(function (element) {
      if(this.booklist.element == this.issuedBooks[bookName]) {
        if (this.issuedBooks[bookName] == undefined) {
          console.log(`"${bookName}" is not issued.`);
        } else {
          delete this.issuedBooks[bookName];
        }
      } else {
        console.log(`${bookName} does not exist in library.`);
      }
    });
  }

}

//in console to run the code
/*
meetLib = new Library(['Clever Programmer', 'Akshay Saini', 'JavaScript for Beginners']); 
//give input in form of array of strings
meetLib.getBooklist(); 
//prints all books to console
meetLib.issueBook('Clever Programmer', 'Meet');
meetLib.issueBook('Clever Programmer', 'Meet2'); 
//gives error
meetLib.returnBook('Clever Programmer');
*/
