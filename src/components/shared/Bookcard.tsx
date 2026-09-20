import type { IBook } from "@/components/types/booktype";
import Link from "next/link";

const Bookcard = ({ book }: { book: IBook }) => {
  return (


    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
      {/* Image */}
      <figure className="h-64 bg-base-200 p-4">
        <img
          src={book.image}
          alt={book.bookName}
          className="h-full w-full object-contain"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5">
        <h2 className="card-title">
          {book.bookName}
        </h2>

        <p className="text-sm text-base-content/60">
          By {book.author}
        </p>

        <div className="flex items-center justify-between">
          <span className="badge badge-outline">
            {book.category}
          </span>

          <span className="font-medium">
            ⭐ {book.rating}
          </span>
        </div>

        <div className="card-actions justify-end mt-2">
          <Link href={`/listbook/${book.bookId}`}>
          <button className="btn btn-success btn-sm">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;