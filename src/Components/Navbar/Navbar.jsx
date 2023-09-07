import React from "react";
import styles from "./Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Navbar() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="	https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="Gmail"
        />
      </div>

      <div className={styles.middle}>
        <IconButton>
          <SearchIcon className={styles.search_icon} />
        </IconButton>

        <input type="text" placeholder="Search mail" />
        <IconButton>
          <TuneIcon />
        </IconButton>
      </div>

      <div className={styles.right}>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>

        <IconButton>
          <SettingsIcon />
        </IconButton>

        <IconButton>
          <AppsRoundedIcon />
        </IconButton>

        <Avatar
          onClick={signOut}
          src={user?.photoUrl}
          className={styles.avatar}
          sx={{ width: 33, height: 33 }}
        />
      </div>
    </div>
  );
}

export default Navbar;
