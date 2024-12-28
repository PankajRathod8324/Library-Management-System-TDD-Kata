class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {

        const { isbn, title, author, year} = book;

        if (this.books.some((e) => e.isbn === isbn && e.title === title && e.author === author && e.year === year ))
        {
            throw new Error('Book with these details are already exists.');
        }

        this.books.push({ ...book, available: true });
    }

    borrowBook(isbn, userId){
        const book = this.findBook(isbn);

        if(!book.available) {
            throw new Error('The book is not available.');
        }
        book.available = false;
        book.borrowedBy = userId;
    }
    
    returnBook(isbn, userId){
        const book = this.findBook(isbn);

        if(book.available) {
            throw new Error('The book is not currently borrowed.');
        }
        
        if(book.borrowedBy !== userId) {
            throw new Error('You did not borrow this book.');
        }
        book.available = true;
        book.borrowedBy = null;
    }

    findBook(isbn) {
        const book = this.books.find((e) => e.isbn === isbn);
        if(!book) {
            throw new Error('The book is not found.');
        }
        return book;
    }


}

export default Library;