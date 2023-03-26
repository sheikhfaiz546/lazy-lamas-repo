import React from "react";

const Timer = ({ percentage = 40 }) => {
  return (
    <div style={{ width: "fit-content" }}>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 65.36 79.49"
        style={{
          width: "40px",
          aspectRatio: "65/79",
          overflow: "visible"
        }}
      >
        <filter
          filterUnits="objectBoundingBox"
          // filterUnits="userSpaceOnUse"
          height="200%"
          id="AI_Shadow_2"
          width="200%"
          x="-15%"
          y="-15%"
        >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4" />
          <feMerge>
            <feMergeNode in="offsetBlurredAlpha" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <g id="Hourse">
          <path
            fill="var(--gold-400)"
            d="M1403.81,202.13v3.27c-.31,0-.61,0-.92,0s-.62,0-.93,0v-3.27Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1402.86,246.16c.31,0,.61,0,.92,0v3.27h-1.85v-3.27Q1402.4,246.16,1402.86,246.16Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1391.88,243c.52.33,1,.64,1.6.92l-1.63,2.83-1.6-.93Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1415.47,205.79l-1.63,2.82c-.52-.33-1-.64-1.6-.92l1.63-2.82Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1384.77,235.16c.28.55.59,1.08.92,1.6l-2.82,1.63-.93-1.6Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1423.77,214.77,1421,216.4c-.28-.55-.59-1.08-.92-1.6l2.82-1.63Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1382.54,224.83c0,.3,0,.61,0,.92s0,.62,0,.93h-3.27v-1.85Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1426.48,224.86v1.85h-3.27q0-.47,0-.93c0-.31,0-.62,0-.92Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1382.9,213.14l2.82,1.63c-.33.52-.64,1-.92,1.6l-2.83-1.63Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1423.77,236.79l-.92,1.6-2.82-1.63c.33-.52.64-1,.92-1.6Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1391.88,204.84l1.63,2.82c-.55.28-1.08.59-1.6.92l-1.63-2.82Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="var(--gold-400)"
            d="M1415.47,245.77l-1.6.93-1.63-2.83c.55-.28,1.08-.59,1.6-.92Z"
            transform="translate(-1370.19 -178.96)"
          />
        </g>

        <g id="Minutes">
          <path
            fill="#fff"
            d="M1396.26,204.49l-.41-1.28-.55.18.42,1.28C1395.9,204.61,1396.08,204.54,1396.26,204.49Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1394.07,205.3l-.54-1.23-.53.23.55,1.23Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1398.52,203.92l-.28-1.32-.56.12L1398,204C1398.15,204,1398.33,204,1398.52,203.92Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1390,207.58l-.79-1.09-.46.34.79,1.08Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1400.83,203.59l-.14-1.34-.57.06.14,1.34Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1382.64,216.44l-1.23-.54-.23.52,1.22.55Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1381.78,218.61l-1.28-.42-.18.55,1.27.41Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1405.49,203.65l.14-1.34-.57-.06-.15,1.34A5.42,5.42,0,0,1,1405.49,203.65Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1381.15,220.85l-1.32-.28-.12.57,1.31.28C1381.06,221.23,1381.1,221,1381.15,220.85Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1388.18,209l-.9-1-.43.39.91,1Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1386.51,210.65l-1-.9-.38.42,1,.91Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1385,212.44l-1.09-.79-.34.46,1.1.8C1384.8,212.75,1384.9,212.59,1385,212.44Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1407.78,204l.28-1.32-.56-.12-.28,1.32C1407.41,204,1407.6,204,1407.78,204Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1421.06,212.91l1.09-.8-.34-.46-1.08.79Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1424.15,219.15l1.28-.41-.18-.55-1.28.42Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1423.34,217l1.23-.55-.24-.52-1.23.54Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1424.72,221.42l1.32-.28-.12-.57-1.32.28Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1425.05,223.72l1.34-.14-.06-.57-1.34.14Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1418,209.41l.9-1-.43-.39-.9,1Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1412.19,205.53l.55-1.23-.52-.23-.55,1.23Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1410,204.67l.41-1.28-.54-.18-.42,1.28C1409.67,204.54,1409.85,204.61,1410,204.67Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1416.2,207.91l.79-1.08-.47-.34-.79,1.09Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1419.61,211.08l1-.91-.39-.42-1,.9C1419.36,210.79,1419.49,210.93,1419.61,211.08Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1380.75,223.15l-1.34-.14-.06.57,1.34.14Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1415.73,244l.79,1.09.47-.33-.79-1.09Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1417.56,242.51l.9,1,.43-.38-.9-1Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1419.23,240.88l1,.9.39-.42-1-.91C1419.49,240.6,1419.36,240.74,1419.23,240.88Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1411.67,246.23l.55,1.23.52-.23-.55-1.23Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1407.22,247.61l.28,1.32.56-.12-.28-1.32C1407.6,247.53,1407.41,247.58,1407.22,247.61Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1409.48,247l.42,1.28.54-.18-.41-1.28C1409.85,246.92,1409.67,247,1409.48,247Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1425,228.38l1.34.14.06-.57-1.34-.14Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1424.6,230.68l1.32.28.12-.56-1.32-.28Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1404.91,248l.15,1.34.57-.06-.14-1.35Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1423.1,235.09l1.23.55.24-.53-1.23-.55Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1420.73,239.09l1.08.79.34-.46-1.09-.8Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1424,232.92l1.28.42.18-.55-1.28-.41Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1389.55,243.62l-.79,1.09.46.33L1390,244Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1384.69,238.62l-1.1.8.34.46,1.09-.79C1384.9,238.94,1384.8,238.78,1384.69,238.62Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1386.13,240.45l-1,.91.38.42,1-.9Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1382.4,234.56l-1.22.55.23.53,1.23-.55Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1381.59,232.38l-1.27.41.18.55,1.28-.42Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1381,230.12l-1.31.28.12.56,1.32-.28C1381.1,230.49,1381.06,230.3,1381,230.12Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1400.26,247.88l-.14,1.35.57.06.14-1.34Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1395.72,246.86l-.42,1.28.55.18.41-1.28C1396.08,247,1395.9,246.92,1395.72,246.86Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1398,247.49l-.28,1.32.56.12.28-1.32C1398.33,247.58,1398.15,247.53,1398,247.49Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1380.69,227.81l-1.34.14.06.57,1.34-.14Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1393.55,246l-.55,1.23.53.23.54-1.23Z"
            transform="translate(-1370.19 -178.96)"
          />
          <path
            fill="#fff"
            d="M1387.76,242.12l-.91,1,.43.38.9-1Z"
            transform="translate(-1370.19 -178.96)"
          />
        </g>

        {/* 181 is length of circle  */}
        <g transform="rotate(-90,32 47)">
          <circle
            clipPath="circle()"
            stroke="var(--gold-400)"
            strokeWidth="57.7"
            cx="32.68"
            cy="46.81"
            r="28.85"
            fill="none"

            strokeDasharray={`${(percentage * 181) / 100} 181`}
          />
        </g>
        <g filter="url(#AI_Shadow_2)">
          <path
            fill="#fff"
            d="M1402.87,198.09a27.68,27.68,0,1,1-27.68,27.68,27.7,27.7,0,0,1,27.68-27.68m0-5a32.68,32.68,0,1,0,32.68,32.68,32.68,32.68,0,0,0-32.68-32.68Z"
            transform="translate(-1370.19 -178.96)"
          />
          <polygon
            fill="#fff"
            points="39.77 0 25.6 0 25.6 10 29.81 10 29.81 13 35.68 13 35.68 10 39.77 10 39.77 0 39.77 0"
          />
          <polygon
            fill="#fff"
            points="18.93 8.46 11.11 12.35 13.95 18.07 21.78 14.19 18.93 8.46 18.93 8.46"
          />
        </g>
      </svg>
      <p style={{ textAlign: "center",marginTop:"10px" }}>timer</p>
    </div>
  );
};

export default Timer;

