import React from 'react';
import './Book.css';

function AddNewBook() {
  return (
    <>
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form action="">
        <div className="formcontrol">
          <input
            type="text"
            className="input-text"
            placeholder="Add title"
            name="title"
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add author"
            name="author"
          />
          <button type="button" className="addBtn">Add Book</button>
        </div>
      </form>
    </>
  );
}

export default AddNewBook;
