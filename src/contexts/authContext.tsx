"use client"
import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";

interface AuthContextType {
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    hasAccount: boolean;
    setHasAccount: React.Dispatch<React.SetStateAction<boolean>>;
    signInPopupVisible: boolean;
    setSignInPopupVisible: React.Dispatch<React.SetStateAction<boolean>>;
    address: string;
    setAddress: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextType>({
    loggedIn: false,
    setLoggedIn: ()=>{},
    hasAccount: true,
    setHasAccount: ()=>{},
    signInPopupVisible: false,
    setSignInPopupVisible: ()=>{},
    address: '',
    setAddress: ()=>{},
})

export default function AuthContextProvider({children}:{children: React.ReactNode}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [hasAccount, setHasAccount] = useState(true);
    const [address, setAddress] = useState('');
    const [signInPopupVisible, setSignInPopupVisible] = useState(false);

    useEffect(()=> {
        axios.get('api/checkToken').then(res=> {
            console.log(res.data.data.email)
            console.log('haha')
            if (res.data.authenticated) {
                setLoggedIn(true);
                setAddress(res.data.data.email);
                console.log(address);
            }
        }).catch(error=>{
            console.log('error checking user authentification', error);
            setLoggedIn(false);
        })
    }, [])


    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn, hasAccount, setHasAccount, signInPopupVisible, setSignInPopupVisible, address, setAddress}}>
            {children}
        </AuthContext.Provider>
    )
}