class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book to the Library
    addBook(book) {

        const { isbn, title, author, year} = book;

        // Check that if a book with the same detaiks already exists
        if (this.books.some((e) => e.isbn === isbn && e.title === title && e.author === author && e.year === year ))
        {
            throw new Error('Book with these details are already exists.');
        }

        // Add a new book to the library with available status set to true
        this.books.push({ ...book, available: true });
    }

    // Borrow a book by ISBN
    borrowBook(isbn, userId){
        const book = this.findBook(isbn);

        // If a book is not available then throw an error
        if(!book.available) {
            throw new Error('The book is not available.');
        }

        // Mark a book as borrowed 
        book.available = false;

        // Store a userId who borrowed it
        book.borrowedBy = userId;
    }
    
    // Return a borrowed book
    returnBook(isbn, userId){
        const book = this.findBook(isbn);

        // If a book is already available then it cannot be borrowed
        if(book.available) {
            throw new Error('The book is not currently borrowed.');
        }
        
        // If a user trying to return a book that is not the one who have borrowed it
        if(book.borrowedBy !== userId) {
            throw new Error('You did not borrow this book.');
        }

        // Mark a book as available again
        book.available = true;
        book.borrowedBy = null;
    }

    // View all available books in the library
    viewAvailableBooks() {
        return this.books.filter((book) => book.available);
    }

    // find a book by its ISBN
    findBook(isbn) {
        const book = this.books.find((e) => e.isbn === isbn);
        if(!book) {
            throw new Error('The book is not found.');
        }
        return book;
    }


}

export default Library;