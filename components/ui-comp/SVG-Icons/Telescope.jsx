const TelescopeIcon = ({ size = "24", color = "#636363" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9.84004L3.91106 3L7.07745 3.88467L5.16639 10.7247L2 9.84004ZM19.2481 12.9831L12.0263 10.9665L12.1242 11.2485L15.9398 21.7013L15.4556 21.8777L13.9412 17.7285L11.4945 18.4394L11.4134 21.7991L10.8982 21.7862L10.9794 18.4381L8.41416 17.7942L6.63963 21.7862L6.1696 21.5776L10.718 11.3477L5.84766 9.9878L7.28093 4.85865L13.2651 6.53274L13.0437 7.32342L20.2654 9.34392L20.0967 9.94659L22.0605 10.4939L21.3793 12.9303L19.4155 12.3817L19.2481 12.9831ZM7.62348 5.37376L7.47796 5.88886L12.5067 7.30024L12.6522 6.7787L7.62348 5.37376ZM13.7609 17.2417L12.1487 12.8196L11.6233 13.0552L11.5061 17.8985L13.7609 17.2417ZM8.62664 17.319L10.9897 17.914L11.1133 12.9793L10.6484 12.7784L8.62664 17.319Z"
        fill={color}
      />
    </svg>
  );
};




export default TelescopeIcon;