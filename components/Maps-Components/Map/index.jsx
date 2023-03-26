import { useEffect, useState } from "react";
import styles from "./Map.module.css";
const MapRoute = ({ Map = "1", checkpoint = 0 }) => {
  const [animatable, setAnimatable] = useState(false);

  useEffect(() => {
    setAnimatable(true);
    // localStorage.setItem("checkpoint", checkpoint);
  }, [checkpoint]);

  return (
    <div style={{ width: "100%", position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 758.04 173.17"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
        }}
        fill="none"
      >
        <filter
          filterUnits="objectBoundingBox"
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
        <filter
          filterUnits="objectBoundingBox"
          height="200%"
          id="AI_Shadow_None"
          width="200%"
          x="-15%"
          y="-15%"
        >
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="0" />
          <feMerge>
            <feMergeNode in="offsetBlurredAlpha" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <defs>
          <linearGradient id="SVGID_1_" gradientTransform="rotate(90)">
            <stop offset="50%" stopColor="#111029" />
            <stop offset="100%" stopColor="#45637D" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/*  1st starting Yellow Circle */}
        <circle
          fill="var(--gold-400)"
          cx="18.23"
          cy="95.76"
          r={11}
          filter="url(#AI_Shadow_2)"
        />
        {/* 1st checkpoint Route  */}
        <g filter="url(#AI_Shadow_2)">
          <path
            className={`${styles.uncompletedRoute}`}
            d="M26.14,95.76c18.83-0.67,64.5-5,83.5-15.5"
          />
          <path
            className={
              checkpoint === 1 && animatable
                ? styles.animateRoute
                : checkpoint > 0 && styles.completedRoute
            }
            strokeDasharray="85"
            strokeDashoffset="85"
            d="M26.14,95.76c18.83-0.67,64.5-5,83.5-15.5"
          />
        </g>

        {/* 2nd checkpoint Route  */}
        <g filter="url(#AI_Shadow_2)">
          <path
            className={`${styles.uncompletedRoute}`}
            d="M150.14,64.26c14.83-3.5,59.3-9.1,100.5,6.5"
          />
          <path
            className={
              checkpoint === 2 && animatable
                ? styles.animateRoute
                : checkpoint > 1 && styles.completedRoute
            }
            strokeDasharray="101"
            strokeDashoffset="101"
            d="M150.14,64.26c14.83-3.5,59.3-9.1,100.5,6.5"
          />
        </g>

        {/* 3rd checkpoint Route  */}
        <g filter="url(#AI_Shadow_2)">
          <path
            className={`${styles.uncompletedRoute}`}
            d="M289.64,88.26c8.33,6.67,29,20.5,55.5,20.5c22,0,46-38,63.5-59"
          />
          <path
            className={
              checkpoint === 3 && animatable
                ? styles.animateRoute
                : checkpoint > 2 && styles.completedRoute
            }
            strokeDasharray="149"
            strokeDashoffset="149"
            d="M289.64,88.26c8.33,6.67,29,20.5,55.5,20.5c22,0,46-38,63.5-59"
          />
        </g>
        {/* 4th checkpoint Route  */}
        <g filter="url(#AI_Shadow_2)">
          <path
            className={`${styles.uncompletedRoute}`}
            d="M461.76,44.75c28.94,19.06,38.72,163.32,152.85,70.81"
          />
          <path
            className={
              checkpoint === 4 && animatable
                ? styles.animateRoute
                : checkpoint > 3 && styles.completedRoute
            }
            strokeDasharray="215"
            strokeDashoffset="215"
            d="M461.76,44.75c28.94,19.06,38.72,163.32,152.85,70.81"
          />
        </g>

        {/* 5th checkpoint Route */}

        <g filter="url(#AI_Shadow_2)">
          <path
            className={`${styles.uncompletedRoute}`}
            d="M633.64,89.76c6.83-16.33,23.5-46.9,49.5-46.5c19.5,0.3,30.33,17.5,31.5,33.5"
          />
          <path
            className={
              checkpoint === 5 && animatable
                ? styles.animateRoute
                : checkpoint > 4 && styles.completedRoute
            }
            strokeDasharray="122"
            strokeDashoffset="122"
            d="M633.64,89.76c6.83-16.33,23.5-46.9,49.5-46.5c19.5,0.3,30.33,17.5,31.5,33.5"
          />
        </g>

        {/* Checkpoint 1 Group */}
        <g>
          <text
            className={
              checkpoint === 1 && animatable
                ? styles.checkpointTextAnimate
                : checkpoint > 0
                ? styles.checkpointTextAcheived
                : styles.checkpointTextDefault
            }
            fontWeight="bold"
            fontSize="14px"
            transform="matrix(1 0 0 1 100 128)"
          >
            checkpoint 1
          </text>

          <g
            className={
              checkpoint === 1 && animatable
                ? styles.checkpointAnimateGroup
                : checkpoint > 0
                ? styles.checkpointAcheived
                : styles.checkpointDefault
            }
          >
            <path
              className={styles.firstBox}
              d="M162.94,75.94l-30.76,28.98L103.2,74.16l30.76-28.98L162.94,75.94z"
            />
            <path
              className={styles.gradientBox}
              d="
              M158.4,75.81l-26.09,24.58L107.74,74.3l26.09-24.58L158.4,75.81z"
            />
            <path
              className={styles.star}
              d="M140.27,84.42l-6.06-2.33c-0.29-0.11-0.61-0.11-0.9,0.02l-5.97,2.55c-0.27,0.12-0.57-0.09-0.56-0.39l0.35-6.48
		c0.02-0.31-0.09-0.62-0.29-0.85l-4.27-4.88c-0.19-0.22-0.09-0.57,0.2-0.65l6.27-1.67c0.3-0.08,0.56-0.28,0.72-0.54l3.32-5.57
		c0.15-0.25,0.52-0.26,0.68-0.01l3.53,5.45c0.17,0.26,0.43,0.45,0.74,0.52l6.33,1.44c0.29,0.07,0.41,0.41,0.22,0.64l-4.09,5.04
		c-0.2,0.24-0.29,0.55-0.26,0.86l0.59,6.46C140.84,84.31,140.55,84.53,140.27,84.42z"
            />
          </g>
        </g>

        {/* Checkpoint 2 Group */}

        <g>
          <text
            className={
              checkpoint === 1 && animatable
                ? styles.checkpointTextAnimate
                : checkpoint > 0
                ? styles.checkpointTextAcheived
                : styles.checkpointTextDefault
            }
            fontWeight="bold"
            fontSize="14px"
            transform="matrix(1 0 0 1 235 132)"
          >
            checkpoint 2
          </text>

          <g
            className={
              checkpoint === 2 && animatable
                ? styles.checkpointAnimateGroup
                : checkpoint > 1
                ? styles.checkpointAcheived
                : styles.checkpointDefault
            }
          >
            <path
              className={styles.firstBox}
              d="M299.76,78.64L269,107.63l-28.98-30.76l30.76-28.98L299.76,78.64z"
            />

            <path
              className={styles.gradientBox}
              d="M295.22,78.51l-26.09,24.58L244.56,77l26.09-24.58L295.22,78.51z"
            />
            <path
              className={styles.star}
              d="M277.09,87.12l-6.06-2.33c-0.29-0.11-0.61-0.11-0.9,0.02l-5.97,2.55c-0.27,0.12-0.57-0.09-0.56-0.39
			l0.35-6.48c0.02-0.31-0.09-0.62-0.29-0.85l-4.27-4.88c-0.19-0.22-0.09-0.57,0.2-0.65l6.27-1.67c0.3-0.08,0.56-0.28,0.72-0.54
			l3.32-5.57c0.15-0.25,0.52-0.26,0.68-0.01l3.53,5.45c0.17,0.26,0.43,0.45,0.74,0.52l6.33,1.44c0.29,0.07,0.41,0.41,0.22,0.64
			l-4.09,5.04c-0.2,0.24-0.29,0.55-0.26,0.86l0.59,6.46C277.65,87.01,277.36,87.23,277.09,87.12z"
            />
          </g>
        </g>

        {/* Checkpoint 3 Group */}
        <g>
          <text
            className={
              checkpoint === 3 && animatable
                ? styles.checkpointTextAnimate
                : checkpoint > 2
                ? styles.checkpointTextAcheived
                : styles.checkpointTextDefault
            }
            fontWeight="bold"
            fontSize="14px"
            transform="matrix(1 0 0 1 400 100)"
          >
            checkpoint 3
          </text>
          <g
            className={
              checkpoint === 3 && animatable
                ? styles.checkpointAnimateGroup
                : checkpoint > 2
                ? styles.checkpointAcheived
                : styles.checkpointDefault
            }
          >
            <path
              className={styles.firstBox}
              strokeWidth="1.6"
              d="M468.16,47.41L437.4,76.39l-28.98-30.76l30.76-28.98L468.16,47.41z"
            />

            <path
              className={styles.gradientBox}
              d="
              M463.62,47.27l-26.09,24.58l-24.58-26.09l26.09-24.58L463.62,47.27z"
            />
            <path
              className={styles.star}
              d="M445.49,55.88l-6.06-2.33c-0.29-0.11-0.61-0.11-0.9,0.02l-5.97,2.55c-0.27,0.12-0.57-0.09-0.56-0.39l0.35-6.48
		c0.02-0.31-0.09-0.62-0.29-0.85l-4.27-4.88c-0.19-0.22-0.09-0.57,0.2-0.65l6.27-1.67c0.3-0.08,0.56-0.28,0.72-0.54l3.32-5.57
		c0.15-0.25,0.52-0.26,0.68-0.01l3.53,5.45c0.17,0.26,0.43,0.45,0.74,0.52l6.33,1.44c0.29,0.07,0.41,0.41,0.22,0.64l-4.09,5.04
		c-0.2,0.24-0.29,0.55-0.26,0.86l0.59,6.46C446.05,55.77,445.76,55.99,445.49,55.88z"
            />
          </g>
        </g>

        {/* Checkpoint 4 Group */}
        <g>
          <text
            className={
              checkpoint === 4 && animatable
                ? styles.checkpointTextAnimate
                : checkpoint > 3
                ? styles.checkpointTextAcheived
                : styles.checkpointTextDefault
            }
            fontWeight="bold"
            fontSize="14px"
            transform="matrix(1 0 0 1 590 165)"
          >
            checkpoint 4
          </text>
          <g
            className={
              checkpoint === 4 && animatable
                ? styles.checkpointAnimateGroup
                : checkpoint > 3
                ? styles.checkpointAcheived
                : styles.checkpointDefault
            }
          >
            <path
              className={styles.firstBox}
              d="M655.43,110.55l-30.76,28.98l-28.98-30.76l30.76-28.98L655.43,110.55z"
            />
            <path
              className={styles.gradientBox}
              d="
              M650.89,110.41l-26.09,24.58l-24.58-26.09l26.09-24.58L650.89,110.41z"
            />
            <path
              className={styles.star}
              d="M632.76,119.02l-6.06-2.33c-0.29-0.11-0.61-0.11-0.9,0.02l-5.97,2.55c-0.27,0.12-0.57-0.09-0.56-0.39
			l0.35-6.48c0.02-0.31-0.09-0.62-0.29-0.85l-4.27-4.88c-0.19-0.22-0.09-0.57,0.2-0.65l6.27-1.67c0.3-0.08,0.56-0.28,0.72-0.54
			l3.32-5.57c0.15-0.25,0.52-0.26,0.68-0.01l3.53,5.45c0.17,0.26,0.43,0.45,0.74,0.52l6.33,1.44c0.29,0.07,0.41,0.41,0.22,0.64
			l-4.09,5.04c-0.2,0.24-0.29,0.55-0.26,0.86l0.59,6.46C633.33,118.91,633.04,119.13,632.76,119.02z"
            />
          </g>
        </g>

        {/* Claim reward */}

        <g>
          <text
            className={
              checkpoint === 5 && animatable
                ? styles.checkpointTextAnimate
                : checkpoint > 6
                ? styles.checkpointTextAcheived
                : styles.checkpointTextDefault
            }
            fontWeight="bold"
            fontSize="12px"
            transform="matrix(1 0 0 1 680 130)"
          >
            Claim Reward
          </text>
          <g
            className={
              checkpoint === 4 && animatable
                ? styles.checkpointAnimateGroup
                : checkpoint > 3
                ? styles.checkpointAcheived
                : styles.checkpointDefault
            }
          >
            <circle
              className={
                checkpoint === 5 && animatable
                  ? styles.checkpointTextAnimate
                  : checkpoint > 6
                  ? styles.checkpointTextAcheived
                  : styles.checkpointTextDefault
              }
              cx="721.45"
              cy="92.49"
              r="7"
            />
            <circle
              className={
                checkpoint === 5 && animatable
                  ? styles.circleAnimate
                  : checkpoint > 6
                  ? styles.circleAcheived
                  : styles.circleDefault
              }

              strokeWidth="3"
              cx="721.45"
              cy="92.49"
              r="15.36"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MapRoute;
