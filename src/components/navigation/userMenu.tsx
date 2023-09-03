"use client";
import React, { useContext } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled, alpha } from "@mui/material/styles";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ChatIcon from "@mui/icons-material/Chat";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import { AuthContext } from "@/contexts/authContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  overflow: "visible",

  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "#a49ea9",
    overflow: "visible",
    backgroundColor: "#F4F0E9",
    "&::after": {
      // Add this block for the arrow
      content: '""',
      position: "absolute",
      top: "-16px", // Adjust the value to position the arrow above the menu
      right: "11px", // Adjust the value to position the arrow on the right
      width: "0",
      height: "0",
      borderTop: "8px solid transparent", // Arrow color
      borderBottom: "8px solid #F4F0E9",
      borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent",
      zIndex: theme.zIndex.drawer + 1,
    },
    "&::before": {
      // Add this block for the arrow tip
      content: '""',
      position: "absolute",
      top: "-20px", // Adjust the value to position the arrow tip above the menu
      right: "9px", // Adjust the value to position the arrow tip on the right
      width: "0",
      height: "0",
      borderTop: "10px solid transparent", // Arrow tip color
      borderRight: "10px solid transparent",
      borderBottom: "10px solid rgba(0, 0, 0, 0.05)", // Apply the boxShadow to the arrow tip
      borderLeft: "10px solid transparent",
      zIndex: theme.zIndex.drawer + 1,
    },
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      fontSize: 15,
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#a49ea9",
        marginRight: theme.spacing(1.5),
      },
      "&:hover": {
        backgroundColor: "rgba(202, 196, 208, 0.2)",
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { setLoggedIn } = useContext(AuthContext);
  const { setAddress } = useContext(AuthContext);
  const router = useRouter()

  return (
    <div className="h-12 flex items-center justify-center cursor-pointer duration-300 relative">
      <IconButton
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon className="h-6 w-6 text-[var(--mainBlue)]" />
      </IconButton>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div className="menu-arrow" />
        <MenuItem onClick={handleClose} disableRipple>
          <AccountCircleIcon />
          View your profile
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ReceiptLongIcon />
          Purchases and Reviews
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <ChatIcon />
          Messages
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem
          onClick={() => {
            router.push('/accountSettings')
            handleClose;
          }}
          disableRipple
        >
          <SettingsOutlinedIcon />
          Account Settings
        </MenuItem>
        <MenuItem
          onClick={() => {
            axios
              .get("api/signOut")
              .then((res) => {
                console.log(res);
                setAddress("");
                setLoggedIn(false);
              })
              .catch((error) => {
                console.log("error signing out", error);
                toast.error("Error signing out" + error);
              });
            handleClose;
          }}
          disableRipple
        >
          <LogoutIcon />
          Sign Out
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
