import React from "react";
import styles from "./Compose.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Button, IconButton } from "@mui/material";

function Compose() {
  return (
    <div className={styles.Compose}>
      <div className={styles.header}>
        <h4>New Message</h4>
        <IconButton>
          <CloseOutlinedIcon className={styles.close_icon} />
        </IconButton>
      </div>

      <form>
        <input placeholder="To" type="email" />
        <input placeholder="Subject" type="text" />
        <input type="text" className={styles.email_message} />

        <div className={styles.send}>
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
