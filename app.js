const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", available: true },
    { title: "1984", author: "George Orwell", category: "Dystopia", available: true },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", available: true },
];

let borrowedBooks = [];

// Display all books
function displayBooks() {
    const bookContainer = document.getElementById("books");
    bookContainer.innerHTML = "";

    books.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button onclick="borrowBook(${index})" ${book.available ? '' : 'disabled'}>${book.available ? 'Borrow' : 'Borrowed'}</button>
        `;
        bookContainer.appendChild(bookCard);
    });
}

// Borrow a book
function borrowBook(index) {
    const book = books[index];
    book.available = false;
    borrowedBooks.push({...book, borrowedDate: new Date().toLocaleDateString() });

    displayBooks();
    displayBorrowedBooks();
}

// Search books
function searchBooks() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const bookContainer = document.getElementById("books");
    bookContainer.innerHTML = "";

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );

    filteredBooks.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <button onclick="borrowBook(${index})" ${book.available ? '' : 'disabled'}>${book.available ? 'Borrow' : 'Borrowed'}</button>
        `;
        bookContainer.appendChild(bookCard);
    });
}

// Display borrowed books
function displayBorrowedBooks() {
    const borrowedContainer = document.getElementById("borrow-history");
    borrowedContainer.innerHTML = "";

    borrowedBooks.forEach(book => {
        const borrowedCard = document.createElement("div");
        borrowedCard.classList.add("borrowed-card");

        borrowedCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <p>Borrowed on: ${book.borrowedDate}</p>
        `;
        borrowedContainer.appendChild(borrowedCard);
    });
}

// Initial display
displayBooks();
displayBorrowedBooks();