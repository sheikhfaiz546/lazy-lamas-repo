const DiamondShapeIcon = ({ size = "24", color = "#636363",variant="primary" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {variant === "primary" ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12L12 2L2 12L12 22L22 12ZM12.5357 4.49474L12 3.95903L11.4643 4.49474L4.39321 11.5658L5.46464 12.6372L12 6.10188L18.5354 12.6372L19.6067 11.5658L12.5357 4.49474Z"
          fill={color}
        />
      ) : variant === "secondary" && (
        <>
          <path
            d="M2 12.0009L11.9991 22L22 12.0009L11.9991 2.00716L2 12.0009ZM19.6054 11.5657L18.5308 12.6403L18.5111 12.66L11.9955 6.14435L5.44408 12.6976L4.35336 11.6069L4.38918 11.5693L11.46 4.49843L11.9973 3.96113L19.6054 11.5657Z"
            fill={color}

          />
          <path
            d="M4.39276 11.5657L4.35695 11.6015L5.44766 12.6922L11.9991 6.13899L18.5165 12.6564L18.5344 12.6367L19.6054 11.5657L11.9991 3.95935L4.39276 11.5657Z"
            fill="var(--primary-700)"
          />
        </>
      )}
    </svg>
  );
};

export default DiamondShapeIcon;