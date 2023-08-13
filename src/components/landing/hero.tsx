"use client"
import React from "react";


export default function HeroSection() {

    return(
        <div className={`w-full h-auto flex items-center justify-center oxygen`}>
            <div className="w-[29rem] h-[29rem] bg-[url(https://raw.githubusercontent.com/reannab16/tuaysa/main/public/craftytreesmall.png)] bg-cover bg-center"></div>
            <div className="flex flex-col w-96 items-center justify-center">
                <div className={`text-[var(--mainBlue)] oxygen w-96 text-center text-[2rem]`}>Discover handmade treasures from talented sellers</div>
                <div className={`text-[var(--cream)] bg-[var(--grey)] rounded-full flex items-center justify-center py-2 mt-9 w-80 text-base oxygen`}>Join Our Community</div>
            </div>
        </div>
    )
}