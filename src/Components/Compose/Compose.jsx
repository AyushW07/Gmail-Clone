import React from "react";
import styles from "./Compose.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMail } from "../../features/mailSlice";

function Compose() {
  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
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
        </div>
      </form>
    </div>
  );
}

export default Compose;
