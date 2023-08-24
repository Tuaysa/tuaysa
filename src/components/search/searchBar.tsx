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
    <div className="relative flex align-middle text-base">
      <SearchIcon className="text-[var(--grey)] h-6 top-[0.625rem]" sx={{
        position: "absolute",
        left: "0.7rem",
        height: "100%"
      }} />

      <input
        type="text"
        placeholder="Search for anything"
        className={`flex items-center pl-11 h-11 border-2 border-[var(--grey)] w-full rounded-full bg-[var(--cream)] ${inter.className} text-[var(--grey)] placeholder:text-[var(--transGrey)] text-base font-light`}
      />
      
    </div>
  );
}
