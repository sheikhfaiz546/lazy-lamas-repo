import { DiamondShapeIcon } from "../../SVG-Icons";
import styles from "./SepartorLine.module.css";

const SepartorLine = () => {
  return (
    <div className={`${styles.lineContainer}`}>
      <span className={`${styles.leftLine}`}></span>
      <DiamondShapeIcon size="12" color="white" />
      <DiamondShapeIcon size="16" color="white" />
      <DiamondShapeIcon size="12" color="white" />
      <span className={`${styles.rightLine}`}></span>
    </div>
  );
};

export default SepartorLine;
