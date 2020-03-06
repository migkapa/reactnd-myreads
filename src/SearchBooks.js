import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BookItem from './BookItem';

class SearchBooks extends Component {
  static propTypes = {
    handleShelfChange: PropTypes.func.isRequired
  };

  state = {
    query: '',
    queriedBooks: []
  };

  getQueryBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    if (query) {
      BooksAPI.search(query).then(results => {
        results.length > 0
          ? this.setState({ queriedBooks: results })
          : this.setState({ queriedBooks: [] });
      });
    } else {
      this.setState({ queriedBooks: [] });
    }
  };

  render() {
    const { query, queriedBooks } = this.state;
    const { handleShelfChange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.getQueryBooks}
            />
          </div>
        </div>
        {queriedBooks.length > 0 && (
          <div className="search-books-results">
            <p>You searched for: {query}</p>
            <ol className="books-grid">
              {queriedBooks.map(book => (
                <li key={book.id}>
                  <BookItem book={book} handleShelfChange={handleShelfChange} />
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;
