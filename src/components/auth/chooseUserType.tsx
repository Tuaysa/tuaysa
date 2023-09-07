import { motion } from "framer-motion";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import axios from "axios";
import toast from "react-hot-toast";
import { Oxygen_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const oxygen = Oxygen_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function ChooseUserType() {
  const [shopName, setShopName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="lg:w-[67rem] md:w-2/3 md:h-auto bg-[var(--cream)] rounded-[2.6rem] boxshadow flex items-center justify-center overflow-hidden"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
    >
      <div className="w-1/2 flex flex-col items-center justify-center py-16 px-9">
        <div className={`${oxygen.className} text-[var(--mainBlue)] text-xl mb-6`}>
          Shop
        </div>
        <form
          className={`flex flex-col items-start justify-center ${inter.className} text-sm text-[var(--grey)] w-80 gap-y-2`}
        >
          <div>Choose your shop name!</div>
          <input
            required
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="rounded-full px-8 py-2 text-sm bg-[var(--transGrey)] w-full border-[2.5px] border-[var(--grey)] flex justify-start items-center  placeholder:text-[var(--cream)] text-[var(--cream)] focus:rounded-full"
            placeholder="Shop Name"
          ></input>
          <button
            type="submit"
            className="duration-300 hover:text-[var(--cream)] hover:bg-[var(--mainBlue)] rounded-full px-5 py-2 cursor-pointer text-sm text-[var(--mainBlue)] border-2 border-[var(--pink)] w-full flex justify-center items-center mt-2"
          >
            Create your shop
          </button>
        </form>
        <div className={`w-80 h-10 -mb-10 mt-14`}>
          
        </div>
      </div>


      <div className="w-1/2 border-l-[1px] border-l-[var(--transGrey)] border-solid flex flex-col items-center justify-center py-16 nextStep">
        <div className={`${oxygen.className} text-[var(--mainBlue)] text-xl mb-6`}>
          Shopper
        </div>
        <form
          className={`flex flex-col items-start justify-center ${inter.className} text-sm text-[var(--grey)] w-80 gap-y-2`}
        >
          <div>Choose your username</div>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-full px-8 py-2 text-sm bg-[var(--transGrey)] w-full border-[2.5px] border-[var(--grey)] flex justify-start items-center  placeholder:text-[var(--cream)] text-[var(--cream)] focus:rounded-full"
            placeholder="Username"
          ></input>
          <button
            type="submit"
            className="duration-300 hover:text-[var(--cream)] hover:bg-[var(--mainBlue)] rounded-full px-5 py-2 cursor-pointer text-sm text-[var(--mainBlue)] border-2 border-[var(--pink)] w-full flex justify-center items-center mt-2"
          >
            Create your shop
          </button>
        </form>
        <div className={`text-center text-[var(--grey)] text-sm w-80 ${inter.className} -mb-10 mt-14`}>
          Don&apos;t worry! Even if you sign up as a shopper, you can always
          create a shop later
        </div>
      </div>
    </motion.div>
  );
}
