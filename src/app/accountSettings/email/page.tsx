"use client"
import React, { useContext, useState } from "react";
import { Inter } from "next/font/google";
import { AuthContext } from "@/contexts/authContext";
import { Divider, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import axios from "axios";

const inter = Inter({
  subsets: ["latin"],
});

export default function AccountSettings() {
    const {address}= useContext(AuthContext);
    const [email, setEmail] = useState("");

    const handleChange = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        // axios
        //   .post(
        //     "api/login",
        //     { email, password },
        //     {
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //     }
        //   )
        //   .then((res) => {
        //     console.log(res);
        //     toast.success("Logged In Successfully");
        //     setSignInPopupVisible(false);
        //     setLoggedIn(true);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     toast.error("Error Occurred: " + error.response.data.message);
        //   });
      };
      
    return(
        <main
      className={`flex min-h-screen flex-col items-center justify-between -mt-16 ${inter.className} text-base `}
    >
         <form onSubmit={handleChange} className="flex flex-col border-2 border-solid border-[var(--transGrey)] h-auto py-6 w-96 rounded-xl gap-y-6 text-[var(--darkGrey)] px-8">
            <div className="text-3xl font-medium">Change your email address</div>
            <div>Current email address: {address}</div>
            <div>Enter the new email address you would like to associate with your account below. We will send a One Time Password (OTP) to that address.</div>
            <div className="font-medium -mb-4">New email address:</div>
            <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-4 py-2 text-base bg-[var(--vtransGrey)] w-80 border-[1px] border-[var(--grey)] flex justify-start items-center  placeholder:text-[var(--lightest-grey)] text-[var(--pink)] focus:rounded-full m-[1px] focus:border-2 focus:m-0"
            placeholder="email address"
          ></input>
          <button
            type="submit"
            className="duration-300 text-[var(--cream)] bg-[var(--mainBlue)] rounded-full px-5 py-2 cursor-pointer text-base w-80 flex justify-center items-center shadow-sm hover:-translate-y-1"
          >
            Continue
          </button>

         </form>
    </main>
    )
}