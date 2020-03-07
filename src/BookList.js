import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = props => {
  const { books, handleShelfChange } = props;
  console.log(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            books={books}
            title="Currently Reading"
            shelf="currentlyReading"
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            books={books}
            title="Want to Read"
            shelf="wantToRead"
            handleShelfChange={handleShelfChange}
          />
          <BookShelf
            books={books}
            title="Read"
            shelf="read"
            handleShelfChange={handleShelfChange}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookList;
