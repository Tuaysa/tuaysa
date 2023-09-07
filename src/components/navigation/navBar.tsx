import React, { useContext } from "react";
import { TuaysaIcon } from "../icons";
import SearchBar from "../search/searchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Oxygen_Mono } from "next/font/google";
import SignInButton from "./signInButton";
import Link from "next/link";
import { Divider, IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";
import { AuthContext } from "@/contexts/authContext";
import UserMenu from "./userMenu";
import { useRouter } from "next/navigation";

const oxygen = Oxygen_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function NavBar() {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div
      className={`flex flex-col h-auto pt-4 px-11 w-full gap-y-4 max-w-[1380px] items-center`}
    >
      <div
        className={`h-auto w-full flex -mt-64 items-start justify-between font-mono gap-4`}
      >
        <div
          className="flex-1 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <TuaysaIcon className="h-12 w-auto" />
        </div>
        <div className="flex-auto w-full">
          <SearchBar />
        </div>
        <div className={`flex flex-row flex-1 ${loggedIn ? "gap-2" : "gap-3"}`}>
          <div className="h-12 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
            <IconButton>
              <FavoriteBorderIcon className="h-6 w-6 text-[var(--mainBlue)]" />
            </IconButton>
          </div>
          <div className="h-12 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
            <IconButton>
              <StorefrontIcon className="h-6 w-6 text-[var(--mainBlue)]" />
            </IconButton>
          </div>
          <div className="h-12 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
            <IconButton>
              <ShoppingCartOutlinedIcon className="h-6 w-6 text-[var(--mainBlue)]" />
            </IconButton>
          </div>
          <div className="h-12 flex items-center justify-center flex-1">
            {loggedIn ? <UserMenu /> : <SignInButton />}
          </div>
        </div>
      </div>
      <div
        className={`h-auto w-full flex items-start justify-between font-mono gap-x-4`}
      >
        {NavItems.map((item) => {
          return (
            <Link
              key={item.name}
              className=" w-auto text-[0.75rem] text-[var(--mainBlue)] text-center"
              href={""}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Divider sx={{ bgcolor: "rgba(202, 196, 208, 0.2)", width: "100vw" }} />
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
