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
}

export default Library;