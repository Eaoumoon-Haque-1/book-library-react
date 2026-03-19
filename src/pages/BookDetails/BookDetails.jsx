import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";
import { ToastContainer, toast } from "react-toastify";
const BookDetails = () => {
  const { id } = useParams();
  const bookNumId = parseInt(id);
  const data = useLoaderData();
  const targetedBookData = data.find((book) => book.bookId === bookNumId);
  console.log(targetedBookData);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    rating,
    publisher,
    totalPages,
    yearOfPublishing,
  } = targetedBookData;
  const handleMarkAsRead = (id) => {
    // store with id
    // store location
    // array or collection
    // check whether it exists
    // if not exists add
    const response = addToStoreDB(id);
    if (response === "exists") toast("Book already Exists");
    else toast("Book added to the list");
  };
  return (
    <div className="w-11/12 mx-auto mt-12 mb-24">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        {/* image */}
        <div className="w-full lg:w-[45%] p-6 md:p-10 lg:p-12 bg-[#f3f3f3FF] rounded-2xl flex justify-center items-center">
          <img
            className="w-full max-w-[280px] md:max-w-[360px] lg:max-w-[425px] max-h-[564px] object-contain"
            src={image}
            alt=""
          />
        </div>

        {/* card Details */}
        <div className="w-full lg:w-[55%]">
          <div>
            <p className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-5">
              {bookName}
            </p>
            <p className="mb-6">By: {author}</p>
          </div>

          <div className="border border-gray-700 border-dashed mb-4"></div>

          <p>{category}</p>

          <div className="border border-gray-700 border-dashed mt-4 mb-6"></div>

          <div className="mb-7">
            <span className="font-extrabold text-amber-200">Review: </span>
            {review}
          </div>

          {/* tags */}
          <div className="flex flex-wrap gap-3">
            <span className="font-extrabold text-amber-200">Tag</span>
            {tags.map((tag, index) => (
              <span key={index} className="text-[#23be0a]">
                #{tag}
              </span>
            ))}
          </div>

          <div className="border border-gray-700 border-dashed mt-6 mb-6"></div>

          {/* details */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-8">
            <p className="text-amber-100">Number of Pages:</p>
            <p>{totalPages}</p>

            <p className="text-amber-100">Publisher:</p>
            <p>{publisher}</p>

            <p className="text-amber-100">Year of Publishing:</p>
            <p>{yearOfPublishing}</p>

            <p className="text-amber-100">Rating:</p>
            <p>{rating}</p>
          </div>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleMarkAsRead(bookNumId)}
              className="btn btn-outline w-full sm:w-auto"
            >
              Mark as Read
            </button>

            <button className="btn btn-active btn-info w-full sm:w-auto">
              Add to Wishlist
            </button>
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
