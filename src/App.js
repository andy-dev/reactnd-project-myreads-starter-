import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf(book, value) {
    console.log(book);
    console.log(value);
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <BookShelf
              books={this.state.books}
              onChangeShelf={(book, value) => {
                this.changeShelf(book, value);
              }}
            />}
        />
        <Route path="/search" render={({ history }) => <SearchBook />} />
      </div>
    );
  }
}

export default BooksApp;
