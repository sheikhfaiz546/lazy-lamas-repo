import styles from "./ConnectWalletButton.module.css";
const ConnectWalletButton = (props) => {
  let { buttonLabel = "Lorem ipsumm", clickHandler = undefined } = props;
  return (
    <div className={`${styles.btnContainer}`}>
      <button onClick={clickHandler}>
        <span>{buttonLabel}</span>
        {/* <svg
          viewBox="0 0 196 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.3878 7L3 25L22.3878 43H173.612L193 25L173.612 7H22.3878Z"
            fill="#00020B"
          />
          <mask id="path-2-inside-1_1_17" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0L0 18L20 36H176L196 18L176 0H20Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 0L0 18L20 36H176L196 18L176 0H20Z"
            fill="#010118"
          />
          <path
            d="M0 18L-0.668965 17.2567L-1.49485 18L-0.668965 18.7433L0 18ZM20 0V-1H19.6163L19.331 -0.743294L20 0ZM20 36L19.331 36.7433L19.6163 37H20V36ZM176 36V37H176.384L176.669 36.7433L176 36ZM196 18L196.669 18.7433L197.495 18L196.669 17.2567L196 18ZM176 0L176.669 -0.743294L176.384 -1H176V0ZM0.668965 18.7433L20.669 0.743294L19.331 -0.743294L-0.668965 17.2567L0.668965 18.7433ZM20.669 35.2567L0.668965 17.2567L-0.668965 18.7433L19.331 36.7433L20.669 35.2567ZM176 35H20V37H176V35ZM195.331 17.2567L175.331 35.2567L176.669 36.7433L196.669 18.7433L195.331 17.2567ZM175.331 0.743294L195.331 18.7433L196.669 17.2567L176.669 -0.743294L175.331 0.743294ZM20 1H176V-1H20V1Z"
            fill="#44627C"
            mask="url(#path-2-inside-1_1_17)"
          />
        </svg> */}

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
