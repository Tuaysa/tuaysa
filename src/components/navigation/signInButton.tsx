import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";
import SignInPopup from "../auth/signInPopup";

export default function SignInButton() {
  const { signInPopupVisible } = useContext(AuthContext);
  const { setSignInPopupVisible } = useContext(AuthContext);
  const {setHasAccount} = useContext(AuthContext);
  return (
    <>
      {signInPopupVisible && <SignInPopup />}
      <button
        onClick={() => {
          setSignInPopupVisible(true);
          setHasAccount(true);
        }}
        className=" items-center justify-center text-center text-[var(--mainBlue)] w-32 px-2 h-12 border-2 border-[var(--mainBlue)] rounded-full text-base hover:bg-[var(--mainBlue)] hover:text-[var(--transCream)] duration-300 hover:text-opacity-5 cursor-pointer hover:-translate-y-1"
      >
        Sign In
      </button>
    </>
  );
}
