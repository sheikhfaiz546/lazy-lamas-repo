const DiamondShapeIcon = ({ size = "24", color = "#636363" }) => {
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
        d="M19.799 9.8995L9.89949 0L0 9.8995L9.89949 19.799L19.799 9.8995ZM10.4298 2.46967L9.89949 1.93934L9.36916 2.46967L2.36916 9.46967L3.42982 10.5303L9.89949 4.06066L16.3692 10.5303L17.4298 9.46967L10.4298 2.46967Z"
        fill={color}
      />
    </svg>
  );
};

export default DiamondShapeIcon;
