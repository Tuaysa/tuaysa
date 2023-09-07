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
    nextStep: boolean;
    setNextStep: React.Dispatch<React.SetStateAction<boolean>>;
    signUpEmail: string;
    setSignUpEmail: React.Dispatch<React.SetStateAction<string>>;
    signUpPass: string;
    setSignUpPass: React.Dispatch<React.SetStateAction<string>>;
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
    nextStep: false,
    setNextStep: ()=>{},
    signUpEmail: '',
    setSignUpEmail: ()=>{},
    signUpPass: '',
    setSignUpPass: ()=>{},
})

export default function AuthContextProvider({children}:{children: React.ReactNode}) {

    const [loggedIn, setLoggedIn] = useState(false);
    const [hasAccount, setHasAccount] = useState(true);
    const [address, setAddress] = useState('');
    const [signInPopupVisible, setSignInPopupVisible] = useState(false);
    const [nextStep, setNextStep] = useState(true);
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPass, setSignUpPass] = useState('');

    useEffect(()=> {
        axios.get('api/checkToken').then(res=> {
            console.log(res.data)
            console.log('haha')
            if (res.data.authenticated && res.data.data.email) {
                setLoggedIn(true);
                const email = res.data.data.email
                if (email) {
                    setAddress(res.data.data.email);
                    console.log(address);
                }
                
            }
        }).catch(error=>{
            console.log('error checking user authentification', error);
            setLoggedIn(false);
        })
    }, [])


    return(
        <AuthContext.Provider value={{loggedIn, setLoggedIn, hasAccount, setHasAccount, signInPopupVisible, setSignInPopupVisible, address, setAddress, nextStep, setNextStep, signUpEmail, setSignUpEmail, signUpPass, setSignUpPass}}>
            {children}
        </AuthContext.Provider>
    )
}