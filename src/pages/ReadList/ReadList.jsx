import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDB";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sortType, setSortType] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId),
    );
    setReadList(myReadList);
  }, [data]);

  const handleSort = (type) => {
    setSortType(type);

    const sortedBooks = [...readList];

    if (type === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    }

    if (type === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    }

    setReadList(sortedBooks);
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <Tabs>
        <TabList>
          <Tab>My Read Books</Tab>
          <Tab>My Wishlist</Tab>
        </TabList>

        <TabPanel>
          <div className="flex justify-end mt-8 mb-6">
            <select
              value={sortType}
              onChange={(e) => handleSort(e.target.value)}
              className="bg-gray-900 text-white border border-cyan-500/20 rounded-xl px-4 py-3 outline-none"
            >
              <option value="">Filter Books By</option>
              <option value="rating">Rating</option>
              <option value="pages">Number of Pages</option>
            </select>
          </div>

          {readList.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center mt-16 bg-gray-900 border border-cyan-500/10 rounded-2xl p-12 mb-20">
              <h2 className="text-2xl font-semibold text-white mb-3">
                No Books Added Yet
              </h2>

              <p className="text-gray-400 max-w-md mb-8">
                You haven’t added any books to your read list. Start exploring
                and add your favorite books.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 mt-8">
              {readList.map((book) => (
                <div
                  key={book.bookId}
                  className="flex flex-col md:flex-row gap-6 bg-gray-900 text-white p-6 rounded-2xl border border-cyan-500/20"
                >
                  <div className="bg-gray-800 rounded-xl p-4 flex justify-center items-center md:w-[220px]">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="h-[220px] object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {book.bookName}
                    </h2>

                    <p className="text-gray-300 mb-3">By : {book.author}</p>

                    <p className="text-gray-400 mb-4">{book.review}</p>

                    <div className="flex flex-wrap gap-3 mb-4">
                      {book.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-300 border-t border-b border-gray-700 py-4 mb-4">
                      <p>
                        <span className="text-gray-500">Category:</span>{" "}
                        {book.category}
                      </p>
                      <p>
                        <span className="text-gray-500">Rating:</span>{" "}
                        {book.rating}
                      </p>
                      <p>
                        <span className="text-gray-500">Publisher:</span>{" "}
                        {book.publisher}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm text-gray-300">
                      <p>
                        <span className="text-gray-500">Pages:</span>{" "}
                        {book.totalPages}
                      </p>
                      <p>
                        <span className="text-gray-500">Year:</span>{" "}
                        {book.yearOfPublishing}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col items-center justify-center text-center mt-16 bg-gray-900 border border-cyan-500/10 rounded-2xl p-12 mb-20">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Wishlist Coming Soon 🚧
            </h2>

            <p className="text-gray-400 max-w-md mb-6">
              This section is currently under construction. We're working hard
              to bring your wishlist feature soon. Stay tuned!
            </p>

            <span className="px-4 py-2 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Check back later
            </span>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
