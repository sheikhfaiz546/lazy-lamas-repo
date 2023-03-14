import Image from "next/image";
import styles from "@/styles/Page-2.module.css";
import { ConnectWalletButton } from "@/components/ui-comp/Buttons";
import Box from "@/components/ui-comp/Box";

const Page3 = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.backgroundImgWrapper}`}>
        <Image
          quality={100}
          src="/Images/Backgrounds/Background-1.jpg"
          alt=""
          fill
        />
      </div>
      <div className={`${styles.connectWalletBtnWrapper}`}>
        <ConnectWalletButton
          buttonLabel="connect wallet"
          clickHandler={() => alert("You can add any functionality")}
        />
      </div>
      <div className={`${styles.bodyContent}`}>
        <div className={`${styles.contentWrapper}`}></div>
      </div>
    </div>
  );
};

export default Page3;
