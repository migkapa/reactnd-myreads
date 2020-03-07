import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const BookItem = props => {
  const { book, books, handleShelfChange } = props;
  const thumbnail =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : '';

  const bookAuthors = book => {
    return (
      book.authors &&
      book.authors.map((author, i) => (
        <div className="book-author" key={i}>
          {author}
        </div>
      ))
    );
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${thumbnail})`
          }}
        ></div>
        <ShelfChanger
          book={book}
          books={books}
          handleShelfChange={handleShelfChange}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{bookAuthors(book)}</div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default BookItem;
