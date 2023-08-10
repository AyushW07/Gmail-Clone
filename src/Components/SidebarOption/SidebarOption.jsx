import React from "react";
import styles from "./SidebarOption.module.css";

function SidebarOption({ Icon, title, number }) {
  return (
    <div className={styles.SidebarOption}>
      <Icon className={styles.Icon} />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
