const FileIcon = ({ size = "24", color = "#636363" }) => {
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
        d="M4 19.9291V5.28085C4.00387 5.2696 4.00827 5.25843 4.01266 5.24725L4.01266 5.24725L4.01266 5.24725C4.02247 5.22232 4.03229 5.19736 4.03633 5.17147C4.19026 4.18697 4.99152 3.37399 5.97484 3.25327C6.31094 3.21203 6.65294 3.21337 6.99402 3.2147H6.99402H6.99402H6.99403C7.08271 3.21504 7.17132 3.21539 7.25976 3.21499C7.3793 3.2142 7.43712 3.16498 7.51057 3.0802C7.70942 2.85166 7.91179 2.62117 8.1415 2.42544C8.42177 2.18663 8.7761 2.1011 9.12653 2.01651L9.19475 2H9.74169C9.74938 2.00328 9.75696 2.00713 9.76451 2.01097L9.76452 2.01097C9.78036 2.01903 9.79613 2.02705 9.81279 2.02969C10.5203 2.14533 11.0692 2.50475 11.4493 3.11107C11.5128 3.21267 11.5895 3.21215 11.6764 3.21156L11.6966 3.21147C12.259 3.21147 12.8215 3.21052 13.3839 3.20956L13.3841 3.20956C14.7613 3.20723 16.1385 3.2049 17.5156 3.21655C18.4775 3.22475 19.1881 3.68809 19.6171 4.5503C19.6945 4.70575 19.742 4.87599 19.7896 5.04629L19.7896 5.04631C19.8115 5.12509 19.8335 5.20389 19.8585 5.28124V19.9294C19.8546 19.9382 19.8501 19.9468 19.8456 19.9555L19.8456 19.9555C19.8355 19.9748 19.8254 19.9941 19.8222 20.0146C19.6983 20.7577 19.3127 21.3284 18.6556 21.6882C18.473 21.7883 18.2694 21.85 18.0658 21.9117L18.0658 21.9118L18.0657 21.9118L18.0657 21.9118L18.0656 21.9118L18.0656 21.9118C17.9726 21.94 17.8797 21.9682 17.7887 22H6.07016C6.06057 21.9962 6.05109 21.9918 6.04164 21.9874C6.02183 21.9782 6.0021 21.9691 5.98148 21.9656C5.23647 21.8449 4.67 21.4538 4.31019 20.7979C4.21054 20.6152 4.14927 20.4114 4.08798 20.2075L4.08797 20.2074C4.05989 20.114 4.03179 20.0205 4 19.9291ZM11.8119 4.7722V5.02028C11.8119 5.54918 11.8123 6.07809 11.8127 6.607V6.6073C11.8138 7.86835 11.8149 9.12939 11.8099 10.3904C11.8048 11.6375 10.7664 12.6821 9.53112 12.7013C8.19424 12.722 7.13005 11.6789 7.12654 10.3389C7.12435 9.51408 7.12484 8.68929 7.12533 7.86463V7.86456V7.86448V7.86441C7.12555 7.51107 7.12576 7.15775 7.12576 6.80447V6.62007H8.68688V6.84041L8.68705 7.78317C8.68728 8.621 8.68752 9.45884 8.6861 10.2967C8.68571 10.5588 8.76384 10.785 8.96894 10.9526C9.21702 11.1554 9.49635 11.2019 9.78935 11.0655C10.1042 10.919 10.2507 10.6588 10.2507 10.3146C10.2511 8.51795 10.2511 6.72165 10.2503 4.92495C10.2503 4.89223 10.2462 4.85968 10.2418 4.82523L10.2418 4.82523L10.2418 4.82521C10.2396 4.80785 10.2373 4.79001 10.2355 4.77142L8.96536 4.77133C8.12469 4.77124 7.28857 4.77116 6.45263 4.77142C5.87405 4.77181 5.56268 5.08396 5.56268 5.66371C5.56229 10.292 5.56229 14.9199 5.56268 19.5481C5.56268 20.126 5.87522 20.4365 6.45654 20.4365C10.1019 20.4369 13.7468 20.4369 17.3922 20.4365C17.9845 20.4365 18.2962 20.1267 18.2962 19.536C18.2966 14.9144 18.2966 10.2928 18.2962 5.67113C18.2962 5.08083 17.9845 4.77142 17.3914 4.77142C16.198 4.77116 15.0047 4.77125 13.8113 4.77133L12.0213 4.77142C11.9572 4.7722 11.8939 4.7722 11.8119 4.7722H11.8119ZM7.13435 15.7739V14.2374H16.6847V15.7739H7.13435ZM13.5589 17.3209H7.14021V18.8586H13.5589V17.3209ZM16.6804 9.64659H13.3472V8.1093H16.6804V9.64659ZM13.3464 11.1898V12.7278H16.6796V11.1898H13.3464Z"
        fill={color}
      />
    </svg>
  );
};

export default FileIcon;