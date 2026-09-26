import React from "react";

interface ABNIndustrialBackgroundProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ABNIndustrialBackground: React.FC<ABNIndustrialBackgroundProps> = ({
  width = "100%",
  height = "100%",
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="ABN Automation Bro Industrial Background"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* =========================================================
TRANSPARENT BACKGROUND
========================================================= */}

      <rect x="0" y="0" width="1600" height="900" fill="transparent" />

      {/* =========================================================
      SOFT INDUSTRIAL GLOW
  ========================================================= */}

      <defs>
        <linearGradient
          id="abnIndustrialGradient"
          x1="0"
          y1="0"
          x2="1600"
          y2="900"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="currentColor" stopOpacity="0.02" />
          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.005" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>

        <linearGradient
          id="abnIndustrialWave"
          x1="200"
          y1="650"
          x2="1450"
          y2="900"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.12" />
          <stop offset="1" stopColor="#0F766E" stopOpacity="0.025" />
        </linearGradient>

        <linearGradient
          id="abnWatermarkGradient"
          x1="500"
          y1="300"
          x2="1100"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0F766E" stopOpacity="0.13" />
          <stop offset="0.5" stopColor="#14B8A6" stopOpacity="0.18" />
          <stop offset="1" stopColor="#0F766E" stopOpacity="0.10" />
        </linearGradient>

        <pattern
          id="abnIndustrialGrid"
          width="42"
          height="42"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M42 0H0V42"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.035"
          />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill="url(#abnIndustrialGradient)" />

      <rect width="1600" height="900" fill="url(#abnIndustrialGrid)" />

      {/* =========================================================
      INDUSTRIAL WATERMARK - ABN AUTOMATION BRO
  ========================================================= */}

      <g
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        pointerEvents="none"
      >
        {/* ABN Brand Mark */}
        <text
          x="800"
          y="405"
          fontSize="170"
          fontWeight="900"
          letterSpacing="12"
          fill="url(#abnWatermarkGradient)"
        >
          ABN
        </text>

        {/* Brand Underline */}
        <path
          d="M585 435H1015"
          stroke="#14B8A6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.16"
        />

        {/* Brand Name */}
        <text
          x="800"
          y="485"
          fontSize="36"
          fontWeight="600"
          letterSpacing="9"
          fill="currentColor"
          fillOpacity="0.13"
        >
          AUTOMATION BRO
        </text>

        {/* Industrial Intelligence Caption */}
        <text
          x="800"
          y="525"
          fontSize="13"
          fontWeight="600"
          letterSpacing="5"
          fill="currentColor"
          fillOpacity="0.10"
        >
          INDUSTRIAL INTELLIGENCE
        </text>
      </g>

      {/* =========================================================
      INDUSTRIAL ENVIRONMENT
  ========================================================= */}

      <g stroke="currentColor" fill="currentColor" strokeLinejoin="round">
        {/* =======================================================
        DISTANT INDUSTRIAL SKYLINE
    ======================================================= */}

        <g opacity="0.055">
          <path
            d="
          M0 680
          L0 620
          L65 620
          L65 590
          L110 590
          L110 645
          L160 645
          L160 600
          L210 600
          L210 655
          L260 655
          L260 610
          L315 610
          L315 665
          L380 665
          L380 625
          L430 625
          L430 680
          Z
        "
            strokeWidth="2"
          />

          <path
            d="
          M950 690
          L950 635
          L1000 635
          L1000 605
          L1045 605
          L1045 655
          L1100 655
          L1100 615
          L1150 615
          L1150 670
          L1210 670
          L1210 625
          L1260 625
          L1260 680
          L1320 680
          L1320 640
          L1370 640
          L1370 690
          Z
        "
            strokeWidth="2"
          />
        </g>

        {/* =======================================================
        MAIN FACTORY STRUCTURE
    ======================================================= */}

        <g opacity="0.12">
          <path
            d="
          M0 735
          L0 660
          L95 660
          L95 625
          L175 625
          L175 675
          L260 675
          L260 640
          L350 640
          L350 735
          Z
        "
            strokeWidth="3"
          />

          {/* Factory Roof */}
          <path
            d="
          M0 660
          L95 660
          L95 625
          L175 625
          L175 675
          L260 675
          L260 640
          L350 640
        "
            strokeWidth="4"
            fill="none"
          />

          {/* Factory Windows */}
          <path
            d="
          M25 690H55V720H25Z
          M75 690H105V720H75Z
          M125 690H155V720H125Z
          M205 690H235V720H205Z
          M275 680H305V720H275Z
        "
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* =======================================================
        INDUSTRIAL CHIMNEYS
    ======================================================= */}

        <g opacity="0.16">
          <path
            d="
          M85 660
          L85 450
          L135 450
          L135 660
          Z
        "
            strokeWidth="3"
          />

          <path
            d="
          M75 450H145
          M85 475H135
          M85 535H135
          M85 595H135
        "
            strokeWidth="3"
            fill="none"
          />

          <path
            d="
          M185 675
          L185 515
          L225 515
          L225 675
          Z
        "
            strokeWidth="3"
          />

          <path
            d="
          M175 515H235
          M185 550H225
          M185 610H225
        "
            strokeWidth="3"
            fill="none"
          />

          <path
            d="
          M285 675
          L285 570
          L320 570
          L320 675
          Z
        "
            strokeWidth="3"
          />

          <path d="M278 570H327" strokeWidth="3" fill="none" />
        </g>

        {/* =======================================================
        STORAGE TANKS
    ======================================================= */}

        <g opacity="0.13">
          {/* Tank 1 */}
          <rect
            x="365"
            y="615"
            width="95"
            height="120"
            rx="8"
            strokeWidth="3"
          />

          <path
            d="
          M365 635H460
          M365 700H460
          M385 615V735
          M440 615V735
        "
            strokeWidth="2"
            fill="none"
          />

          {/* Tank 2 */}
          <rect x="480" y="650" width="75" height="85" rx="8" strokeWidth="3" />

          <path
            d="
          M480 670H555
          M480 710H555
        "
            strokeWidth="2"
            fill="none"
          />

          {/* Tank 3 */}
          <path
            d="
          M580 655
          A45 15 0 0 1 670 655
          L670 735
          L580 735
          Z
        "
            strokeWidth="3"
          />

          <path
            d="
          M580 655
          A45 15 0 0 0 670 655
          M580 690H670
        "
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* =======================================================
        PIPELINE NETWORK
    ======================================================= */}

        <g opacity="0.17" fill="none" strokeWidth="7" strokeLinecap="round">
          <path
            d="
          M0 755
          H380
          V720
          H550
          V750
          H710
        "
          />

          <path
            d="
          M40 780
          H290
          V805
          H510
        "
          />

          <path
            d="
          M200 735
          V760
          H260
        "
          />

          <path
            d="
          M420 735
          V680
          H510
          V735
        "
          />
        </g>

        {/* =======================================================
        HARBOR CRANES
    ======================================================= */}

        <g opacity="0.13" fill="none" strokeWidth="4">
          {/* Crane 1 */}
          <path
            d="
          M1050 730
          V590
          L1120 540
          L1210 590
          H1050
        "
          />

          <path
            d="
          M1080 570V730
          M1120 540V730
          M1160 565V730
          M1035 730H1220
        "
          />

          {/* Crane 2 */}
          <path
            d="
          M1300 735
          V620
          L1350 580
          L1435 620
          H1300
        "
          />

          <path
            d="
          M1325 600V735
          M1350 580V735
          M1390 600V735
          M1285 735H1450
        "
          />
        </g>

        {/* =======================================================
        DISTANT CARGO SHIP
    ======================================================= */}

        <g opacity="0.10">
          <path
            d="
          M700 755
          H1030
          L985 800
          H760
          Z
        "
            strokeWidth="3"
          />

          <rect x="785" y="710" width="55" height="45" strokeWidth="2" />

          <rect x="845" y="690" width="55" height="65" strokeWidth="2" />

          <rect x="905" y="715" width="55" height="40" strokeWidth="2" />

          <path
            d="
          M700 755H1030
          M750 770H1005
        "
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* =======================================================
        INDUSTRIAL GEAR - RIGHT SIDE
    ======================================================= */}

        <g
          transform="translate(1450 700)"
          opacity="0.10"
          fill="none"
          strokeWidth="16"
        >
          <circle r="105" />

          <circle r="55" strokeWidth="10" />

          <path
            d="
          M0 -145V-105
          M0 105V145
          M-145 0H-105
          M105 0H145

          M-103 -103L-75 -75
          M75 75L103 103

          M103 -103L75 -75
          M-75 75L-103 103
        "
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* =========================================================
      INDUSTRIAL FOREGROUND WAVES
  ========================================================= */}

      <path
        d="
      M0 770
      C250 710 440 850 700 800
      C1000 740 1240 690 1600 755
      V900
      H0
      Z
    "
        fill="url(#abnIndustrialWave)"
      />

      <path
        d="
      M0 805
      C280 745 480 880 760 830
      C1080 775 1300 740 1600 800
    "
        stroke="#14B8A6"
        strokeWidth="2"
        strokeOpacity="0.10"
      />

      <path
        d="
      M0 850
      C300 800 500 920 850 865
      C1150 820 1390 800 1600 840
    "
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.06"
      />

      {/* =========================================================
      TECHNICAL ACCENT PARTICLES
  ========================================================= */}

      <g fill="#14B8A6">
        <circle cx="250" cy="230" r="4" opacity="0.22" />
        <circle cx="320" cy="250" r="2.5" opacity="0.18" />
        <circle cx="1280" cy="190" r="4" opacity="0.20" />
        <circle cx="1350" cy="220" r="2.5" opacity="0.16" />
        <circle cx="1180" cy="460" r="3" opacity="0.15" />
        <circle cx="410" cy="490" r="3" opacity="0.13" />
        <circle cx="950" cy="600" r="2.5" opacity="0.16" />
      </g>

      {/* =========================================================
      EDGE DECORATIVE ORBIT
  ========================================================= */}

      <g
        transform="translate(800 450)"
        stroke="#14B8A6"
        fill="none"
        opacity="0.045"
      >
        <ellipse rx="510" ry="300" strokeWidth="1.5" />

        <ellipse rx="580" ry="350" strokeWidth="1" strokeDasharray="8 12" />
      </g>
    </svg>
  );
};

export default ABNIndustrialBackground;
