import React, { Component } from 'react';

class BookShelf extends Component {
  handleChange = e => {
    console.log(e.target.value);
    debugger;
  };
  render() {
    const { books, onChangeShelf, bookShelfTitle } = this.props;

    return (
      <div className="list-books">
        
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">
                {bookShelfTitle}
              </h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map(book =>
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
                            <select onChange={e => onChangeShelf(book, e.target.value)}>
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
                        <div className="book-title">
                          {book.title}
                        </div>
                        {book.authors.map(author =>
                          <div key={author} className="book-authors">
                            {author}
                          </div>
                        )}
                      </div>
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        
        
      </div>
    );
  }
}

export default BookShelf;
