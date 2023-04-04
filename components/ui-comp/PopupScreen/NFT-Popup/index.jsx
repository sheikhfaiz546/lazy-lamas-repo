import Image from "next/image";
import Box from "../../Box";
import GoldButton from "../../Buttons/GoldButton/GoldButton";
import ImageFrame from "../../ImageFrame";
import styles from "./NFTPopup.module.css";

const NFTPopup = ({ onClickPayBtn = undefined }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Box title="Pop up Title">
          <div className={styles.bodyContainer}>
            <ImageFrame size="150px" />
            <p> This Expedition will cost you</p>
            <h4>80k LAZY</h4>
            <div>
              <GoldButton
                variant="secondary"
                fontSize="12px"
                clickHandler={onClickPayBtn}
                buttonLabel="pay now"
              />
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default NFTPopup;
