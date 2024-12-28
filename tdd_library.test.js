import Library from './tdd_library';

// Add Books
describe('Library - Add Books', () => {

    let library;

    // Ensuring that this is clean instance
    beforeEach(() => {
        library = new Library();
    });

    // It's Verifies that A User can allow to add a book with valid details
    test('It should allow to add a new book with a unique ISBN, title, author and publication year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        expect(library.books).toEqual([
            { isbn: '8324', title: 'Book X', author: 'Author X', year: 2000, available: true}
        ]);
    });

    // It's Verifies that A User cannot allow to add a book with duplicate ISBN, title, author and publication year'
    test('It should not allow to add a book with duplicate ISBN, title, author and publication year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        expect(() => {
            library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        }).toThrow('Book with these details are already exists.');
    });

    // Additional Testcases:
    // It's Verifies that A User can allow to add a book with same title and author but ISBN and year are different
    test('It should allow to add books with same title and author but different ISBN and year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: ' Author X', year: 2002});
        library.addBook({ isbn: '8328', title: 'Book X', author: 'Author X', year: 2008});
        expect(library.books).toHaveLength(2);
    });
});

// Borrow Books
describe('Library - Borrow Books', () => {

    let library;

    beforeEach(() => {
        library = new Library();
    });

    // It's Verifies that A User can able to borrow a book from the library
    test('It should allow a user to borrow a book if it is available', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        library.borrowBook('8324');
        expect(library.books[0].available).toBe(false);
    });
})
