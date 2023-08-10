import React from "react";
import styles from "./Sidebar.module.css";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Button startIcon={<EditOutlinedIcon />} className={styles.pencil_icon}>
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={24} />
      <SidebarOption Icon={StarIcon} title="Starred" number={2} />
    </div>
  );
}

export default Sidebar;
