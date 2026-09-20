import React from 'react';
import Bookcard from '../shared/Bookcard';
const getdata=async()=>{
    const res= await fetch("http://localhost:3000/booksData.json")
    const data=await res.json()
    return data
}
const Book = async () => {
  const booksdata = await getdata();

  return (
    <section className="w-[90%] mx-auto py-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Explore Books
        </h2>

        <p className="mt-2 text-base-content/60">
          Discover your next favorite book
        </p>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksdata.slice(0,6).map((book) => (
          <Bookcard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Book;


