import Image from "next/image";
import styles from "@/styles/Page-2.module.css";
import { ConnectWalletButton } from "@/components/ui-comp/Buttons";
import { FileIcon } from "@/components/ui-comp/SVG-Icons";
import Box from "@/components/ui-comp/Box";
import InputTextFeild from "@/components/ui-comp/InputTextFeild";
import { useRef, useState } from "react";
import GoldButton from "@/components/ui-comp/Buttons/GoldButton/GoldButton";

export default function Page2() {
  let inputFileRef = useRef(null);
  let [fileName, setFileName] = useState("");

  function imagePickFromDevice(event) {
    /* File Object Denconstruction */
    let { name } = event.target.files[0];
    if (name.length > 17) {
      let cloneFileName = name.split(".");
      cloneFileName[0] = cloneFileName[0].slice(0, 15);
      name = `${cloneFileName[0]}....${cloneFileName[1]}`;
    }
    setFileName(name);
  }
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
        <div className={`${styles.contentWrapper}`}>
          <div>
            <Box>
              <div>
                <Image
                  quality={90}
                  src="/Images/NFT/Untitled-1.jpg"
                  width="268"
                  height="268"
                  alt=""
                />
              </div>
            </Box>
          </div>
          <div className={`${styles.formWrapper}`}>
            <label htmlFor="title">
              <h4 className={`${styles.title}`}>Choose Text Title</h4>
              <InputTextFeild id="title" placeholder="I am your text title" />
            </label>
            <label htmlFor="desc">
              <h4 className={`${styles.title}`}>Add Description of memory</h4>
              <InputTextFeild
                id="desc"
                rows="5"
                type="text-area"
                placeholder="I am your text title"
              />
            </label>
            <div className={`${styles.embedFile}`}>
              <h4 className={`${styles.title}`}>Embed Files</h4>
              <div>
                <label htmlFor="addFile">
                  <input
                    onChange={imagePickFromDevice}
                    id="addFile"
                    type="file"
                    hidden
                    ref={inputFileRef}
                  />
                  <ConnectWalletButton
                    clickHandler={() => inputFileRef.current.click()}
                    buttonLabel="Add Files"
                  />
                </label>
                {fileName && (
                  <span>
                    <FileIcon color="var(--grey-500)" />
                    <p>{fileName}</p>
                  </span>
                )}
              </div>
              {fileName && (
                <div className={`${styles.submitBtn}`}>
                  <GoldButton
                  variant="secondary"
                    fontSize="14px"
                    // clickHandler={() => inputFileRef.current.click()}
                    buttonLabel="Submit"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
