"use client"
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import SignUpPopup from "./signUpPopup";
import LogInPopup from "./logInPopup";

const inter = Inter({ subsets: ["latin"] });

export default function SignInPopup() {
  const { setSignInPopupVisible } = useContext(AuthContext);
  const { hasAccount } = useContext(AuthContext);
  

  const closePopup = () => {
    setSignInPopupVisible(false);
  };

  

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-40"
      style={{ backdropFilter: "blur(1px)" }}
    >
      <motion.div
        onClick={() => {
          closePopup();
        }}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {hasAccount? <LogInPopup/>:<SignUpPopup/>}
      </motion.div>
    </div>
  );
}
