import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";
import SignInPopup from "../auth/signInPopup";

export default function SignInButton() {
  const { signInPopupVisible } = useContext(AuthContext);
  const { setSignInPopupVisible } = useContext(AuthContext);
  return (
    <>
      {signInPopupVisible && <SignInPopup />}
      <div
        onClick={() => {
          setSignInPopupVisible(true);
        }}
        className=" items-center justify-center text-center text-[var(--mainBlue)] px-2 py-1 border-2 border-[var(--mainBlue)] rounded-full text-base hover:bg-[var(--mainBlue)] hover:text-[var(--transCream)] duration-300 hover:text-opacity-5 cursor-pointer hover:-translate-y-1"
      >
        Sign In
      </div>
    </>
  );
}
