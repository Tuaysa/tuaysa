"use client";
import React, { useContext, useState } from "react";
import { Inter } from "next/font/google";
import { AuthContext } from "@/contexts/authContext";
import { Divider, IconButton } from "@mui/material";

const inter = Inter({
  subsets: ["latin"],
});

export default function AccountSettings() {
  const [category, setCategory] = useState("Login & Security");
  const {address}= useContext(AuthContext);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between -mt-16 ${inter.className} text-base `}
    >
      <div className="w-[50rem] flex-col flex items-start justify-start gap-y-4">
        <div className="flex items-center justify-between w-full px-4">
          {Settings.map((item) => {
            return (
              <div
                key={item.name}
                className={`px-4 py-1 hover:bg-[var(--darkGrey)] duration-300 cursor-pointer rounded-xl hover:text-[var(--cream)] text-base font-normal ${
                  category === item.name
                    ? "bg-[var(--darkGrey)] text-[var(--cream)]"
                    : "text-[var(--darkGrey)]"
                }`}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col border-2 border-solid border-[var(--transGrey)] h-auto py-6 w-full rounded-xl gap-y-6 text-[var(--darkGrey)]">
          <div className="flex w-full h-auto pb-6 border-b-[1px] border-b-[var(--transGrey)] px-8 justify-between items-center">
            <div className="flex-col">
              <div className=" font-semibold">Name:</div>
              <div>Regina Phalange</div>
            </div>
            <div className="px-8 py-1 border-[var(--transGrey)] border-[1px] rounded-xl shadow-sm hover:bg-[var(--vtransGrey)] transition-300 cursor-pointer">Edit</div>
          </div>
          <div className="flex w-full h-auto pb-6 border-b-[1px] border-b-[var(--transGrey)] px-8 justify-between items-center">
            <div className="flex-col">
              <div className=" font-semibold">Username:</div>
              <div>regina123</div>
            </div>
            <div className="px-8 py-1 border-[var(--transGrey)] border-[1px] rounded-xl shadow-sm hover:bg-[var(--vtransGrey)] transition-300 cursor-pointer">Edit</div>
          </div>
          <div className="flex w-full h-auto pb-6 border-b-[1px] border-b-[var(--transGrey)] px-8 justify-between items-center">
            <div className="flex-col">
              <div className=" font-semibold">Email:</div>
              <div>{address}</div>
            </div>
            <div className="px-8 py-1 border-[var(--transGrey)] border-[1px] rounded-xl shadow-sm hover:bg-[var(--vtransGrey)] transition-300 cursor-pointer">Edit</div>
          </div>
          <div className="flex w-full h-auto pb-6 border-b-[1px] border-b-[var(--transGrey)] px-8 justify-between items-center">
            <div className="flex-col">
              <div className=" font-semibold">Password:</div>
              <div>********</div>
            </div>
            <div className="px-8 py-1 border-[var(--transGrey)] border-[1px] rounded-xl shadow-sm hover:bg-[var(--vtransGrey)] transition-300 cursor-pointer">Edit</div>
          </div>
          <div className="flex w-full h-auto px-8 justify-between items-center gap-x-8">
            <div className="flex-col">
              <div className=" font-semibold">Mobile Number:</div>
              <div>Easily recover passwords and receive security notifications with this mobile number</div>
            </div>
            <div className="px-8 py-1 border-[var(--transGrey)] border-[1px] rounded-xl shadow-sm hover:bg-[var(--vtransGrey)] transition-300 cursor-pointer">Edit</div>
          </div>
        </div>
        <div className="flex items-center justify-start w-full px-4">
          <div className="px-4 py-1 bg-[var(--mainBlue)] duration-300 cursor-pointer rounded-xl text-[var(--cream)] text-base font-normal shadow-sm hover:bg-[var(--shadowBlue)]">Done</div>
        </div>
      </div>
    </main>
  );
}

type SettingsType = {
  name: string;
};

const Settings: SettingsType[] = [
  {
    name: "Login & Security",
  },
  {
    name: "Edit Profile",
  },
  {
    name: "Shop Details",
  },
  {
    name: "Addresses",
  },
  {
    name: "Preferences",
  },
];
