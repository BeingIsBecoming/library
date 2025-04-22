// Library Web App

// Array
const myLibrary = ["V.A.L.I.S.", "Steppenwolf", "Be Here Now" ];

// Book Constructor 
function Book(title,author,genre,pages,status) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.status = status;
}

const valis = new Book('V.A.L.I.S.', 'Philip K. Dick', 'SciFi', '288', 'yes');
const steppenwolf = new Book('Steppenwolf', 'Herman Hesse', 'SciFi', '256', 'yes');

// Add New Book to Array
function addBookToLibrary() {
  // take params, create a book then store it in the array
}

//Push new book object to array 
// const library = ["Banana", "Orange", "Apple", "Mango"];
// library.push("Kiwi", "Lemon");

// document.getElementById("demo").innerHTML = library;