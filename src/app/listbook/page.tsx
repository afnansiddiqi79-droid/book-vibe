import React from 'react';
import Bookcard from "@/components/shared/Bookcard";
const getdata = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch books data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error fetching books:", error);
  }
};
const listbookpage = async () => {
  const booksdata = await getdata();

  return (
    <section className="w-[90%] mx-auto py-10">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          All Books
        </h2>

        <p className="mt-2 text-base-content/60">
          Discover from all Books
        </p>
      </div>

      {/* Books */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksdata.map((book) => (
          <Bookcard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default listbookpage;

