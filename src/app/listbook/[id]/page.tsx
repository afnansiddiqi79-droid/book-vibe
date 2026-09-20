import Readbutton from "@/components/button/Readbutton";
import Wishbutton from "@/components/button/Wishbutton";
import React from "react";

const getdata = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const Bookdetailspage = async ({ params }) => {
  const { id } = await params;

  const booksdata = await getdata();

  const r = booksdata.find(
  (item) => item.bookId === Number(id)
);

if (!r) {
  return <h2>Book not found</h2>;
}

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
          
          {/* Book Image */}
          <figure className="lg:w-2/5 bg-base-200 p-8">
            <img
              src={r.image}
              alt={r.bookName}
              className="w-full max-h-[500px] object-contain rounded-xl"
            />
          </figure>

          {/* Book Information */}
          <div className="card-body lg:w-3/5 p-6 md:p-8">

            {/* Category + Rating */}
            <div className="flex items-center justify-between">
              <span className="badge badge-success">
                {r.category}
              </span>

              <span className="font-semibold">
                ⭐ {r.rating}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mt-3">
              {r.bookName}
            </h1>

            {/* Author */}
            <p className="text-lg text-base-content/60">
              By {r.author}
            </p>

            {/* Review */}
            <p className="mt-4 leading-7 text-base-content/70">
              {r.review}
            </p>

            {/* Book Info */}
            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/50">
                  Total Pages
                </p>
                <p className="font-bold text-lg">
                  {r.totalPages}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/50">
                  Published
                </p>
                <p className="font-bold text-lg">
                  {r.yearOfPublishing}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/50">
                  Publisher
                </p>
                <p className="font-bold">
                  {r.publisher}
                </p>
              </div>

              <div className="bg-base-200 rounded-xl p-4">
                <p className="text-sm text-base-content/50">
                  Category
                </p>
                <p className="font-bold">
                  {r.category}
                </p>
              </div>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {r.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-outline"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="card-actions justify-end mt-6">
               <Readbutton book={r}></Readbutton>
            <Wishbutton book={r}></Wishbutton>
             
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetailspage;