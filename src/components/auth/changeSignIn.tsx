import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";

export default function ChangeSignInButton() {
  const { hasAccount } = useContext(AuthContext);
  const { setHasAccount } = useContext(AuthContext);

  return (
    <>
      {hasAccount ? (
        <div className="text-base">
          <span className="opacity-60 text-[var(--grey)] duration-300">Don&apos;t have an account? </span>
          <span
            className="cursor-pointer text-[var(--mainBlue)] underline-offset-2 underline opacity-60 hover:opacity-100 hover:-translate-y-2 duration-300"
            onClick={() => {
              setHasAccount(false);
            }}
          >
            Sign up
          </span>
        </div>
      ) : (
        <div className="text-base">
          <span className="opacity-60 text-[var(--grey)] duration-300">Already have an account? </span>
          <span
            className="cursor-pointer text-[var(--mainBlue)] underline-offset-2 underline opacity-60 hover:opacity-100 hover:-translate-y-2 duration-300"
            onClick={() => {
              setHasAccount(true);
            }}
          >
            Log in
          </span>
        </div>
      )}
    </>
  );
}
