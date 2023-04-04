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
        <p>{buttonLabel}</p>
        {variant === "primary" ? (
          <>
            {/* Left Arrow */}
            <svg
              className={`${styles.leftArrow}`}
              viewBox="0 0 27 36"
              style={{ width: "1.5em", height: "2em" }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.76 3.40002L10.04 17.99L26.76 32.58"
                fill="url(#paint0_linear_137_44)"
              />
              <path
                d="M26.77 32.57L10.04 17.98L26.77 3.40002V2.40002H26.38L8.50998 17.98L26.38 33.57H26.77V32.57Z"
                fill="#F5FD4F"
              />
              <path
                d="M20.39 35L1.49999 18L20.39 1V0H19.99L-0.0100098 18L19.99 36H20.39V35Z"
                fill="#EEEA57"
              />
            </svg>

            {/* SVG Box */}
            <svg
              className={`${styles.svgBox}`}
              preserveAspectRatio="none"
              viewBox="0 0 156 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M155.41 35H0.200012V36H155.4L155.41 35ZM155.41 1V0H0.200012V1"
                fill="#F5FD4F"
              />
            </svg>
            <svg
              viewBox="0 0 143 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className={`${styles.svgWithGDBox}`}
            >
              <path
                d="M142.47 1.40997H0.670013V30.58H142.47V1.40997Z"
                fill="url(#paint0_linear_137_44)"
              />
              <path
                d="M0.670013 31.58H142.46V30.58H0.670013V31.58ZM0.670013 1.40997H142.47V0.409973H0.670013V1.40997Z"
                fill="#F5FD4F"
              />
            </svg>

            {/* Right Arrow */}
            <svg
              className={`${styles.rightArrow}`}
              style={{ width: "1.5em", height: "2em" }}
              viewBox="0 0 28 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.470001 32.58L17.2 17.99L0.470001 3.40002"
                fill="url(#paint0_linear_137_44)"
              />
              <path
                d="M0.47998 3.40002L17.2 17.9901L0.47998 32.57V33.57H0.859985L18.73 17.9901L0.859985 2.40002H0.47998V3.40002Z"
                fill="#F5FD4F"
              />
              <path
                d="M7.35999 36H7.76999L27.77 18L7.76999 0H7.35999V1L26.25 18L7.35999 35V36Z"
                fill="#F5FD4F"
              />
            </svg>

            {/* Gradient Color Code */}
            <svg
                viewBox="0 0 28 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint0_linear_137_44"
                    gradientTransform="rotate(90)"
                  >
                    <stop offest="0" stop-color="#E6C55E" />
                    <stop offset="0.5" stop-color="#BDFE77" />
                    <stop offset="1" stop-color="#E6C55E" />
                  </linearGradient>
                </defs>
              </svg>
          </>
        ) : (
          variant === "secondary" && (
            <>
              {/* Left Arrow */}
              <svg
                className={`${styles.leftArrow}`}
                viewBox="0 0 27 37"
                style={{ width: "1.5em", height: "2em" }}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.78 34.67L9.62 18.07L26.78 1.46997V34.67Z"
                  fill="url(#paint0_linear_137_44)"
                />
                <path
                  d="M26.8 0.469971H26.37L8.16998 18.04L26.37 35.64H26.8V34.64L9.60999 18.04L26.77 1.43997L26.8 0.469971Z"
                  fill="#EFEB56"
                />
                <path
                  d="M18.68 0.039978L19.59 1.11996L2.03 18.12L19.59 35.12L18.68 36.21L0 18.04L18.68 0.039978Z"
                  fill="#EFEB56"
                />
              </svg>

              {/* SVG Box */}
              <svg
                className={`${styles.svgWithGDBox}`}
                preserveAspectRatio="none"
                viewBox="0 0 142 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M141.32 1.46997H0.780029V34.67H141.32V1.46997Z"
                  fill="url(#paint0_linear_137_44)"
                />
                <path
                  d="M141.31 34.67H0.77002V35.67H141.25L141.31 34.67ZM141.31 0.469971H0.800026V1.46997H141.31V0.469971Z"
                  fill="#EFEB56"
                />
              </svg>
           
              {/* Right Arrow */}
              <svg
                className={`${styles.rightArrow}`}
                style={{ width: "1.5em", height: "2em" }}
                viewBox="0 0 28 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.320007 34.67L17.48 18.07L0.320007 1.46997V34.67Z"
                  fill="url(#paint0_linear_146_53)"
                />
                <path
                  d="M0.309998 1.46994L17.47 18.0399L0.309998 34.64V35.64H0.75L18.91 18.0399L0.720001 0.439941H0.25L0.309998 1.46994Z"
                  fill="#EFEB56"
                />
                <path
                  d="M9.32004 0.039978L28 18.04L9.32004 36.14L8.41003 35.05L25.96 18.05L8.41003 1.04999L9.32004 0.039978Z"
                  fill="#EFEB56"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_146_53"
                    x1="8.9"
                    y1="1.46997"
                    x2="8.9"
                    y2="34.67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E6C55E" />
                    <stop offset="0.5" stop-color="#BDFE77" />
                    <stop offset="1" stop-color="#E6C55E" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Gradient Color Code */}
              <svg
                viewBox="0 0 28 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint0_linear_137_44"
                    gradientTransform="rotate(90)"
                  >
                    <stop offest="0" stop-color="#E6C55E" />
                    <stop offset="0.5" stop-color="#BDFE77" />
                    <stop offset="1" stop-color="#E6C55E" />
                  </linearGradient>
                </defs>
              </svg>
            </>
          )
        )}
      </button>
    </div>
  );
};

export default GoldButton;

{
  /* <svg
width="214"
height="43"
viewBox="0 0 214 43"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M29.1625 41.7728L9.7632 21.9008L29.1625 2.02873H183.843L203.243 21.9008L183.843 41.7728H29.1625Z"
  fill="red"
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
</svg> */
}
