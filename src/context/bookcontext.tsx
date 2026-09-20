"use client";

import React, { useState } from 'react';

import { createContext } from 'react';
  export const Bookcontext=createContext({});
const Bookprovider = ({children}) => {
    const [readBooks,setreadBooks]=useState([])
    const [wishlist,setwishlist]=useState([])
    const sharedata={
        readBooks,
        setreadBooks,
        wishlist, 
        setwishlist
    }
    return (
        <div>
      <Bookcontext.Provider value={sharedata}>{children}</Bookcontext.Provider>
        </div>
    );
};

export default Bookprovider;