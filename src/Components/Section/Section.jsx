import React from "react";
import styles from "./Section.module.css";

function Section({ Icon, title, color, active }) {
  return (
    <div
      className={`${styles.section} ${active ? styles.section_active : ""}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: active ? color : "defaultColorValue",
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
