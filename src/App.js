import React from 'react';
import { Route } from 'react-router-dom';

import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';
import SearchBook from './SearchBook';
import BookShelfNav from './BookShelfNav';
import OpenSearchButton from './OpenSearchButton';

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
            <div>
              <BookShelfNav />

              <BookShelf
                bookShelfTitle="Currently Reading"
                books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
                onChangeShelf={(book, value) => {
                  this.changeShelf(book, value);
                }}
              />
              <BookShelf
                bookShelfTitle="Want to Read"
                books={this.state.books.filter(book => book.shelf === 'wantToRead')}
                onChangeShelf={(book, value) => {
                  this.changeShelf(book, value);
                }}
              />
              <BookShelf
                bookShelfTitle="Read"
                books={this.state.books.filter(book => book.shelf === 'read')}
                onChangeShelf={(book, value) => {
                  this.changeShelf(book, value);
                }}
              />

              <OpenSearchButton />
            </div>}
        />
        <Route path="/search" render={({ history }) => <SearchBook />} />
      </div>
    );
  }
}

export default BooksApp;
