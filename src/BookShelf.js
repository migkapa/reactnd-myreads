import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookShelf = props => {
  const { books, title, shelf, handleShelfChange } = props;
  const shelfBooks = books.filter(book => book.shelf === shelf); // filter books to specific shelf
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((
            book // iterated through a shelf books
          ) => (
            <li key={book.id}>
              <BookItem
                book={book}
                books={books}
                handleShelfChange={handleShelfChange}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookShelf;
