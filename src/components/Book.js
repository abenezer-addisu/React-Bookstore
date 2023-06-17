import React from 'react';
import './Book.css';
import BookRecord from './BookRecord';
import AddNewBook from './AddNewBook';

function Book() {
  const books = [
    {
      id: 1,
      type: 'action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      type: 'action',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      type: 'action',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <>
      <section className="section">
        <div className="container">
          <div>
            {books.map((book) => (
              <BookRecord
                type={book.type}
                title={book.title}
                author={book.author}
                key={book.id}
              />
            ))}
          </div>
        </div>
      </section>
      <hr />
      <AddNewBook />
    </>
  );
}

export default Book;
