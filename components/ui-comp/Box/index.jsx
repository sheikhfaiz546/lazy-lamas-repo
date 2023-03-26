import React from "react";
import { SepartorLine } from "../Decorators";
import styles from "./Box.module.css";
const Box = ({ title = "Video Title", children, variant = "secondary" }) => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.header}`}>
        <h4>{title}</h4>
        {variant === "secondary" && (
          <div className={`${styles.dimaondLineContainer}`}>
            <SepartorLine size="small" />
          </div>
        )}
        <span className={`${styles.headerGlow}`}></span>
      </div>
      <div className={`${styles.body}`}>{children}</div>
    </div>
  );
};

export default Box;
