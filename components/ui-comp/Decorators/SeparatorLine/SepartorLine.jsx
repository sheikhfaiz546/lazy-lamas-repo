import { DiamondShapeIcon } from "../../SVG-Icons";
import styles from "./SepartorLine.module.css";

const SepartorLine = ({ variant = "primary", size = "medium" }) => {
  return (
    <>
      {variant === "primary" ? (
        <div
          style={{ columnGap: size === "small" ? "2px" : "5px" }}
          className={`${styles.lineContainer}`}
        >
          <span
            className={`${size === "small" ? styles.small : styles.medium} ${
              styles.leftLine
            }`}
          ></span>
          <DiamondShapeIcon
            size={size === "small" ? "8" : "12"}
            color="white"
          />
          <DiamondShapeIcon
            size={size === "small" ? "12" : "16"}
            color="white"
          />
          <DiamondShapeIcon
            size={size === "small" ? "8" : "12"}
            color="white"
          />
          <span
            className={`${size === "small" ? styles.small : styles.medium} ${
              styles.rightLine
            }`}
          ></span>
        </div>
      ) : (
        variant === "secondary" && (
          <div className={`${styles.greyLineContainer}`}>
            <span className={`${styles.greyleftLine}`}></span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.94165 -4L1.34164 -4.2L1.44163 -4H0.94165ZM-0.999996 -3.02918L-1.34164 -2.85836L-0.999996 -2.17506V-3.02918ZM0.187533 0.199997L12 23.8249L23.8125 0.2H20.4584L12 17.1167L3.54163 0.199997H0.187533ZM23.0584 -4H22.5584L22.6584 -4.2L23.0584 -4Z"
                fill="#504f52"
              />
            </svg>

            <span className={`${styles.greyRightLine}`}></span>
          </div>
        )
      )}
    </>
  );
};

export default SepartorLine;
