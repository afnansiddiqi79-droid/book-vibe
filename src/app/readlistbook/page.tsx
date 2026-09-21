"use client";

import React, { useContext, useState } from "react";
import Bookcard from "@/components/shared/Bookcard";
import { Bookcontext } from "@/context/bookcontext";

const Readlistpage = () => {
  const { readBooks, wishlist } = useContext(Bookcontext);

  const [sortby, setsortby] = useState("rating");

  // Read books sort
  const sortedReadBooks = [...readBooks];

  if (sortby === "rating") {
    sortedReadBooks.sort((a, b) => b.rating - a.rating);
  }

  if (sortby === "pages") {
    sortedReadBooks.sort((a, b) => b.totalPages - a.totalPages);
  }

  if (sortby === "year") {
    sortedReadBooks.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
  }

  // Wish books sort
  const sortedWishBooks = [...wishlist];

  if (sortby === "rating") {
    sortedWishBooks.sort((a, b) => b.rating - a.rating);
  }

  if (sortby === "pages") {
    sortedWishBooks.sort((a, b) => b.totalPages - a.totalPages);
  }

  if (sortby === "year") {
    sortedWishBooks.sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
  }

  return (
    <div className="container mx-auto py-[20px]">
      <h2 className="bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Books
      </h2>

      {/* Sort */}
      <div className="text-center">
        <select
          value={sortby}
          onChange={(e) => setsortby(e.target.value)}
          className="select select-success my-9"
        >
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published year</option>
        </select>
      </div>

      <div className="tabs tabs-border">
        {/* Read Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book) => {
              return <Bookcard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-2xl py-4 bg-amber-50">
              No read books found!
            </p>
          )}
        </div>

        {/* Wish Books */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Wish Books (${wishlist.length})`}
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {sortedWishBooks.length > 0 ? (
            sortedWishBooks.map((book) => {
              return <Bookcard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center py-4 text-2xl bg-amber-50">
              No wish books found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Readlistpage;