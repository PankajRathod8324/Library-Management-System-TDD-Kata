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

    borrowBook(isbn){
        const book = this.books.find((e) => e.isbn === isbn);

        if(!book) {
            throw new Error('The book is not found.');
        }
        if(!book.available) {
            throw new Error('The book is not available.');
        }
        book.available = false;
    }
    
    returnBook(isbn){
        const book = this.books.find((e) => e.isbn === isbn);

        if(!book) {
            throw new Error('The book is not found.');
        }
        if(book.available) {
            throw new Error('The book is not currently borrowed.');
        }
        book.available = true;
    }


}

export default Library;