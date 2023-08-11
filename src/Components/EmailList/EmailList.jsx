import React from "react";
import styles from "./EmailList.module.css";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import InboxIcon from "@mui/icons-material/Inbox";
import Section from "../Section/Section";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import EmailRow from "../EmailRow/EmailRow";

function EmailList() {
  return (
    <div className={styles.EmailList}>
      <div className={styles.settings}>
        <div className={styles.left}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className={styles.right}>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.sections}>
        <Section Icon={InboxIcon} title="Primary" color="#0b57d0" active />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promotions"
          color="#0b57d0"
        />
        <Section Icon={PeopleAltOutlinedIcon} title="Social" color="#0b57d0" />
      </div>

      <div className={styles.lists}>
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
        <EmailRow
          title="Google Forms"
          subject="Opt-In Form"
          desc="Thanks for filling out Opt-in form Thanks for filling out Opt-in form Thanks for filling out Opt-in form Thanks for filling out Opt-in form"
          time="10:00 PM"
        />
      </div>
    </div>
  );
}

export default EmailList;
