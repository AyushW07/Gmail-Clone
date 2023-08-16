import React from "react";
import styles from "./Mail.module.css";
import { Avatar, IconButton } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useNavigate } from "react-router-dom";

function Mail() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.Mail}>
      <div className={styles.tools}>
        <div className={styles.left}>
          <IconButton onClick={handleBack} className={styles.back_icon}>
            <ArrowBackOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <EmailOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <AccessTimeIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <AddTaskIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ForwardToInboxIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>

        <div className={styles.right}>
          <IconButton>
            <KeyboardArrowLeftIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <KeyboardIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.subject}>
          <h2>Subject</h2>
          <IconButton>
            <LabelImportantOutlinedIcon
              className={styles.imp_icon}
              fontSize="small"
            />
          </IconButton>
          <p>Title</p>
          <IconButton>
            <StarBorderOutlinedIcon
              fontSize="small"
              className={styles.star_icon}
            />
          </IconButton>
          <IconButton>
            <ReplyOutlinedIcon fontSize="small" className={styles.reply_icon} />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon
              fontSize="small"
              className={styles.vertMenu_icon}
            />
          </IconButton>
        </div>
        <div className={styles.sub_icon}>
          <IconButton>
            <LocalPrintshopOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <LaunchOutlinedIcon fontSize="small" />
          </IconButton>
          <p className={styles.time}>10:00 AM</p>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.name}>
          <h4>Name</h4>
          <span>to me</span>
          <IconButton>
            <ArrowDropDownIcon
              className={styles.dropArrow_icon}
              fontSize="small"
            />
          </IconButton>
        </div>
      </div>

      <div className={styles.message}>
        <p>Message</p>
      </div>
    </div>
  );
}

export default Mail;
