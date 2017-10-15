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
          <ol className="contact-list">
            {this.state.searchResults.map(book =>
              <li key={book.id}>
                <div>
                  <p>
                    {book.title}
                  </p>
                </div>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBook;
