"use client";
import React, { useContext } from "react";
import { Inter } from "next/font/google";
import { AuthContext } from "@/contexts/authContext";

const inter = Inter({
  weight: "300",
  subsets: ["latin"],
});

export default function HeroSection() {
  const { setSignInPopupVisible } = useContext(AuthContext);
  const { setHasAccount } = useContext(AuthContext);

  return (
    <div className={`w-full h-auto flex items-center justify-center font-mono`}>
      <div className="w-[29rem] h-[29rem] bg-[url(https://raw.githubusercontent.com/Tuaysa/tuaysa/main/public/cottage.png)] bg-cover bg-center"></div>
      <div className="flex flex-col w-96 items-center justify-center">
        <div
          className={`text-[var(--mainBlue)] font-mono w-96 text-center text-[2rem]`}
        >
          Discover handmade treasures from talented sellers
        </div>
        <div
          className={`text-[var(--cream)] bg-[var(--grey)] rounded-full flex items-center justify-center py-2 mt-9 w-80 text-base font-mono cursor-pointer hover:-translate-y-2 duration-300 hover:bg-[var(--mainBlue)]`}
          onClick={() => {
            setSignInPopupVisible(true);
            setHasAccount(false);
          }}
        >
          Join Our Community
        </div>
      </div>
    </div>
  );
}
