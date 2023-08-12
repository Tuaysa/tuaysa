import { AuthContext } from "@/contexts/authContext";
import React from "react";
import { useContext } from "react";
import { motion } from "framer-motion";
import { TuaysaIcon } from "../icons";

export default function SignInPopup() {
  const { setSignInPopupVisible } = useContext(AuthContext);
  const { signInPopupVisible } = useContext(AuthContext);

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
        
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="w-full h-full lg:w-2/3 md:w-2/3 md:h-auto bg-[var(--cream)] rounded-2xl boxshadow flex md:z-50 items-center justify-center"
          >
            <div className="w-1/2 h-full village">

            </div>
            <TuaysaIcon className="h-auto w-44"/>
          </motion.div>
        
      </motion.div>
    </div>
  );
}
