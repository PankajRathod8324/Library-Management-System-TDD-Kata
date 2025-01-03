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
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2002});
        library.addBook({ isbn: '8328', title: 'Book X', author: 'Author X', year: 2008});
        expect(library.books).toEqual([
            { isbn: '8324', title: 'Book X', author: 'Author X', year: 2002, available: true},
            { isbn: '8328', title: 'Book X', author: 'Author X', year: 2008,available: true }
        ]);
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

    // It's Verifies that A User cannot borrow a book if it is not available
    test('It should not allow a user to borrow a book if it is not available', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        library.borrowBook('8324');
        expect(() => {
            library.borrowBook('8324');
        }).toThrow('The book is not available.');
    });

    // It's Verifies that A User cannot borrow a book that does not exists in the library
    test('It should not allow a user to borrow a book that does not exists in the library', () => {
        expect(() => {
            library.borrowBook('8325');
        }).toThrow('The book is not found.')
    });
});

// Return Books
describe('Library - Return Books', () => {

    let library;

    beforeEach(() => {
        library = new Library();
    });

    // It's Verifies that A User can return a borrowed book
    test('It should allow a user to return a borrowed book', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: '2000'});
        library.borrowBook('8324', 'user123');
        library.returnBook('8324', 'user123');
        expect(library.books[0].available).toBe(true);
    });

    // It's Verifies that A User cannot return book that was not borrowed
    test('It should not allow a user to return a book that was not borrowed', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: '2000'});
        expect(() => {
            library.returnBook('8324');
        }).toThrow('The book is not currently borrowed.');
    });

    // It's Verifies that a user cannot return a book they did not borrow
    test('It should not allow a user to return a book borrowed by someone else', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000 });
        library.borrowBook('8324', 'user123'); 
        expect(() => {
            library.returnBook('8324', 'user456'); 
        }).toThrow('You did not borrow this book.');
    });

    // It's Verifies that A User cannot return a book that does not exists in the library
    test('It should not allow a user to return a book that does not exists in the library', () => {
        expect(() => {
            library.returnBook('8325', 'user123');
        }).toThrow('The book is not found.');
    });
});

// View Available Books
describe('Library - View Available Books', () => {

    let library;

    beforeEach(() => {
        library = new Library();
    });

    // It's Verifies that the library can display all available books
    test('It should display all available books', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000});
        library.addBook({ isbn: '8325', title: 'Book Y', author: 'Author Y', year: 2001, borrowedBy: null});
        library.borrowBook('8324', 'user123');
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([
            { isbn: '8325', title: 'Book Y', author: "Author Y", year: 2001, available: true, borrowedBy: null},
        ]);
    });

    // It's Verifies that an empty list is returned if no books are available
    test('It should return an empty list if no books are available', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000 });
        library.borrowBook('8324', 'user123'); // Borrow the only book
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([]);
    });
    
    // It's Verifies that all books are shown if all books are available
    test('It should display all books if all books are available', () => {
        library.addBook({ isbn: '8324', title: 'Book X', author: 'Author X', year: 2000, borrowedBy: null});
        library.addBook({ isbn: '8325', title: 'Book Y', author: 'Author Y', year: 2001, borrowedBy: null });
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([
            { isbn: '8324', title: 'Book X', author: 'Author X', year: 2000, available: true, borrowedBy: null },
            { isbn: '8325', title: 'Book Y', author: 'Author Y', year: 2001, available: true, borrowedBy: null },
        ]);
    });

    // It's Verifies that no errors occur if the library is empty
    test('It should return an empty list if the library has no books', () => {
        const availableBooks = library.viewAvailableBooks();
        expect(availableBooks).toEqual([]);
    });
})