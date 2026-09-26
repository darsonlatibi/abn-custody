import React from "react";

interface OilAndGasBackgroundProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const OilAndGasBackground: React.FC<OilAndGasBackgroundProps> = ({
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
      aria-label="ABN Automation Bro Custody Metering System Background"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* =========================================================
      TRANSPARENT BACKGROUND
      ========================================================= */}

      <rect x="0" y="0" width="1600" height="900" fill="transparent" />

      {/* =========================================================
      DEFINITIONS
      ========================================================= */}

      <defs>
        {/* Industrial Gradient */}

        <linearGradient
          id="abnOilGasGradient"
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

        {/* Bottom Energy Wave */}

        <linearGradient
          id="abnOilGasWave"
          x1="200"
          y1="650"
          x2="1450"
          y2="900"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.12" />

          <stop offset="1" stopColor="#0F766E" stopOpacity="0.025" />
        </linearGradient>

        {/* ABN Watermark */}

        <linearGradient
          id="abnOilGasWatermark"
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

        {/* Technical Grid */}

        <pattern
          id="abnOilGasGrid"
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

        {/* Meter Glow */}

        <radialGradient
          id="abnMeterGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(800 610) rotate(90) scale(170 300)"
        >
          <stop offset="0" stopColor="#14B8A6" stopOpacity="0.10" />

          <stop offset="1" stopColor="#14B8A6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* =========================================================
      SVG ANIMATION STYLES
      ========================================================= */}

      <style>
        {`
          @keyframes abnOilFlow {
            from {
              stroke-dashoffset: 0;
            }

            to {
              stroke-dashoffset: -80;
            }
          }

          @keyframes abnOilFlowFast {
            from {
              stroke-dashoffset: 0;
            }

            to {
              stroke-dashoffset: -60;
            }
          }

          @keyframes abnMeterPulse {
            0%,
            100% {
              opacity: 0.16;
              transform: scale(1);
            }

            50% {
              opacity: 0.32;
              transform: scale(1.018);
            }
          }

          @keyframes abnSignalPulse {
            0%,
            100% {
              opacity: 0.10;
            }

            50% {
              opacity: 0.32;
            }
          }

          @keyframes abnStatusPulse {
            0%,
            100% {
              opacity: 0.20;
            }

            50% {
              opacity: 0.70;
            }
          }

          .abn-oil-flow {
            stroke-dasharray: 18 14;
            animation: abnOilFlow 2.2s linear infinite;
          }

          .abn-oil-flow-fast {
            stroke-dasharray: 10 12;
            animation: abnOilFlowFast 1.25s linear infinite;
          }

          .abn-meter-pulse {
            transform-box: fill-box;
            transform-origin: center;
            animation: abnMeterPulse 2.8s ease-in-out infinite;
          }

          .abn-signal-pulse {
            animation: abnSignalPulse 1.8s ease-in-out infinite;
          }

          .abn-status-pulse {
            animation: abnStatusPulse 1.6s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .abn-oil-flow,
            .abn-oil-flow-fast,
            .abn-meter-pulse,
            .abn-signal-pulse,
            .abn-status-pulse {
              animation: none;
            }
          }
        `}
      </style>

      {/* =========================================================
      BASE
      ========================================================= */}

      <rect width="1600" height="900" fill="url(#abnOilGasGradient)" />

      <rect width="1600" height="900" fill="url(#abnOilGasGrid)" />

      {/* =========================================================
      CUSTODY METERING SYSTEM GLOW
      ========================================================= */}

      <ellipse cx="800" cy="610" rx="320" ry="180" fill="url(#abnMeterGlow)" />

      {/* =========================================================
      ABN WATERMARK
      ========================================================= */}

      <g
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        pointerEvents="none"
      >
        <text
          x="800"
          y="395"
          fontSize="170"
          fontWeight="900"
          letterSpacing="12"
          fill="url(#abnOilGasWatermark)"
        >
          ABN
        </text>

        <path
          d="M560 425H1040"
          stroke="#14B8A6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.16"
        />

        <text
          x="800"
          y="475"
          fontSize="36"
          fontWeight="600"
          letterSpacing="9"
          fill="currentColor"
          fillOpacity="0.13"
        >
          AUTOMATION BRO
        </text>

        <text
          x="800"
          y="515"
          fontSize="13"
          fontWeight="600"
          letterSpacing="5"
          fill="currentColor"
          fillOpacity="0.10"
        >
          CUSTODY METERING SYSTEM
        </text>
      </g>

      {/* =========================================================
      INDUSTRIAL / OIL & GAS ENVIRONMENT
      ========================================================= */}

      <g stroke="currentColor" fill="currentColor" strokeLinejoin="round">
        {/* =======================================================
        DISTANT REFINERY
        ======================================================= */}

        <g opacity="0.055">
          <path
            d="
              M0 690
              L0 625
              L70 625
              L70 585
              L120 585
              L120 640
              L175 640
              L175 600
              L225 600
              L225 655
              L285 655
              L285 610
              L340 610
              L340 680
              L410 680
              L410 625
              L465 625
              L465 690
              Z
            "
            strokeWidth="2"
          />

          <path
            d="
              M1160 690
              L1160 630
              L1210 630
              L1210 595
              L1260 595
              L1260 650
              L1315 650
              L1315 610
              L1365 610
              L1365 660
              L1420 660
              L1420 620
              L1470 620
              L1470 680
              L1530 680
              L1530 635
              L1600 635
              L1600 690
              Z
            "
            strokeWidth="2"
          />
        </g>

        {/* =======================================================
        STORAGE TANKS
        ======================================================= */}

        <g opacity="0.13">
          <rect
            x="90"
            y="590"
            width="130"
            height="145"
            rx="12"
            strokeWidth="3"
          />

          <path
            d="
              M90 620H220
              M90 690H220
              M115 590V735
              M195 590V735
            "
            strokeWidth="2"
            fill="none"
          />

          <path
            d="
              M105 590
              Q155 550 205 590
            "
            strokeWidth="3"
            fill="none"
          />

          <rect
            x="250"
            y="625"
            width="95"
            height="110"
            rx="10"
            strokeWidth="3"
          />

          <path
            d="
              M250 655H345
              M250 700H345
            "
            strokeWidth="2"
            fill="none"
          />

          <rect x="370" y="650" width="75" height="85" rx="8" strokeWidth="3" />

          <path
            d="
              M370 675H445
              M370 705H445
            "
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* =======================================================
        CUSTODY METERING SKID
        ======================================================= */}

        <g opacity="0.19">
          {/* Skid Base */}

          <rect
            x="575"
            y="700"
            width="500"
            height="40"
            rx="6"
            strokeWidth="4"
            fill="none"
          />

          {/* Main Meter Run */}

          <path
            d="
              M520 650
              H600
              V610
              H1000
              V650
              H1120
            "
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Animated Flow Overlay */}

          <path
            d="
              M430 650
              H600
              V610
              H1000
              V650
              H1180
            "
            fill="none"
            stroke="#14B8A6"
            strokeWidth="4"
            strokeOpacity="0.34"
            strokeLinecap="round"
            className="abn-oil-flow"
          />

          <path
            d="
              M470 650
              H600
              V610
              H1000
              V650
              H1150
            "
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2"
            strokeOpacity="0.46"
            strokeLinecap="round"
            className="abn-oil-flow-fast"
          />

          {/* Meter Body */}

          <rect
            x="680"
            y="565"
            width="240"
            height="90"
            rx="18"
            strokeWidth="4"
            fill="none"
            className="abn-meter-pulse"
          />

          {/* Meter Internal */}

          <ellipse
            cx="800"
            cy="610"
            rx="65"
            ry="30"
            strokeWidth="3"
            fill="none"
          />

          <ellipse
            cx="800"
            cy="610"
            rx="35"
            ry="16"
            strokeWidth="2"
            fill="none"
          />

          {/* Meter Direction */}

          <path
            d="
              M720 610H755
              M845 610H880
            "
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="
              M745 600L760 610L745 620
              M855 600L840 610L855 620
            "
            strokeWidth="2"
            fill="none"
          />

          {/* Metering Pipes */}

          <path
            d="
              M620 610V690
              M670 610V690
              M930 610V690
              M980 610V690
            "
            strokeWidth="5"
            fill="none"
          />

          {/* Skid Legs */}

          <path
            d="
              M620 700V760
              M670 700V760
              M930 700V760
              M980 700V760
            "
            strokeWidth="5"
            fill="none"
          />

          {/* Skid Feet */}

          <path
            d="
              M600 760H690
              M910 760H1000
            "
            strokeWidth="5"
            fill="none"
          />
        </g>

        {/* =======================================================
        FLOW PARTICLES
        ======================================================= */}

        <g fill="#14B8A6" pointerEvents="none">
          <circle r="4" opacity="0.48">
            <animateMotion
              dur="3.2s"
              repeatCount="indefinite"
              path="
                M430 650
                H600
                V610
                H1000
                V650
                H1180
              "
            />
          </circle>

          <circle r="3" opacity="0.36">
            <animateMotion
              dur="2.4s"
              begin="0.7s"
              repeatCount="indefinite"
              path="
                M430 650
                H600
                V610
                H1000
                V650
                H1180
              "
            />
          </circle>

          <circle r="2.5" opacity="0.32">
            <animateMotion
              dur="2.8s"
              begin="1.4s"
              repeatCount="indefinite"
              path="
                M430 650
                H600
                V610
                H1000
                V650
                H1180
              "
            />
          </circle>

          <circle r="2" opacity="0.26">
            <animateMotion
              dur="3.8s"
              begin="1.9s"
              repeatCount="indefinite"
              path="
                M430 650
                H600
                V610
                H1000
                V650
                H1180
              "
            />
          </circle>
        </g>

        {/* =======================================================
        DIGITAL FLOW METER
        ======================================================= */}

        <g transform="translate(755 570)" pointerEvents="none">
          {/* Display */}

          <rect
            x="0"
            y="0"
            width="90"
            height="42"
            rx="5"
            fill="currentColor"
            fillOpacity="0.045"
            stroke="#14B8A6"
            strokeWidth="1.5"
            strokeOpacity="0.30"
          />

          {/* FLOW */}

          <text
            x="45"
            y="11"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="7"
            fontWeight="600"
            letterSpacing="2"
            fill="#14B8A6"
            fillOpacity="0.70"
          >
            FLOW
          </text>

          {/* Reading */}

          <text
            x="45"
            y="26"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="13"
            fontWeight="700"
            letterSpacing="1"
            fill="#14B8A6"
            fillOpacity="0.88"
          >
            1,284.6
          </text>

          {/* Unit */}

          <text
            x="45"
            y="36"
            textAnchor="middle"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="6"
            letterSpacing="1"
            fill="currentColor"
            fillOpacity="0.42"
          >
            Nm³/h
          </text>

          {/* Flow Bar */}

          <rect
            x="0"
            y="47"
            width="90"
            height="4"
            rx="2"
            fill="currentColor"
            fillOpacity="0.06"
          />

          <rect
            x="0"
            y="47"
            width="67"
            height="4"
            rx="2"
            fill="#14B8A6"
            fillOpacity="0.38"
          >
            <animate
              attributeName="width"
              values="55;72;64;70;58;68;55"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* =======================================================
        PRESSURE / TEMPERATURE MINI TELEMETRY
        ======================================================= */}

        <g transform="translate(865 575)" pointerEvents="none">
          {/* Pressure */}

          <text
            x="0"
            y="0"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="7"
            letterSpacing="1.2"
            fill="currentColor"
            fillOpacity="0.38"
          >
            PT
          </text>

          <text
            x="0"
            y="12"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="600"
            fill="#14B8A6"
            fillOpacity="0.65"
          >
            42.8 bar
          </text>

          {/* Temperature */}

          <text
            x="0"
            y="27"
            fontFamily="Arial, Helvetica, sans-serif"
            fontSize="7"
            letterSpacing="1.2"
            fill="currentColor"
            fillOpacity="0.38"
          >
            TT
          </text>

          <text
            x="0"
            y="39"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="600"
            fill="#14B8A6"
            fillOpacity="0.65"
          >
            36.4 °C
          </text>
        </g>

        {/* =======================================================
        CONTROL VALVES
        ======================================================= */}

        <g opacity="0.18" fill="none" strokeWidth="4">
          <path
            d="
              M600 610
              L620 590
              L640 610
              L620 630
              Z
            "
          />

          <path
            d="
              M620 590V565
              M605 565H635
            "
          />

          <path
            d="
              M960 610
              L980 590
              L1000 610
              L980 630
              Z
            "
          />

          <path
            d="
              M980 590V565
              M965 565H995
            "
          />

          <path
            d="
              M1090 650
              L1110 630
              L1130 650
              L1110 670
              Z
            "
          />

          <path
            d="
              M1110 630V605
              M1095 605H1125
            "
          />
        </g>

        {/* =======================================================
        FLOW TRANSMITTERS
        ======================================================= */}

        <g opacity="0.18">
          {/* FT-01 */}

          <circle cx="735" cy="535" r="25" fill="none" strokeWidth="3" />

          <path
            d="
              M735 560V580
              M720 525H750
              M735 520V550
            "
            strokeWidth="3"
            fill="none"
          />

          <text
            x="735"
            y="540"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            fill="#14B8A6"
            fillOpacity="0.65"
            stroke="none"
          >
            FT
          </text>

          {/* FT-02 */}

          <circle cx="865" cy="535" r="25" fill="none" strokeWidth="3" />

          <path
            d="
              M865 560V580
              M850 525H880
              M865 520V550
            "
            strokeWidth="3"
            fill="none"
          />

          <text
            x="865"
            y="540"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            fill="#14B8A6"
            fillOpacity="0.65"
            stroke="none"
          >
            FT
          </text>
        </g>

        {/* =======================================================
        PRESSURE TRANSMITTER
        ======================================================= */}

        <g opacity="0.17">
          <circle cx="1030" cy="610" r="30" fill="none" strokeWidth="3" />

          <path
            d="
              M1030 580V555
              M1015 555H1045
              M1030 610L1048 600
            "
            strokeWidth="3"
            fill="none"
          />

          <text
            x="1030"
            y="615"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="8"
            fill="#14B8A6"
            fillOpacity="0.60"
            stroke="none"
          >
            PT
          </text>
        </g>

        {/* =======================================================
        TEMPERATURE SENSOR
        ======================================================= */}

        <g opacity="0.16">
          <path
            d="
              M550 650
              V585
            "
            strokeWidth="4"
            fill="none"
          />

          <circle cx="550" cy="570" r="15" fill="none" strokeWidth="3" />

          <path
            d="
              M550 555V535
            "
            strokeWidth="3"
            fill="none"
          />

          <text
            x="550"
            y="573"
            textAnchor="middle"
            fontFamily="monospace"
            fontSize="7"
            fill="#14B8A6"
            fillOpacity="0.60"
            stroke="none"
          >
            TT
          </text>
        </g>

        {/* =======================================================
        FLOW COMPUTER / CONTROL PANEL
        ======================================================= */}

        <g opacity="0.16">
          <rect
            x="1160"
            y="545"
            width="170"
            height="190"
            rx="8"
            strokeWidth="3"
            fill="none"
          />

          {/* Screen */}

          <rect
            x="1185"
            y="570"
            width="120"
            height="70"
            rx="4"
            strokeWidth="2"
            fill="none"
          />

          {/* Screen Header */}

          <text
            x="1198"
            y="584"
            fontFamily="monospace"
            fontSize="7"
            fill="#14B8A6"
            fillOpacity="0.65"
            stroke="none"
          >
            FLOW COMPUTER
          </text>

          {/* Display Lines */}

          <path
            d="
              M1200 595H1290
              M1200 615H1260
            "
            strokeWidth="2"
            fill="none"
          />

          {/* Animated Signal */}

          <circle
            cx="1278"
            cy="583"
            r="3"
            fill="#14B8A6"
            className="abn-status-pulse"
          />

          {/* Buttons */}

          <circle cx="1200" cy="675" r="7" fill="none" strokeWidth="2" />

          <circle cx="1230" cy="675" r="7" fill="none" strokeWidth="2" />

          <circle cx="1260" cy="675" r="7" fill="none" strokeWidth="2" />

          <circle cx="1290" cy="675" r="7" fill="none" strokeWidth="2" />

          {/* Panel Legs */}

          <path
            d="
              M1190 735V765
              M1300 735V765
            "
            strokeWidth="4"
            fill="none"
          />
        </g>

        {/* =======================================================
        SCADA COMMUNICATION NETWORK
        ======================================================= */}

        <g
          opacity="0.13"
          fill="none"
          strokeWidth="2"
          strokeDasharray="7 7"
          className="abn-signal-pulse"
        >
          <path
            d="
              M920 535
              C1030 470 1110 500 1180 570
            "
          />

          <path
            d="
              M1030 610
              C1090 580 1130 580 1180 600
            "
          />

          <path
            d="
              M1000 650
              C1080 690 1120 690 1180 670
            "
          />
        </g>

        {/* SCADA DATA PARTICLE */}

        <circle r="4" fill="#14B8A6" opacity="0.45" pointerEvents="none">
          <animateMotion
            dur="2.5s"
            repeatCount="indefinite"
            path="
              M920 535
              C1030 470 1110 500 1180 570
            "
          />
        </circle>

        {/* =======================================================
        PIPELINE NETWORK
        ======================================================= */}

        <g opacity="0.16" fill="none" strokeWidth="8" strokeLinecap="round">
          <path
            d="
              M0 760
              H360
              V720
              H520
              V650
            "
          />

          <path
            d="
              M1080 650
              V720
              H1450
            "
          />

          <path
            d="
              M420 790
              H580
              V760
              H700
            "
          />

          <path
            d="
              M1020 760
              H1160
              V790
              H1600
            "
          />
        </g>

        {/* =======================================================
        OFFSHORE PLATFORM
        ======================================================= */}

        <g opacity="0.10" fill="none" strokeWidth="4">
          <path
            d="
              M1370 735
              V570
              H1500
              V735
            "
          />

          <path
            d="
              M1340 735H1530
              M1360 690H1510
              M1360 635H1510
            "
          />

          <path
            d="
              M1370 570
              L1435 510
              L1500 570
            "
          />

          <path
            d="
              M1400 545V735
              M1435 510V735
              M1470 545V735
            "
          />

          <path
            d="
              M1500 510V470
              M1480 470H1520
            "
          />
        </g>

        {/* =======================================================
        PUMP
        ======================================================= */}

        <g
          transform="translate(320 790)"
          opacity="0.13"
          fill="none"
          strokeWidth="5"
        >
          <circle r="55" />

          <circle r="22" strokeWidth="3" />

          <path
            d="
              M0 -22
              L12 0
              L0 22
              L-12 0
              Z
            "
          />

          <path
            d="
              M-55 0H-90
              M55 0H90
            "
          />
        </g>
      </g>

      {/* =========================================================
      FLOW DIRECTION ACCENTS
      ========================================================= */}

      <g fill="#14B8A6" opacity="0.18">
        <circle cx="450" cy="650" r="4" />

        <circle cx="505" cy="650" r="3" />

        <circle cx="1090" cy="650" r="4" />

        <circle cx="1150" cy="650" r="3" />

        <circle cx="1280" cy="480" r="3" />

        <circle cx="1370" cy="420" r="4" />
      </g>

      {/* =========================================================
      FOREGROUND ENERGY WAVES
      ========================================================= */}

      <path
        d="
          M0 770
          C250 710 450 850 700 800
          C1000 740 1240 690 1600 755
          V900
          H0
          Z
        "
        fill="url(#abnOilGasWave)"
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
      TECHNICAL PARTICLES
      ========================================================= */}

      <g fill="#14B8A6">
        <circle cx="230" cy="210" r="4" opacity="0.22" />

        <circle cx="300" cy="235" r="2.5" opacity="0.18" />

        <circle cx="1280" cy="190" r="4" opacity="0.20" />

        <circle cx="1360" cy="220" r="2.5" opacity="0.16" />

        <circle cx="1190" cy="420" r="3" opacity="0.15" />

        <circle cx="430" cy="450" r="3" opacity="0.13" />

        <circle cx="1040" cy="430" r="2.5" opacity="0.16" />
      </g>

      {/* =========================================================
      CUSTODY METERING TECHNICAL ORBIT
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

      {/* =========================================================
      EDGE TECHNICAL MARKERS
      ========================================================= */}

      <g stroke="#14B8A6" strokeWidth="2" opacity="0.08" fill="none">
        <path d="M60 120H130" />
        <path d="M60 120V190" />

        <path d="M1540 120H1470" />
        <path d="M1540 120V190" />

        <path d="M60 780H130" />
        <path d="M60 780V710" />

        <path d="M1540 780H1470" />
        <path d="M1540 780V710" />
      </g>
    </svg>
  );
};

export default OilAndGasBackground;
