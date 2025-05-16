// Library Array
let library = [
    new Book("VALIS","Philip K. Dick", "SciFi", "Read"),
    new Book("The Glass Bead Game", "Herman Hesse", "SciFi", "Read"),
    new Book("Be Here Now", "Ram Dass", "Spirituality", "Read"),
    new Book("Being & Time", "Martin Heidegger", "Philosophy", "Read"),
    new Book("The Voice of the Silence", "Madame Blavatsky", "Spirituality", "Read"),
];

// Book Constructor
function Book (title, author, genre, status) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.status = status;
    this.id = crypto.randomUUID();
}

// Prototype Read Status
Book.prototype.toggleReadStatus = function() {
    if (this.status === "Read") {
        this.status = "Unread";
    } else {
        this.status = "Read";
    }
};

// Display Book Cards 
const cardsWrapper = document.querySelector(".cards-wrapper");
function displayLibraryCards() {
    cardsWrapper.innerHTML = "";
    library.forEach(book => {
        // Display Books
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML =
        `<h2 class = "title"> ${book.title}</h2>
        <h2 class = "author"> ${book.author}</h2>
        <p>Genre: ${book.genre}</p>
        <p>Status: ${book.status}</p>`;
        cardsWrapper.appendChild(card);
        
        // Remove Button
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.innerText = "Remove";
        deleteButton.addEventListener("click", ()=> {
            removeBook(book.id);
        });
        card.appendChild(deleteButton);
        
        // Status Button
        const statusButton = document.createElement("button");
        statusButton.className = "status-button";
        statusButton.innerText = book.status === "Read" ? "Unread" : "Read";
        statusButton.addEventListener("click", () => {
            book.toggleReadStatus();
            displayLibraryCards();
        });
        card.appendChild(statusButton);
    });
}

// Add Book to Library
function addBook(title,author,genre,status){
    const newBook = new Book(title,author,genre,status);
    library.push(newBook);
    displayLibraryCards();
}

// Remove Book from Library
function removeBook(bookID) {
    library = library.filter(book => book.id !== bookID);
    displayLibraryCards();
}

// Form Handler
document.getElementById("form").addEventListener("submit", (event)=> {
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
    form.reset();
});

displayLibraryCards();