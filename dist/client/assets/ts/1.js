export class Book {
    constructor() {
    }
}
class MyBookLibrary {
    constructor() {
        this.books = Array();
    }
    AddBook(bookName) {
        var book = new Book();
        book.Name = bookName;
        this.books.push(book);
    }
}
module.exports = MyBookLibrary;
