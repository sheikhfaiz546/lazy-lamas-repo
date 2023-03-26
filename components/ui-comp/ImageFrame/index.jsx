import Image from "next/image";
import { DiamondShapeIcon } from "../SVG-Icons";
import styles from "./ImageFrame.module.css";
const ImageFrame = ({size = "80px"}) => {
  return (
    <div
      style={{ minWidth: size, width: size }}
      className={`${styles.container}`}
    >
      <span className={`${styles.leftDiamond}`}>
        <DiamondShapeIcon
          variant="secondary"
          color="var(--primary-400)"
          size="22"
        />
      </span>
      <Image src="/Images/NFT/NFT-1.png" fill alt="" />
      <span className={`${styles.rightDiamond}`}>
        <DiamondShapeIcon
          variant="secondary"
          color="var(--primary-400)"
          size="22"
        />
      </span>
    </div>
  );
};

export default ImageFrame;
