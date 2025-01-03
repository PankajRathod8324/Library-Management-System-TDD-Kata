# Library Management System (TDD Approach)

## Overview

The **Library Management System** project is a Node.js-based application developed using the **Test-Driven Development (TDD)** methodology. It provides a basic implementation of a library system, allowing functionalities such as adding books, borrowing, and returning them.

The project includes:
1. A class library implementing the core functionality.
2. A Jest test suite to ensure robustness and correctness.

## Test-Driven Development (TDD) Approach

This project follows the **TDD** methodology. Each feature was implemented in the following stages:
1. Write a test case for the feature.
2. Develop code to make the test pass.
3. Refactor the code while ensuring all tests remain green.

This incremental approach ensures reliability and maintains clean, testable code throughout development. The commit history showcases the evolution of the solution.

## Features and Functionality

The system supports the following features:
1. **Book Management**: Add and view books from the library, ensuring no duplicates are added, and allowing for proper error handling when adding existing books.
2. **Borrowing and Returning**: Allows users to borrow books (if available) and return borrowed books while tracking who borrowed them. It ensures books cannot be borrowed when unavailable.
3. **Book Search**: Search for books by title, author, and ISBN. The system provides a way to ensure books can be retrieved based on their details.
4. **Overdue Tracking**: Tracks borrowed books and generates alerts for overdue books based on return dates.

## Solution Structure

The project includes:
1. **Library Management System Code**: Implemented in JavaScript (`tdd_library.js`).
2. **Unit Tests**: Written with Jest (`tdd_library.test.js`).

## Test Cases Explanation

### 1. **Add Books**

#### `It should allow to add a new book with a unique ISBN, title, author, and publication year`
-  This test ensures that a user can successfully add a book with unique details.

#### `It should not allow to add a book with duplicate ISBN, title, author, and publication year`
-  Verifies that a book with duplicate details cannot be added.

#### `It should allow to add books with same title and author but different ISBN and year`
- : Ensures the library allows adding books with the same title and author, but with different ISBN and publication year.

### 2. **Borrow Books**

#### `It should allow a user to borrow a book if it is available`
-  Verifies that a user can borrow a book if it is available.

#### `It should not allow a user to borrow a book if it is not available`
-  Ensures that a user cannot borrow a book that is already borrowed.

#### `It should not allow a user to borrow a book that does not exist in the library`
-  Verifies that borrowing a non-existing book throws an error.

### 3. **Return Books**

#### `It should allow a user to return a borrowed book`
-  Ensures a user can return a book after borrowing it.

#### `It should not allow a user to return a book that was not borrowed`
-  Verifies that a user cannot return a book that wasn’t borrowed.

#### `It should not allow a user to return a book borrowed by someone else`
-  Ensures a user cannot return a book borrowed by another user.

#### `It should not allow a user to return a book that does not exist in the library`
-  Ensures returning a book not present in the library throws an error.

### 4. **View Available Books**

#### `It should display all available books`
-  Verifies that the library can display all available books.

#### `It should return an empty list if no books are available`
-  Verifies that if all books are borrowed, the available books list is empty.

#### `It should display all books if all books are available`
-  Ensures all books are shown when no books are borrowed.

#### `It should return an empty list if the library has no books`
-  Verifies that an empty list is returned if no books are in the library.

---

## Dependencies

The project uses the following devDependencies:
- **Jest**: A testing framework for running and writing unit tests.
- **Babel**: Used to enable ES6+ features and transpile the code.
- **Jest Coverage Tools**: Integrated for generating code coverage reports.

## Getting Started

### Prerequisites

- Install Node.js (v16+ recommended).
- Install `npm` (comes with Node.js).

### Installation

1. Clone the repository:
   - `git clone <repository-url>`

2. Install Dependencies
    - `npm install`

3. To Run the Unit Test
    - `npm test`

4. To Generate a detailed code coverage report
    - `npm run coverage`

5. View Coverage Report Or start the file in browser:
    - `Start-Process <file-location of index.html>`
