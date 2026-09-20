"use client";
import Bookcard from '@/components/shared/Bookcard';
import { Bookcontext } from '@/context/bookcontext';
import React, { useContext } from 'react';

const Readlistpage = () => {
    const {readBooks,wishlist}=useContext(Bookcontext)
    return (
        <div className='container mx-auto py-[20px]' >
            <h2 className='bg-amber-100 
            rounded-3xl py-16 
        font-bold text-4xl text-center'>Books</h2>
      {/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" 
  aria-label={`Read Books (${readBooks.length})` }/>
 <div className="tab-content border-base-300 bg-base-100 p-10">
  {readBooks.length > 0 ? (
    readBooks.map((book) => {
      return <Bookcard key={book.bookId} book={book} />;
    })
  ) : (
    <p className="text-center text-2xl 
    py-4 bg-amber-50">
      No read books found!
    </p>
  )}
</div>

  <input type="radio" name="my_tabs_2" className="tab"
   aria-label={`Wish Books (${readBooks.length})`}/>
  <div className="tab-content border-base-300 bg-base-100
   p-10">
    { readBooks.length>0?readBooks.map(book=>{
        return <Bookcard key={book.bookId} book={book}></Bookcard>
    }):( <p className="text-center  py-4 text-2xl bg-amber-50">
      No wish books found!
    </p>)
    }
   </div>

</div>
      
      
      
      
        </div>
    );
};

export default Readlistpage;