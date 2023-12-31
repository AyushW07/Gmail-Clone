import React, { useState } from "react";
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
import StarIcon from "@mui/icons-material/Star";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  const handleBack = () => {
    navigate("/");
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggleStar = () => {
    setIsClicked(!isClicked);
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
          <h2>{selectedMail?.subject}</h2>
          <IconButton>
            <LabelImportantOutlinedIcon
              className={styles.imp_icon}
              fontSize="small"
            />
          </IconButton>
        </div>
        <div className={styles.sub_icon}>
          <div className={styles.icons}>
            <IconButton>
              <LocalPrintshopOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <LaunchOutlinedIcon fontSize="small" />
            </IconButton>
          </div>

          <div>
            <IconButton onClick={toggleStar} className={styles.star_icon}>
              {isClicked ? (
                <StarIcon fontSize="small" style={{ color: "#f7ca4c" }} />
              ) : (
                <StarBorderOutlinedIcon fontSize="small" />
              )}
            </IconButton>
            <IconButton className={styles.reply_icon}>
              <ReplyOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton className={styles.vertMenu_icon}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </div>

          <p className={styles.time}>{selectedMail?.time}</p>
        </div>
      </div>

      <div className={styles.user}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.name}>
          <h4>{selectedMail?.title}</h4>
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
        <p>{selectedMail?.desc}</p>
      </div>
    </div>
  );
}

export default Mail;
