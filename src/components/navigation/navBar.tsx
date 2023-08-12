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
    <div className={`flex flex-col h-auto pt-6 px-6 w-full gap-y-6`}>
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
          <SignInButton />
        </div>
      </div>
      <div
        className={`h-auto w-full flex items-start justify-between ${oxygen.className}`}
      >
        {NavItems.map((item) => {
          return <div key={item.name} className=" max-w-[7rem] text-[0.875rem] text-[var(--mainBlue)]">{item.name}</div>;
        })}
      </div>
    </div>
  );
}

const NavItems = [
  { name: "Home and Living", href: "/" },
  { name: "Jewellery & Accessories", href: "/" },
  { name: "Clothing & Shoes", href: "/" },
  { name: "Art & Illustration", href: "/" },
  { name: "Beauty and Bath", href: "/" },
  { name: "Gifts", href: "/" },
  { name: "Wedding & Party", href: "/" },
  { name: "Toys & Games", href: "/" },
];
