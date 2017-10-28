import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';

import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  state = {
    searchResults: []
  };

  searchBook(query) {
    if (query.length > 0) {
      BooksAPI.search(query).then(results => {
        if (results.length > 0) {
          this.setState({ searchResults: results });
        } else {
          this.setState({ searchResults: [] });
        }
      });
    }
  }

  render() {
    const { addToShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}

            <DebounceInput
              type="text"
              minLength={1}
              placeholder="Search by title or author"
              debounceTimeout={300}
              onChange={event => this.searchBook(event.target.value)}
            />
          </div>
        </div>
        <h1>Search Results</h1>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map(book =>
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select value="none" onChange={e => addToShelf(book, e.target.value)}>
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="book-title">
                  {book.title}
                </div>
                {book.authors.map(author =>
                  <div key={author} className="book-authors">
                    {author}
                  </div>
                )}
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
