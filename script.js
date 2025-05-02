// Create Library Array
const library = [];

// Create Book Constructor
function Book (title, author, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status;
    this.id = crypto.randomUUID();
}

// Add Book to Array
function addBook(title,author,genre,status){
    const newBook = new Book(title,author,genre,status);
    library.push(newBook);
}

// Form Handler
document.getElementById("form").addEventListener("submit", function(event){
    // Prevent Page Reload
    event.preventDefault();
    // Get Form Values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const status = document.getElementById("status").value;
    // Add New Book
    addBook(title, author, genre, status);
    // Clear Form Values
    this.reset();
});