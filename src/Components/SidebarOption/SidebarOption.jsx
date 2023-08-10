import React from "react";
import styles from "./SidebarOption.module.css";

function SidebarOption({ Icon, title, number, active }) {
  return (
    <div
      className={`${styles.SidebarOption} ${
        active ? styles.sidebarOption_active : ""}`}
    >
      <Icon className={styles.Icon} />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
