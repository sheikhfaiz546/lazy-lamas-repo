import Image from "next/image";
import React from "react";
import GoldButton from "../../Buttons/GoldButton/GoldButton";
import styles from "./ClaimReward.module.css";
const ClaimReward = ({ onClickDoneBtn = undefined }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>REWARD here</h3>
        <Image
          src="/Images/NFT/Reward-box-open.png"
          width="375"
          height="375"
          alt=""
        />
        <GoldButton clickHandler={onClickDoneBtn} buttonLabel="Done" />
      </div>
    </div>
  );
};

export default ClaimReward;
