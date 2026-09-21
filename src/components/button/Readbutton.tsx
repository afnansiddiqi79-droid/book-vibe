"use client";
import { toast } from "react-toastify";
import { Bookcontext } from '@/context/bookcontext';
import React, { useContext } from 'react';

const Readbutton = ({book}) => {
    const {readBooks,setreadBooks}=useContext(Bookcontext);
    return (
        <div>
        <button className="btn btn-success
         px-8" onClick={()=>
            { const alreadyadded=readBooks.some(item=>item.bookId===book.bookId);
                if(!alreadyadded){
                setreadBooks([...readBooks,book])
                 toast.success("Book added to read list!");}
                 else{
                    toast.warning("Book already in read list!");
                 }
         } }>
                Read
              </button>
        </div>
    );
};

export default Readbutton;