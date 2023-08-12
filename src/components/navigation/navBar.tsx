import React from "react";
import { TuaysaIcon } from "../icons";
import SearchBar from "../search/searchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Oxygen_Mono } from "next/font/google";
import SignInButton from "./signInButton";

const oxygen = Oxygen_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  return (
    <div className={`flex flex-col h-auto pt-6 px-6 w-full`}>
      <div
        className={`h-auto w-full flex -mt-60 items-start justify-between ${oxygen.className}`}
      >
        <TuaysaIcon />
        <SearchBar />
        <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
          <FavoriteBorderIcon className="h-8 w-8 text-[var(--cream)]" />
        </div>
        <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
          <StorefrontIcon className="h-8 w-8 text-[var(--cream)]" />
        </div>
        <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
          <ShoppingCartOutlinedIcon className="h-8 w-8 text-[var(--cream)]" />
        </div>
        <div className="h-14 flex items-center justify-center">
          <SignInButton/>
        </div>
      </div>
    </div>
  );
}
