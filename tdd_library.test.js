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

    // It's Verifies that User cannot allow to add a book with duplicate ISBN, title, author and publication year'
    test('It should not allow to add a book with duplicate ISBN, title, author and publication year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        expect(() => {
            library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        }).toThrow('Book with these details are already exists.');
    });

    // Additional Testcases:
    // It's Verifies that User can allow to add a book with same ISBN but other details are different
    test('It should allow to add books with different details but same ISBN', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: ' Author X', year: 2002});
        library.addBook({ isbn: '8324', title: 'Book Y', author: 'Author Y', year: 2008});
        expect(library.books).toHaveLength(2);
    });

    // It's Verifies that User can allow to add a book with same title and author but ISBN and year are different
    test('It should allow to add books with same title and author but different ISBN and year', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: ' Author X', year: 2002});
        library.addBook({ isbn: '8328', title: 'Book X', author: 'Author X', year: 2008});
        expect(library.books).toHaveLength(2);
    });
});