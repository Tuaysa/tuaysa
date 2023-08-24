import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function UserMenu() {
    return(
        <div className="h-12 flex items-center justify-center cursor-pointer hover:-translate-y-1 duration-300">
            <AccountCircleIcon className="h-6 w-6 text-[var(--mainBlue)]"/>
        </div>
    )
}