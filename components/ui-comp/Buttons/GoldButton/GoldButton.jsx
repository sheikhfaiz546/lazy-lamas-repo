import styles from "./GoldButton.module.css";
const GoldButton = (props) => {
  let {
    fontSize = "18px",
    buttonLabel = "Lorem ipsum",
    clickHandler = undefined,
    variant = "primary",
  } = props;
  return (
    <div className={`${styles.btnContainer}`}>
      <button onClick={clickHandler} style={{ fontSize: fontSize }}>
        <span>{buttonLabel}</span>
        {variant === "primary" ? (
          <svg
            width="214"
            height="42"
            viewBox="0 0 214 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M204.253 21L184.808 38.5H29.1919L9.74742 21L29.1919 3.5H184.808L204.253 21Z"
              fill="url(#paint0_linear_38_20)"
              stroke="#F5FD4F"
            />
            <path
              d="M22.6327 1L1 21L22.6327 41H191.367L213 21L191.367 1H22.6327Z"
              stroke="#F5FD4F"
            />
            <defs>
              <linearGradient
                id="paint0_linear_38_20"
                x1="107"
                y1="3"
                x2="107"
                y2="39"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E6C55E" />
                <stop offset="0.5" stopColor="#BDFE77" />
                <stop offset="1" stopColor="#E6C55E" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          variant === "secondary" && (
            <svg
              width="214"
              height="43"
              viewBox="0 0 214 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1625 41.7728L9.7632 21.9008L29.1625 2.02873H183.843L203.243 21.9008L183.843 41.7728H29.1625Z"
                fill="url(#paint0_linear_105_12)"
                stroke="#F5FD4F"
                strokeWidth="0.994228"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M193.5 0.900757L214 21.9008L193.5 42.9008L192.502 41.6391L211.771 21.9008L192.502 2.16245L193.5 0.900757Z"
                fill="#F5FD4F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.5004 0.900757L21.4981 2.16245L2.22933 21.9008L21.4981 41.6391L20.5004 42.9008L0 21.9008L20.5004 0.900757Z"
                fill="#F5FD4F"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_105_12"
                  x1="106.503"
                  y1="1.53162"
                  x2="106.503"
                  y2="42.2699"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E6C55E" />
                  <stop offset="0.5" stopColor="#BDFE77" />
                  <stop offset="1" stopColor="#E6C55E" />
                </linearGradient>
              </defs>
            </svg>
          )
        )}
      </button>
    </div>
  );
};

export default GoldButton;
