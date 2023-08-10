import React from "react";
import styles from "./Sidebar.module.css";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Button startIcon={<EditOutlinedIcon />} className={styles.pencil_icon}>
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={24} active={true} />
      <SidebarOption Icon={StarBorderOutlinedIcon} title="Starred" number={2} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={1} />
      <SidebarOption
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        number={4}
      />
      <SidebarOption Icon={ExpandMoreSharpIcon} title="More" />
    </div>
  );
}

export default Sidebar;
