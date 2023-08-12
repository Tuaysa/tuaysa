import React from "react";
import { Inter } from "next/font/google";
import SearchIcon from "@mui/icons-material/Search";


const inter = Inter({ subsets: ["latin"] });

export default function SearchBar() {
  return (
    <div className=" relative">
      <SearchIcon className="absolute h-8 w-8 top-3 bottom-3 left-4 text-[var(--grey)]" />

      <input
        type="text"
        placeholder="Search for anything"
        className={`flex items-center pl-16 h-14 w-[60rem] rounded-full bg-[var(--cream)] ${inter.className} text-[var(--grey)] placeholder:text-[var(--grey)] text-lg font-light`}
      />
      
    </div>
  );
}
