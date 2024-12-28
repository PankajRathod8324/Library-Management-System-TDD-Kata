class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push({ ...book, available: true });
    }
}

export default Library;