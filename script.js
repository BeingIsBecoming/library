// Library Web App
const library = [];

// Book Constructor 
function Book(title,author,genre,pages,status) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.status = status;
}

// Add Book to Array
function addBook(title, author, genre, pages, status) {
  const newBook = new Book(title, author, genre, pages, status);
  library.push(newBook);
}