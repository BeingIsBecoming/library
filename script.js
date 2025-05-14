// Create Library Array
const library = [
    new Book("VALIS","Philip K. Dick", "SciFi", "Read"),
    new Book("Steppenwolf", "Herman Hesse", "SciFi", "Read"),
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

// Display Book Cards 
const cardsWrapper = document.querySelector(".cards-wrapper");
function displayLibraryCards(){
    cardsWrapper.innerHTML = "";
    library.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";
        card.innerHTML =
        `<h2 class = "title"> ${book.title}</h2>
        <h2 class = "author"> ${book.author}</h2>
        <p>Genre: ${book.genre}</p>
        <p>Status: ${book.status}</p>`;

        cardsWrapper.appendChild(card);
    });
}

// Add Book to Library
function addBook(title,author,genre,status){
    const newBook = new Book(title,author,genre,status);
    library.push(newBook);
    displayLibraryCards();
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
    form.reset();
});

displayLibraryCards();