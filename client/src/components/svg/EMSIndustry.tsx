import React from "react";

interface EMSIndustryProps {
  className?: string;
}

const EMSIndustry: React.FC<EMSIndustryProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* =====================================================
            GRID
        ===================================================== */}
        <pattern
          id="ems-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.09"
          />
        </pattern>

        {/* =====================================================
            GLOW
        ===================================================== */}
        <filter id="ems-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =====================================================
            POWER FLOW
        ===================================================== */}
        <linearGradient id="ems-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.03" />

          <stop offset="50%" stopColor="currentColor" stopOpacity="0.8" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.03" />
        </linearGradient>

        {/* =====================================================
            PANEL GRADIENT
        ===================================================== */}
        <linearGradient id="ems-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.055" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.015" />
        </linearGradient>
      </defs>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>
        {`
          .ems-flow {
            stroke-dasharray: 8 10;
            animation: emsFlow 2.4s linear infinite;
          }

          .ems-flow-slow {
            stroke-dasharray: 5 12;
            animation: emsFlow 4s linear infinite;
          }

          .ems-pulse {
            animation: emsPulse 1.8s ease-in-out infinite;
            transform-box: fill-box;
            transform-origin: center;
          }

          .ems-pulse-delay {
            animation-delay: 0.6s;
          }

          .ems-pulse-delay-2 {
            animation-delay: 1.2s;
          }

          .ems-meter {
            animation: emsMeter 2.8s ease-in-out infinite;
          }

          .ems-signal {
            animation: emsSignal 2s ease-in-out infinite;
          }

          @keyframes emsFlow {
            from {
              stroke-dashoffset: 0;
            }

            to {
              stroke-dashoffset: -36;
            }
          }

          @keyframes emsPulse {
            0%,
            100% {
              opacity: 0.25;
              transform: scale(0.8);
            }

            50% {
              opacity: 1;
              transform: scale(1.35);
            }
          }

          @keyframes emsMeter {
            0% {
              opacity: 0.25;
            }

            50% {
              opacity: 0.9;
            }

            100% {
              opacity: 0.25;
            }
          }

          @keyframes emsSignal {
            0%,
            100% {
              opacity: 0.2;
            }

            50% {
              opacity: 0.8;
            }
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <rect width="900" height="500" fill="url(#ems-grid)" />

      {/* =====================================================
          ENERGY NETWORK
      ===================================================== */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main energy bus */}
        <path d="M80 350 H820" strokeWidth="3" opacity="0.18" />

        <path
          className="ems-flow"
          d="M80 350 H820"
          stroke="url(#ems-flow)"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* Vertical distribution lines */}
        <path d="M180 350 V240" strokeWidth="2" opacity="0.25" />

        <path d="M330 350 V235" strokeWidth="2" opacity="0.25" />

        <path d="M500 350 V225" strokeWidth="2" opacity="0.25" />

        <path d="M680 350 V245" strokeWidth="2" opacity="0.25" />

        {/* Flow lines */}
        <path
          className="ems-flow"
          d="M180 350 V240"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.65"
        />

        <path
          className="ems-flow"
          d="M330 350 V235"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.65"
        />

        <path
          className="ems-flow"
          d="M500 350 V225"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.65"
        />

        <path
          className="ems-flow"
          d="M680 350 V245"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.65"
        />
      </g>

      {/* =====================================================
          POWER SOURCE
      ===================================================== */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          cx="90"
          cy="350"
          r="28"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M78 350 L88 332 L92 348 L103 348"
          strokeWidth="2"
          opacity="0.6"
        />

        <path d="M75 365 H105" strokeWidth="1" opacity="0.25" />
      </g>

      {/* =====================================================
          ENERGY METER
      ===================================================== */}

      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <rect
          x="145"
          y="165"
          width="70"
          height="75"
          rx="5"
          fill="url(#ems-panel)"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle cx="180" cy="192" r="16" strokeWidth="1.5" opacity="0.45" />

        <path
          className="ems-meter"
          d="M180 192 L190 181"
          strokeWidth="2"
          opacity="0.7"
        />

        <path d="M158 218 H202" strokeWidth="2" opacity="0.3" />

        <path d="M164 226 H196" strokeWidth="2" opacity="0.2" />
      </g>

      {/* =====================================================
          INDUSTRIAL LOAD
      ===================================================== */}

      <g
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Factory */}
        <path
          d="
            M285 330
            V275
            L315 295
            L345 275
            L375 295
            L405 275
            V330
            Z
          "
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Factory roof */}
        <path d="M280 275 H410" fill="none" strokeWidth="2" opacity="0.35" />

        {/* Factory windows */}
        <rect
          x="300"
          y="305"
          width="18"
          height="12"
          fill="none"
          strokeWidth="1"
          opacity="0.3"
        />

        <rect
          x="335"
          y="305"
          width="18"
          height="12"
          fill="none"
          strokeWidth="1"
          opacity="0.3"
        />

        <rect
          x="370"
          y="305"
          width="18"
          height="12"
          fill="none"
          strokeWidth="1"
          opacity="0.3"
        />
      </g>

      {/* =====================================================
          ENTERPRISE CONTROL CENTER
      ===================================================== */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="420"
          y="95"
          width="230"
          height="130"
          rx="7"
          fill="url(#ems-panel)"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Main screen */}
        <rect
          x="440"
          y="115"
          width="190"
          height="65"
          rx="4"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Chart */}
        <path
          d="
            M450 165
            L470 150
            L490 156
            L510 135
            L530 148
            L550 128
            L570 143
            L590 125
            L615 140
          "
          strokeWidth="2"
          opacity="0.65"
        />

        {/* KPI bars */}
        <path d="M445 195 H480" strokeWidth="4" opacity="0.35" />

        <path d="M495 195 H540" strokeWidth="4" opacity="0.5" />

        <path d="M555 195 H610" strokeWidth="4" opacity="0.3" />
      </g>

      {/* =====================================================
          CONTROL NODE
      ===================================================== */}

      <g>
        <circle
          className="ems-pulse"
          cx="500"
          cy="350"
          r="8"
          fill="currentColor"
          opacity="0.7"
          filter="url(#ems-glow)"
        />

        <circle
          className="ems-pulse ems-pulse-delay"
          cx="330"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.55"
          filter="url(#ems-glow)"
        />

        <circle
          className="ems-pulse ems-pulse-delay-2"
          cx="680"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.55"
          filter="url(#ems-glow)"
        />
      </g>

      {/* =====================================================
          DATABASE / ENTERPRISE DATA
      ===================================================== */}

      <g fill="none" stroke="currentColor">
        <ellipse
          cx="755"
          cy="150"
          rx="55"
          ry="18"
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="2"
          opacity="0.45"
        />

        <path d="M700 150 V205" strokeWidth="2" opacity="0.4" />

        <path d="M810 150 V205" strokeWidth="2" opacity="0.4" />

        <ellipse
          cx="755"
          cy="205"
          rx="55"
          ry="18"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.4"
        />

        <path
          className="ems-signal"
          d="M720 168 H790"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.5"
        />

        <path
          className="ems-signal"
          d="M720 185 H790"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.4"
        />
      </g>

      {/* =====================================================
          ENTERPRISE CONNECTIONS
      ===================================================== */}

      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path
          className="ems-flow-slow"
          d="M500 225 C500 275 500 300 500 350"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.65"
        />

        <path
          className="ems-flow-slow"
          d="M630 160 C680 180 700 190 755 205"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.55"
        />

        <path
          className="ems-flow-slow"
          d="M650 120 C690 95 720 85 760 95"
          stroke="url(#ems-flow)"
          strokeWidth="2"
          opacity="0.45"
        />
      </g>

      {/* =====================================================
          ENERGY KPI PANEL
      ===================================================== */}

      <g fill="none" stroke="currentColor">
        <rect
          x="55"
          y="85"
          width="230"
          height="55"
          rx="5"
          fill="url(#ems-panel)"
          strokeWidth="2"
          opacity="0.4"
        />

        <path d="M75 105 H125" strokeWidth="4" opacity="0.35" />

        <path d="M75 120 H155" strokeWidth="3" opacity="0.25" />

        <circle
          cx="245"
          cy="112"
          r="7"
          fill="currentColor"
          opacity="0.55"
          filter="url(#ems-glow)"
        />
      </g>

      {/* =====================================================
          BOTTOM DATA BUS
      ===================================================== */}

      <g fill="none" stroke="currentColor">
        <path
          d="M120 430 H820"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.2"
        />

        <circle
          className="ems-pulse"
          cx="180"
          cy="430"
          r="3"
          fill="currentColor"
          opacity="0.55"
        />

        <circle
          className="ems-pulse ems-pulse-delay"
          cx="320"
          cy="430"
          r="3"
          fill="currentColor"
          opacity="0.55"
        />

        <circle
          className="ems-pulse ems-pulse-delay-2"
          cx="500"
          cy="430"
          r="3"
          fill="currentColor"
          opacity="0.55"
        />

        <circle
          className="ems-pulse"
          cx="680"
          cy="430"
          r="3"
          fill="currentColor"
          opacity="0.55"
        />

        <circle
          className="ems-pulse ems-pulse-delay"
          cx="800"
          cy="430"
          r="3"
          fill="currentColor"
          opacity="0.55"
        />
      </g>

      {/* =====================================================
          TEXT
      ===================================================== */}

      <g
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        <text x="55" y="65" fontSize="18" fontWeight="600" opacity="0.17">
          EMS
        </text>

        <text x="55" y="77" fontSize="8" opacity="0.28">
          ENTERPRISE MANAGEMENT SYSTEM
        </text>

        <text x="145" y="155" fontSize="9" opacity="0.3">
          ENERGY METER
        </text>

        <text x="285" y="350" fontSize="9" opacity="0.3">
          INDUSTRIAL LOAD
        </text>

        <text x="420" y="80" fontSize="9" opacity="0.3">
          ENTERPRISE CONTROL
        </text>

        <text x="700" y="235" fontSize="9" opacity="0.3">
          DATA CORE
        </text>

        <text x="680" y="465" fontSize="9" opacity="0.28">
          ENERGY • KPI • ANALYTICS
        </text>

        <text x="55" y="465" fontSize="8" opacity="0.22">
          ABN DIGITAL & INDUSTRIAL TECHNOLOGY
        </text>
      </g>

      {/* =====================================================
          FLOATING DATA PARTICLES
      ===================================================== */}

      <g fill="currentColor" filter="url(#ems-glow)">
        <circle cx="350" cy="210" r="2.5" opacity="0.7" />

        <circle cx="395" cy="170" r="2" opacity="0.55" />

        <circle cx="550" cy="255" r="2.5" opacity="0.7" />

        <circle cx="700" cy="275" r="2" opacity="0.55" />

        <circle cx="815" cy="300" r="2.5" opacity="0.65" />
      </g>
    </svg>
  );
};

export default EMSIndustry;
