import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utility/addToDB";
import { ToastContainer, toast } from 'react-toastify';
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
const handleMarkAsRead = id =>{
    // store with id
    // store location
    // array or collection
    // check whether it exists
    // if not exists add
    const response = addToStoreDB(id);
    if(response ==="exists") toast("Book already Exists");
}
  return (
    <div className="flex space-x-12 mt-12 mb-24">
      {/* image */}
      <div className="p-18.5 bg-[#f3f3f3FF] rounded-2xl">
        <img className="max-h-[564px] max-w-[425px]" src={image} alt="" />
      </div>

      {/* card Details */}
      <div>
        <div>
          <p className="text-[40px] font-bold mb-5">{bookName}</p>
          <p className="mb-6">By: {author}</p>
        </div>
        <div className="border border-gray-700 border-dashed mb-4"></div>
        <p>{category}</p>
        <div className="border border-gray-700 border-dashed mt-4 mb-6"></div>
        <div className="mb-7">
          <span className="font-extrabold text-amber-200">Review: </span>
          {review}
        </div>
        <div className="space-x-3">
          <span className="font-extrabold text-amber-200">Tag</span>
          {tags.map((tag) => (
            <span className="text-[#23be0a]">#{tag}</span>
          ))}
        </div>
        <div className="border border-gray-700 border-dashed mt-6 mb-6"></div>
        <div className="flex gap-14 mb-8">
          <div>
            <p className="text-amber-100">Number of Pages:</p>
            <p className="text-amber-100">Publisher:</p>
            <p className="text-amber-100">Year of Publishing:</p>
            <p className="text-amber-100">Rating:</p>
          </div>
          <div>
            <p>{totalPages}</p>
            <p>{publisher} </p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div><ToastContainer />
        <button onClick={()=>handleMarkAsRead(bookNumId)} className="btn btn-outline mr-4">Mark as Read</button> 
        <button className="btn btn-active btn-info">Add to Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
