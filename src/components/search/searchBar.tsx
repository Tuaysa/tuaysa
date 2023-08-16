import React from "react";
import { Inter } from "next/font/google";
import { Oxygen_Mono } from "next/font/google";
import SearchIcon from "@mui/icons-material/Search";

const oxygen = Oxygen_Mono({
  weight: "400",
  subsets: ["latin"],
});


const inter = Inter({ subsets: ["latin"] });

export default function SearchBar() {
  return (
    <div className="relative flex align-middle">
      <SearchIcon className="absolute w-8 left-4 text-[var(--grey)] h-full" />

      <input
        type="text"
        placeholder="Search for anything"
        className={`flex items-center pl-16 h-12 w-full rounded-full bg-[var(--cream)] ${inter.className} text-[var(--grey)] placeholder:text-[var(--grey)] text-lg font-light`}
      />
      
    </div>
  );
}
