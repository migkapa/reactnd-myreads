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

  handleShelfChange = (updatedBook, shelf) => {
    // updating book shelfs
    BooksAPI.update(updatedBook, shelf).then(res => {
     updatedBook.shelf = shelf
     this.setState(prevState => ({
       books: prevState.books.filter(book => book.id !== updatedBook.id).concat(updatedBook) // resetting the books state with the book change
     }))
    })
  };

  render() {
    const { books } = this.state;
    
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
