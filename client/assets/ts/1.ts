export class Book 
{ 
     public Name: string; 

     constructor() 
     { 
     } 
}
class MyBookLibrary 
{ 
     public books: Book[]; 

     constructor() 
     { 
          this.books = Array<Book>(); 
     } 

     public AddBook(bookName: string) 
     { 
          var book = new Book(); 
          book.Name = bookName; 
          this.books.push(book); 
     } 
} 

module.exports = MyBookLibrary; 