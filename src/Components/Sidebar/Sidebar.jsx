import React from "react";
import styles from "./Sidebar.module.css";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SidebarOption from "../SidebarOption/SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import MoreSidebar from "../MoreSidebar/MoreSidebar";
import { useDispatch } from "react-redux";
import { openSendMail } from "../../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className={styles.sidebar}>
      <Button
        startIcon={<EditOutlinedIcon />}
        className={styles.pencil_icon}
        onClick={() => dispatch(openSendMail())}
      >
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

      <MoreSidebar />

      <div className={styles.labels}>
        <h3>Labels</h3>
        <IconButton>
          <AddSharpIcon className={styles.add_icon} />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
