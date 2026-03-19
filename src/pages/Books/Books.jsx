import React, { use } from "react";
import Book from "../Book/Book";



const Books = ({ booksPromise }) => {
  const data = use(booksPromise);

  return (
    <div>
      <p className="font-bold text-4xl mt-11 md:mt-24 text-center text-amber-500">Books</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-9 md:mb-36">
        {data.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
