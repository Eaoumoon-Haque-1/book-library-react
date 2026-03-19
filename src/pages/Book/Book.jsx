import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, image, category, rating,bookId, yearOfPublishing, tags } =
    book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100 w-96 shadow p-6 border border-amber-100 rounded-2xl">
      <figure className="p-6 bg-[#f3f3f3FF] rounded-2xl">
        <img className="max-w-[125px] max-h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="mr-2">
                {tags.map((tag) => <span className="mr-3 text-[#23be0aFF]">{tag}</span>)}
          </span>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
        <p className="font-bold text-2xl">{bookName}</p>
        <p>By: {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div></Link>
  );
};

export default Book;
