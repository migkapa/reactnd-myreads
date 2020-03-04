import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import SearchBooks from './SearchBooks';
import BookList from './BookList';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    // getting all the books from the API
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route path="/search" render={() => <SearchBooks books={books} />} />
        <Route exact path="/" render={() => <BookList books={books} />} />
      </div>
    );
  }
}

export default BooksApp;
