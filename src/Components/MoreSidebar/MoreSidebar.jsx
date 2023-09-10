import React from "react";
import styles from "./MoreSidebar.module.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function MoreSidebar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.MoreSidebar}>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItemButton onClick={handleClick}>
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary="More" className={styles.more} />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <LabelImportantOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Important" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <ChatOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Chats" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <SendOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <ScheduleSendOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Scheduled" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <ReportGmailerrorredIcon />
              </ListItemIcon>
              <ListItemText primary="Spam" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <DeleteOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Trash" className={styles.moreOption} />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <LabelOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Categories"
                className={styles.moreOption}
              />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Manage labels"
                className={styles.moreOption}
              />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 2.2 }}>
              <ListItemIcon>
                <AddOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Create new label"
                className={styles.moreOption}
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      ;
    </div>
  );
}

export default MoreSidebar;
