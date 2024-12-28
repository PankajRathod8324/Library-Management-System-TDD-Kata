import Library from './tdd_library';

// Add Books
describe('Library - Add Books', () => {

    let library;

    // Ensuring that this is clean instance
    beforeEach(() => {
        library = new Library();
    });

    // It's Verifies that User can allow to add a book with valid details
    test('It should allow to add a new book with a unique ISBN, title, author and publication year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        expect(library.books).toEqual([
            { isbn: '8324', title: 'Book X', author: 'Author X', year: 2000, available: true}
        ]);
    });

});