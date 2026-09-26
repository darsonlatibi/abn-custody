import React from "react";

interface CementIndustryProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const CementIndustry: React.FC<CementIndustryProps> = ({
  width = "100%",
  height = "100%",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Cement Preheater"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* =========================================================
          TRANSPARENT BACKGROUND
      ========================================================= */}

      <rect x="0" y="0" width="400" height="600" fill="transparent" />

      {/* =========================================================
          PREHEATER BACKGROUND
      ========================================================= */}

      <g transform="translate(70 55)" stroke="currentColor" fill="currentColor">
        {/* =======================================================
            MAIN PREHEATER TOWER
        ======================================================= */}

        <path
          d="
            M80 430
            L80 125
            L230 125
            L230 430
          "
          strokeWidth="5"
          fillOpacity="0.025"
        />

        {/* =======================================================
            TOP / PREHEATER CAP
        ======================================================= */}

        <path
          d="
            M80 125
            L155 35
            L230 125
          "
          strokeWidth="5"
          fillOpacity="0.035"
        />

        {/* =======================================================
            PREHEATER CYCLONE / STAGE 1
        ======================================================= */}

        <path
          d="
            M105 155
            L205 155
            L195 215
            L115 215
            Z
          "
          strokeWidth="3"
          fillOpacity="0.025"
        />

        <circle cx="155" cy="185" r="20" strokeWidth="3" fill="none" />

        {/* =======================================================
            PREHEATER CYCLONE / STAGE 2
        ======================================================= */}

        <path
          d="
            M105 235
            L205 235
            L195 295
            L115 295
            Z
          "
          strokeWidth="3"
          fillOpacity="0.025"
        />

        <circle cx="155" cy="265" r="20" strokeWidth="3" fill="none" />

        {/* =======================================================
            PREHEATER CYCLONE / STAGE 3
        ======================================================= */}

        <path
          d="
            M105 315
            L205 315
            L195 375
            L115 375
            Z
          "
          strokeWidth="3"
          fillOpacity="0.025"
        />

        <circle cx="155" cy="345" r="20" strokeWidth="3" fill="none" />

        {/* =======================================================
            BOTTOM STAGE
        ======================================================= */}

        <path
          d="
            M95 395
            L215 395
            L200 450
            L110 450
            Z
          "
          strokeWidth="3"
          fillOpacity="0.025"
        />

        {/* =======================================================
            INTERNAL PROCESS LINES
        ======================================================= */}

        <line
          x1="105"
          y1="225"
          x2="205"
          y2="225"
          strokeWidth="2"
          opacity="0.35"
        />

        <line
          x1="105"
          y1="305"
          x2="205"
          y2="305"
          strokeWidth="2"
          opacity="0.35"
        />

        <line
          x1="95"
          y1="385"
          x2="215"
          y2="385"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* =======================================================
            CENTRAL GAS / MATERIAL RISER
        ======================================================= */}

        <path
          d="
            M145 450
            L145 120
          "
          strokeWidth="4"
          opacity="0.35"
          strokeDasharray="8 8"
        />

        {/* =======================================================
            TOP GAS FLOW
        ======================================================= */}

        <path
          d="
            M155 35
            L155 10
          "
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* =======================================================
            SIDE PROCESS PIPE
        ======================================================= */}

        <path
          d="
            M230 180
            L285 180
            L285 430
          "
          strokeWidth="4"
          opacity="0.45"
        />

        <path
          d="
            M80 260
            L35 260
            L35 430
          "
          strokeWidth="4"
          opacity="0.35"
        />

        {/* =======================================================
            FLOW PARTICLES
        ======================================================= */}

        <circle cx="155" cy="420" r="5">
          <animate
            attributeName="cy"
            from="430"
            to="120"
            dur="4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15;0.65;0.15"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="155" cy="350" r="4">
          <animate
            attributeName="cy"
            from="420"
            to="100"
            dur="3.5s"
            begin="1s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.55;0.1"
            dur="3.5s"
            begin="1s"
            repeatCount="indefinite"
          />
        </circle>

        <circle cx="155" cy="280" r="3">
          <animate
            attributeName="cy"
            from="400"
            to="80"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.5;0.1"
            dur="3s"
            begin="2s"
            repeatCount="indefinite"
          />
        </circle>

        {/* =======================================================
            BOTTOM MATERIAL FLOW
        ======================================================= */}

        <path
          d="
            M155 450
            L155 500
          "
          strokeWidth="6"
          strokeDasharray="10 8"
          opacity="0.4"
        />

        {/* =======================================================
            BASE
        ======================================================= */}

        <path
          d="
            M65 455
            L245 455
          "
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.35"
        />

        <path
          d="
            M90 455
            L90 485
            M220 455
            L220 485
          "
          strokeWidth="4"
          opacity="0.3"
        />

        <path
          d="
            M70 485
            L240 485
          "
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>

      {/* =========================================================
          SOFT DECORATIVE GLOW
      ========================================================= */}

      <circle cx="200" cy="300" r="150" fill="currentColor" opacity="0.015" />

      <circle cx="200" cy="300" r="110" fill="currentColor" opacity="0.015" />
    </svg>
  );
};

export default CementIndustry;
