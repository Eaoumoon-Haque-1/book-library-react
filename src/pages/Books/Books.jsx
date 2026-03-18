import React, { use, useState } from "react";
import Book from "../Book/Book";

// 0
// :
// author
// :
// "F. Scott Fitzgerald"
// bookId
// :
// 1
// bookName
// :
// "The Great Gatsby"
// category
// :
// "Classic"
// image
// :
// "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
// publisher
// :
// "Scribner"
// rating
// :
// 4.5
// review
// :
// "'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
// tags
// :
// (2) ['Fiction', 'Romance']
// totalPages
// :
// 192
// yearOfPublishing
// :
// 1925
// [[Prototype]]
// :
// Object
// 1
// :

const Books = ({ booksPromise }) => {
  const [allBooks, setAllBooks] = useState([]);

  // const booksPromise = fetch('./booksData.json').then(res=>res.json());
  // console.log(booksPromise);
  const data = use(booksPromise);
  //   console.log(data);
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
