"use client"
import React from "react";
import { createContext, useState } from "react";

interface AuthContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    hasAccount: boolean;
    setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
    signInPopupVisible: boolean;
    setSignInPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    setLoggedIn: ()=>{},
    hasAccount: true,
    setHasAccount: ()=>{},
    signInPopupVisible: false,
    setSignInPopupVisible: ()=>{},
})

export default function AuthContextProvider({children}:{children: React.ReactNode}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [hasAccount, setHasAccount] = useState(true);
    const [signInPopupVisible, setSignInPopupVisible] = useState(false);

    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn, hasAccount, setHasAccount, signInPopupVisible, setSignInPopupVisible}}>
            {children}
        </AuthContext.Provider>
    )
}