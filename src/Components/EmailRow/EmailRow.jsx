import React from "react";
import styles from "./EmailRow.module.css";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
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

  return (
    <div onClick={openMail} className={styles.EmailRow}>
      <div className={styles.options}>
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.message}>
        <h4>
          {subject} &nbsp;
          <span className={styles.desc}>- {desc}</span>
        </h4>
      </div>

      <p className={styles.time}>{time}</p>
    </div>
  );
}

export default EmailRow;
