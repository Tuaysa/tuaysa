"use client";
import { AuthContext } from "@/contexts/authContext";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { TuaysaIcon } from "../icons";
import { Google } from "@mui/icons-material";
import ChangeSignInButton from "./changeSignIn";
import { Inter } from "next/font/google";
import axios from "axios";
import toast from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function SignUpPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setHasAccount } = useContext(AuthContext);
  const { setNextStep } = useContext(AuthContext);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    axios
      .post(
        "api/register",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // toast.success("Registered Successfully");
        setNextStep(true);
        // setHasAccount(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error("Error Occurred: " + error.response.data.message);
      });
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="lg:w-[67rem] md:w-2/3 md:h-auto bg-[var(--cream)] rounded-[2.6rem] boxshadow flex items-center justify-center overflow-hidden"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.7, opacity: 0 }}
    >
      <div
        className="w-1/2 h-[40rem]  bg-cover bg-center rounded-tl-[2.6rem] rounded-bl-[2.6rem] relative p-0"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/reannab16/tuaysa/main/public/village.png)",
        }}
      >
        <div className="m-0 absolute top-0 bottom-0 left-0 -right-[2px] z-20 bg-gradient-to-r from-transparent from-60% to-[var(--cream)] to-100%"></div>
      </div>

      <div className="flex-col flex items-center justify-center h-full w-1/2 py-20">
        <div className="h-auto w-auto relative">
          <TuaysaIcon className="h-auto w-44 mb-12" />
          <div className="absolute text-[var(--mainBlue)] top-[3.75rem] w-20 -right-10 font-mono">
            Join Our Community
          </div>
        </div>
        <form
          onSubmit={handleSignUp}
          className={`flex flex-col w-full h-auto items-center justify-center gap-y-4 text-[var(--cream)] ${inter.className}`}
        >
          <div className="cursor-pointer rounded-full px-5 py-[0.65625rem] text-base bg-[var(--grey)] w-80 flex justify-center items-center">
            <Google />
            <div className="pl-2">Continue With Google</div>
          </div>
          <div className="text-base continueline relative text-[var(--grey)]">
            or continue with email
          </div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full px-8 py-2 text-base bg-[var(--transGrey)] w-80 border-[2.5px] border-[var(--grey)] flex justify-start items-center  placeholder:text-[var(--lightest-grey)] text-[var(--pink)] focus:rounded-full"
            placeholder="Email Address"
          ></input>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full px-8 py-2 text-base bg-[var(--transGrey)] w-80 border-[2.5px] border-[var(--grey)] flex justify-start items-center  placeholder:text-[var(--lightest-grey)] text-[var(--pink)] focus:rounded-full"
            type="password"
            placeholder="Create a password"
          ></input>
          <button
            type="submit"
            className="duration-300 hover:text-[var(--cream)] hover:bg-[var(--mainBlue)] rounded-full px-5 py-2 cursor-pointer text-base text-[var(--mainBlue)] border-2 border-[var(--pink)] w-80 flex justify-center items-center"
          >
            Continue
          </button>
          <ChangeSignInButton />
        </form>
      </div>
    </motion.div>
  );
}
