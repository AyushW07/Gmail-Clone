import React from "react";
import styles from "./Compose.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FormatColorTextOutlinedIcon from "@mui/icons-material/FormatColorTextOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMail } from "../../features/mailSlice";
import { db } from "../../firebase";
// import firebase from "firebase/app";
import "firebase/firestore";

function Compose() {
  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      console.log(db);
      db.collection("emails").add({
        to: data?.to,
        subject: data?.subject,
        message: data?.message,
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });

      dispatch(closeSendMail());
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className={styles.Compose}>
      <div className={styles.header}>
        <h4>New Message</h4>
        <IconButton onClick={() => dispatch(closeSendMail())}>
          <CloseOutlinedIcon className={styles.close_icon} />
        </IconButton>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("to")} placeholder="To" type="email" required />

        <input
          {...register("subject")}
          placeholder="Subject"
          type="text"
          required
        />

        <input
          {...register("message")}
          type="text"
          className={styles.email_message}
          required
        />

        <div className={styles.send_options}>
          <Button
            className={styles.send_btn}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>

          <IconButton>
            <FormatColorTextOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <InsertLinkOutlinedIcon />
          </IconButton>
          <IconButton>
            <EmojiEmotionsOutlinedIcon />
          </IconButton>
          <IconButton>
            <InsertPhotoOutlinedIcon />
          </IconButton>
          <IconButton>
            <LockClockOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton className={styles.delete_icon}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
}

export default Compose;
