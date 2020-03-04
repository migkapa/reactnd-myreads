import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    // get props
    const { books } = this.props;
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
            />
          </div>
        </div>
        <div className="open-search">
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button> */}
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookList;
