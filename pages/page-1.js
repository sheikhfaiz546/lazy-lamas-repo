import Image from "next/image";
import styles from "@/styles/Page-1.module.css";
import { SepartorLine } from "@/components/ui-comp/Decorators";
import {
  ConnectWalletButton,
  RoadMapButton,
} from "@/components/ui-comp/Buttons";
import {
  DrumIcon,
  ShovelIcon,
  TelescopeIcon,
  WineGlassIcon,
} from "@/components/ui-comp/SVG-Icons";

export default function Home() {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.backgroundImgWrapper}`}>
        <Image quality={100} src="/Images/Backgrounds/Background-1.jpg" alt="" fill />
      </div>
      <div className={`${styles.connectWalletBtnWrapper}`}>
        <ConnectWalletButton
          buttonLabel="connect wallet"
          clickHandler={() => alert("You can add any functionality")}
        />
      </div>
      <div className={`${styles.formWrapper}`}>
        <div className={`${styles.form}`}>
          <div className={`${styles.formHeader}`}>
            <Image
              src="/Images/NFT/Untitled-1.png"
              quality={90}
              alt=""
              width={175}
              height={175}
            />
            <h3>EXPEDITIONS</h3>
            <div className={`${styles.separatorLine}`}>
              <SepartorLine />
            </div>
          </div>
          <div className={`${styles.formBody}`}>
            <RoadMapButton
              fullWidth
              Icon={ShovelIcon}
              color="#fac663"
              buttonLabel="Archeology"
              clickHandler={() => alert("You can add any functionality Here.")}
            />
            <RoadMapButton
              fullWidth
              Icon={WineGlassIcon}
              color="#3496c2"
              buttonLabel="party"
              clickHandler={() => alert("You can add any functionality Here.")}
            />
            <RoadMapButton
              fullWidth
              Icon={TelescopeIcon}
              color="#8b94a2"
              buttonLabel="astronomy"
              clickHandler={() => alert("You can add any functionality Here.")}
            />
            <RoadMapButton
              fullWidth
              Icon={DrumIcon}
              color="#b0cbf5"
              buttonLabel="unlock artifact"
              clickHandler={() => alert("You can add any functionality Here.")}
            />
            <p>
              Tip! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.logoWrapper}`}>
        <Image width={119} height={119} src="/Images/NFT/Logo.png" alt="lamas Logo " />
      </div>
    </div>
  );
}
