class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        const isduplicate = this.books.some((e) => 
            e.isbn === book.isbn &&
            e.title === book.title &&
            e.author === book.author &&
            e.year === book.year 
        );

        if (isduplicate) {
            throw new Error('Book with these details are already exists.');
        }
        
        this.books.push({ ...book, available: true });
    }
}

export default Library;