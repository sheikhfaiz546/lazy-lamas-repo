import Image from "next/image";
import styles from "@/styles/Page-3.module.css";
import { ConnectWalletButton } from "@/components/ui-comp/Buttons";
import Box from "@/components/ui-comp/Box";
import { SepartorLine } from "@/components/ui-comp/Decorators";
import GoldButton from "@/components/ui-comp/Buttons/GoldButton/GoldButton";
import ImageFrame from "@/components/ui-comp/ImageFrame";
import MapRoute from "@/components/Maps-Components/Map";
import Timer from "@/components/ui-comp/Timer/Timer";
import { ShovelIcon, TelescopeIcon } from "@/components/ui-comp/SVG-Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useRef, useState } from "react";
import ClaimReward from "@/components/ui-comp/PopupScreen/ClaimReward";
import NFTPopup from "@/components/ui-comp/PopupScreen/NFT-Popup";

const Page3 = () => {
  let [claimRewardScreen, setClaimRewardSreen] = useState(false);
  let [NFTPopupScreen, setNFTPopupScreen] = useState(false);
  let nftCrousel = useRef(null);
  let mapSwiper = useRef(null);
  let [nftCrouselSlideIndex, setNftCrouselSlideIndex] = useState(0);
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
          <h4 className={`${styles.heading}`}>Expedition</h4>
          <div className={`${styles.container}`}>
            <div className={`${styles.storyContainer}`}>
              <Box title="Story">
                <div className={`${styles.imageContainer}`}>
                  <div className={`${styles.goldenCircle}`}></div>
                  <div className={`${styles.imageWrapper}`}>
                    <Image
                      src="/Images/NFT/NFT-1.png"
                      style={{ objectFit: "contain" }}
                      fill
                      alt=""
                    />
                  </div>
                </div>
                <p className={`${styles.desc}`}>
                  The lorem ipsum is a placeholder text used in publishing and
                  graphic design. This filler text is a short paragraph that
                  contains all the letters of the alphabet.
                </p>
              </Box>
            </div>

            <div className={`${styles.mapContainer}`}>
              <Box title="Map">
                <div>
                  <Swiper
                    ref={mapSwiper}
                    slidesPerView={1}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide
                      style={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      className={styles.mapSlider}
                    >
                      <div className={`${styles.mapsWrapper}`}>
                        <div className={`${styles.timer}`}>
                          <Timer />
                        </div>
                        <div className={`${styles.maps}`}>
                          <h3 className={`${styles.title}`}>
                            Write a short Title here.
                          </h3>
                          <MapRoute checkpoint={5} />
                        </div>
                        <div className={`${styles.crouselControler}`}>
                          <div className={`${styles.icon}`}>
                            <ShovelIcon size="40" color="var(--gold-400)" />
                          </div>

                          <h3 className={`${styles.heading}`}>ARCHEOLOGY</h3>
                          <button
                            onClick={() => {
                              if (
                                mapSwiper.current?.swiper.slides.length - 1 ===
                                mapSwiper.current?.swiper.realIndex
                              ) {
                                mapSwiper.current?.swiper.slideTo(0);
                              } else {
                                mapSwiper.current?.swiper.slideNext();
                              }
                            }}
                            className={`${styles.btn}`}
                          >
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      className={styles.mapSlider}
                    >
                      <div className={`${styles.mapsWrapper}`}>
                        <div className={`${styles.timer}`}>
                          <Timer />
                        </div>

                        <div className={`${styles.maps}`}>
                          <h3 className={`${styles.title}`}>
                            Write a short Title here.
                          </h3>
                          <MapRoute checkpoint={2} />
                        </div>
                        <div className={`${styles.crouselControler}`}>
                          <div className={`${styles.icon}`}>
                            <TelescopeIcon size="40" color="var(--gold-400)" />
                          </div>
                          <h3 className={`${styles.heading}`}>ASTRONOMY</h3>

                          <button
                            onClick={() => {
                              if (
                                mapSwiper.current?.swiper.slides.length - 1 ===
                                mapSwiper.current?.swiper.realIndex
                              ) {
                                mapSwiper.current?.swiper.slideTo(0);
                              } else {
                                mapSwiper.current?.swiper.slideNext();
                              }
                            }}
                            className={`${styles.btn}`}
                          >
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        minWidth: "100%",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      className={styles.mapSlider}
                    >
                      <div className={`${styles.mapsWrapper}`}>
                        <div className={`${styles.timer}`}>
                          <Timer />
                        </div>

                        <div className={`${styles.maps}`}>
                          <h3 className={`${styles.title}`}>
                            Write a short Title here.
                          </h3>
                          <MapRoute checkpoint={2} />
                        </div>
                        <div className={`${styles.crouselControler}`}>
                          <div className={`${styles.icon}`}>
                            <TelescopeIcon size="40" color="var(--gold-400)" />
                          </div>
                          <h3 className={`${styles.heading}`}>ASTRONOMY</h3>

                          <button
                            onClick={() => {
                              if (
                                mapSwiper.current?.swiper.slides.length - 1 ===
                                mapSwiper.current?.swiper.realIndex
                              ) {
                                mapSwiper.current?.swiper.slideTo(0);
                              } else {
                                mapSwiper.current?.swiper.slideNext();
                              }
                            }}
                            className={`${styles.btn}`}
                          >
                            <span></span>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </Box>
              <div className={`${styles.statusContainer}`}>
                <div className={`${styles.separatorLine}`}>
                  <SepartorLine size="small" />
                </div>

                <h3 className={`${styles.title}`}>Status</h3>
                <p className={`${styles.desc}`}>
                  The lorem ipsum is a placeholder text used in publishing and
                  graphic design. This filler text is a short paragraph that
                  contains all the letters of the alphabet.
                </p>
              </div>
            </div>
            <div className={`${styles.rewardContainer}`}>
              <Image
                src="/Images/NFT/Reward-box.png"
                width="226"
                height="226"
                alt=""
              />
              <GoldButton
                clickHandler={() => setClaimRewardSreen(true)}
                buttonLabel="Claim Reward"
              />
            </div>
          </div>
          <div className={`${styles.craouselContainer}`}>
            <div className={`${styles.arrowline}`}>
              <SepartorLine variant="secondary" />
            </div>
            <div className={`${styles.imageContainer}`}>
              {nftCrouselSlideIndex > 0 && (
                <button
                  className={`${styles.leftArrowControler}`}
                  onClick={() => {
                    nftCrousel.current?.swiper.slidePrev();
                    setNftCrouselSlideIndex(
                      nftCrousel.current?.swiper.realIndex
                    );
                  }}
                >
                  <svg
                    style={{
                      width: "25px",
                      aspectRatio: "36/64",
                    }}
                    viewBox="0 0 36 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.5859 0.0858154L35.4143 2.91424L6.34024 31.9883L35.4026 60.5742L32.5976 63.4259L0.659912 32.0118L32.5859 0.0858154Z"
                      fill="var(--gold-400)"
                    />
                  </svg>
                </button>
              )}
              {nftCrousel.current?.swiper.slides.length - 3 !==
                nftCrouselSlideIndex && (
                <button
                  className={`${styles.rightArrowControler}`}
                  onClick={() => {
                    nftCrousel.current?.swiper.slideNext();
                    setNftCrouselSlideIndex(
                      nftCrousel.current?.swiper.realIndex
                    );
                  }}
                >
                  <svg
                    style={{
                      width: "25px",
                      aspectRatio: "36/64",
                    }}
                    viewBox="0 0 36 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.48836 0.0858154L0.659931 2.91424L29.734 31.9883L0.671665 60.5742L3.47662 63.4259L35.4143 32.0118L3.48836 0.0858154Z"
                      fill="var(--gold-400)"
                    />
                  </svg>
                </button>
              )}
              <Swiper
                ref={nftCrousel}
                slidesPerView={3}
                allowTouchMove={false}
                className="mySwiper"
              >
                <SwiperSlide className={styles.frameSlides}>
                  <div className={styles.frameContainer}>
                    <ImageFrame />
                    <GoldButton
                      variant="secondary"
                      fontSize="12px"
                      buttonLabel="send on mission"
                      clickHandler={() => setNFTPopupScreen(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.frameSlides}>
                  <div className={styles.frameContainer}>
                    <ImageFrame />
                    <GoldButton
                      variant="secondary"
                      fontSize="12px"
                      buttonLabel="send on mission"
                      clickHandler={() => setNFTPopupScreen(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.frameSlides}>
                  <div className={styles.frameContainer}>
                    <ImageFrame />
                    <GoldButton
                      variant="secondary"
                      fontSize="12px"
                      buttonLabel="send on mission"
                      clickHandler={() => setNFTPopupScreen(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.frameSlides}>
                  <div className={styles.frameContainer}>
                    <ImageFrame />
                    <GoldButton
                      variant="secondary"
                      fontSize="12px"
                      buttonLabel="send on mission"
                      clickHandler={() => setNFTPopupScreen(true)}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className={`${styles.diamondLine}`}>
              <SepartorLine size="small" />
            </div>
          </div>

          {NFTPopupScreen && (
            <NFTPopup onClickPayBtn={() => setNFTPopupScreen(false)} />
          )}
          {claimRewardScreen && (
            <ClaimReward onClickDoneBtn={() => setClaimRewardSreen(false)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page3;
