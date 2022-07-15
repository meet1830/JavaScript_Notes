class Library {
  constructor(booklist) {
    this.booklist = booklist;
    this.issuedBooks = {};
  }
  getBooklist() {
    this.booklist.forEach((element) => {
      console.log(element);
    });
  }
  issueBook(bookname, user) {
    // this.booklist.forEach((element) => {
    //     if (this.booklist.element == bookname) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
      console.log(`"${bookname}" issued to "${user}"`);
    } else {
      console.log(`"${bookname}" is already issued.`);
    }
    //     }
    // })
  }
  returnBook(bookname) {
    this.booklist.forEach((element) => {
      if (bookname != this.booklist.element) {
        console.log(`book does not exist in library.`);
      } else {
        if (this.issuedBooks[bookname] != undefined) {
          delete this.issuedBooks[bookname];
          console.log(`"${bookname}" successfully returned to the library.`);
        } else {
          console.log(`"${bookname}" is not issued to any reader.`);
        }
      }
    });
  }
}
