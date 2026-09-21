"use client";

import React, { createContext, useState } from "react";
import type { IBook } from "@/components/types/booktype";

interface BookContextType {
  readBooks: IBook[];
  setreadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setwishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const Bookcontext = createContext<BookContextType>(
  {} as BookContextType
);

const Bookprovider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setreadBooks] = useState<IBook[]>([]);
  const [wishlist, setwishlist] = useState<IBook[]>([]);

  const sharedata = {
    readBooks,
    setreadBooks,
    wishlist,
    setwishlist,
  };

  return (
    <div>
      <Bookcontext.Provider value={sharedata}>
        {children}
      </Bookcontext.Provider>
    </div>
  );
};

export default Bookprovider;