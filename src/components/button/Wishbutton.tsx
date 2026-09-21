"use client";
import { toast } from "react-toastify";
import { Bookcontext } from '@/context/bookcontext';
import React, { useContext } from 'react';

const Wishbutton = ({book}) => {
    const {wishlist,setwishlist}=useContext(Bookcontext);
    return (
        <div>
        <button className="btn btn-success
         px-8" onClick={()=>{
           const alreadyAdded = wishlist.some(
            (item) => item.bookId === book.bookId
          );

          if (!alreadyAdded) {
            setwishlist([...wishlist, book]);
            toast.success("Book added to wish list!");
          } else {
            toast.warning("Book already in wish list!");
          }
         }}>
           Add to Wish
              </button>
        </div>
    );
};

export default Wishbutton;