import React from "react";
import { TuaysaIcon } from "../icons";
import SearchBar from "../search/searchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Oxygen_Mono } from "next/font/google";
import SignInButton from "./signInButton";
import Link from "next/link";
import { Divider } from "@mui/material";
import { blue } from "@mui/material/colors";

const oxygen = Oxygen_Mono({
    weight: "400",
    subsets: ["latin"],
});

export default function NavBar() {
    return (
        <div className={`flex flex-col h-auto pt-6 px-11 w-full gap-y-6`}>
            <div
                className={`h-auto w-full flex -mt-64 items-start justify-between font-mono gap-4`}
            >
                <div className="flex-1">
                    <TuaysaIcon />
                </div>
                <div className="flex-auto w-full">
                    <SearchBar />
                </div>
                <div className="flex flex-row gap-2 flex-1">
                    <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
                        <FavoriteBorderIcon className="h-12 w-8 text-[var(--cream)]" />
                    </div>
                    <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
                        <StorefrontIcon className="h-8 w-8 text-[var(--cream)]" />
                    </div>
                    <div className="h-14 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
                        <ShoppingCartOutlinedIcon className="h-8 w-8 text-[var(--cream)]" />
                    </div>
                </div>
                <div className="h-14 flex items-center justify-center flex-1">
                    <SignInButton />
                </div>
            </div>
            <div
                className={`h-auto w-full flex items-start justify-between font-mono`}
            >
                {NavItems.map((item) => {
                    return (
                        <Link
                            key={item.name}
                            className=" max-w-[6rem] w-auto text-[0.875rem] text-[var(--mainBlue)] text-center"
                            href={""}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>
            {/* <Divider sx={{ bgcolor: "#36AFC4" }} /> */}
        </div>
    );
}

const NavItems = [
    { name: "Home and Living", href: "/" },
    { name: "Jewellery & Accessories", href: "/" },
    { name: "Clothing & Shoes", href: "/" },
    { name: "Art & Illustration", href: "/" },
    { name: "Beauty and Bath", href: "/" },
    { name: "Gifts & Gift cards", href: "/" },
    { name: "Wedding & Party", href: "/" },
    { name: "Toys & Games", href: "/" },
];
