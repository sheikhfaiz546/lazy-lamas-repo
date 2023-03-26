import styles from "./ConnectWalletButton.module.css";
const ConnectWalletButton = (props) => {
  let { buttonLabel = "Lorem ipsumm", clickHandler = undefined } = props;
  return (
    <div className={`${styles.btnContainer}`}>
      <button onClick={clickHandler}>
        <span>{buttonLabel}</span>
        <svg
          viewBox="0 0 204 47"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.3878 11L8 29L27.3878 47H178.612L198 29L178.612 11H27.3878Z"
            fill="var(--dark-color)"
          />
          <mask id="path-2-inside-1_2_20" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 4L5 22L25 40H181L201 22L181 4H25Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 4L5 22L25 40H181L201 22L181 4H25Z"
            fill="var(--primary-700)"
          />
          <path
            d="M5 22L4.33104 21.2567L3.50515 22L4.33104 22.7433L5 22ZM25 4V3H24.6163L24.331 3.25671L25 4ZM25 40L24.331 40.7433L24.6163 41H25V40ZM181 40V41H181.384L181.669 40.7433L181 40ZM201 22L201.669 22.7433L202.495 22L201.669 21.2567L201 22ZM181 4L181.669 3.25671L181.384 3H181V4ZM5.66896 22.7433L25.669 4.74329L24.331 3.25671L4.33104 21.2567L5.66896 22.7433ZM25.669 39.2567L5.66896 21.2567L4.33104 22.7433L24.331 40.7433L25.669 39.2567ZM181 39H25V41H181V39ZM200.331 21.2567L180.331 39.2567L181.669 40.7433L201.669 22.7433L200.331 21.2567ZM180.331 4.74329L200.331 22.7433L201.669 21.2567L181.669 3.25671L180.331 4.74329ZM25 5H181V3H25V5Z"
            fill="var(--primary-400)"
            mask="url(#path-2-inside-1_2_20)"
          />
        </svg>
      </button>
    </div>
  );
};

export default ConnectWalletButton;
