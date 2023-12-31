import React, { useState } from "react";
import styles from "./EmailRow.module.css";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../../features/mailSlice";

function EmailRow({ title, subject, desc, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        title,
        subject,
        desc,
        time,
      })
    );

    navigate("/mail");
  };

  const [isClicked, setIsClicked] = useState(false);

  const toggleStar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={styles.EmailRow}>
      <div className={styles.options}>
        <Checkbox />
        <IconButton onClick={toggleStar}>
          {isClicked ? (
            <StarIcon style={{ color: "#f7ca4c" }} />
          ) : (
            <StarBorderOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon style={{ color: "#f7ca4c" }} />
        </IconButton>
      </div>

      <div className={styles.Emails} onClick={openMail}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.message}>
          <h4>
            {subject} &nbsp;
            <span className={styles.desc}>- {desc}</span>
          </h4>
        </div>

        <p className={styles.time}>{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
