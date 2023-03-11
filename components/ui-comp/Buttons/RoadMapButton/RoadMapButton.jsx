import React from "react";
import styles from "./RoadMapButton.module.css";

const RoadMapButton = (props) => {
  let {
    buttonLabel = "Your Label",
    fullWidth,
    color,
    Icon,
    clickHandler = undefined,
  } = props;

  return (
    <div
      style={{ width: fullWidth ? "100%" : "auto" }}
      className={`${styles.btnContainer}`}
    >
      <button onClick={clickHandler}>
        <div style={{ color: color }} className={`${styles.textContainer}`}>
          <span className={`${styles.triangleRight}`}></span>
          {buttonLabel}
          <span className={`${styles.triangleLeft}`}></span>

          {/* Icon Container */}
          <div className={`${styles.iconContainer}`}>
            <div className={`${styles.diamond}`}></div>
            <span>
              <Icon color={color} size="64" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default RoadMapButton;
