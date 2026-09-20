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
            {setreadBooks([...readBooks,book])
                 toast.success("Book added to read list!");
         } }>
                Read
              </button>
        </div>
    );
};

export default Readbutton;