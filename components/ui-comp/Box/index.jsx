import React from "react";
import styles from "./Box.module.css";
const Box = ({ title = "Video Title", children }) => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.header}`}>
        <h4>{title}</h4>
      </div>
      <div className={`${styles.body}`}>{children}</div>
    </div>
  );
};

export default Box;
