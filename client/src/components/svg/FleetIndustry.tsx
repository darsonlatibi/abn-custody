import React from "react";

interface FleetIndustryProps {
  className?: string;
}

const FleetIndustry: React.FC<FleetIndustryProps> = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* =========================================================
            GRID
        ========================================================= */}
        <pattern
          id="fleet-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.1"
          />
        </pattern>

        {/* =========================================================
            GLOW
        ========================================================= */}
        <filter id="fleet-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =========================================================
            ROUTE GRADIENT
        ========================================================= */}
        <linearGradient id="fleet-route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />

          <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>

        {/* =========================================================
            ROAD GRADIENT
        ========================================================= */}
        <linearGradient id="fleet-road" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.025" />
        </linearGradient>
      </defs>

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <rect width="900" height="500" fill="url(#fleet-grid)" />

      {/* =========================================================
          ROAD NETWORK
      ========================================================= */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main highway */}
        <path
          d="
            M0 395
            C120 350 180 370 285 405
            C400 445 485 430 580 365
            C680 295 770 285 900 330
          "
          strokeWidth="34"
          opacity="0.08"
        />

        <path
          d="
            M0 395
            C120 350 180 370 285 405
            C400 445 485 430 580 365
            C680 295 770 285 900 330
          "
          strokeWidth="2"
          strokeDasharray="12 10"
          opacity="0.35"
        />

        {/* Secondary route */}
        <path
          d="
            M140 500
            C185 435 240 390 315 345
            C385 302 430 245 465 170
          "
          strokeWidth="18"
          opacity="0.055"
        />

        <path
          d="
            M140 500
            C185 435 240 390 315 345
            C385 302 430 245 465 170
          "
          strokeWidth="1.5"
          strokeDasharray="8 9"
          opacity="0.28"
        />

        {/* =======================================================
            DEPOT
        ======================================================= */}

        <rect
          x="55"
          y="120"
          width="180"
          height="115"
          rx="6"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Depot roof */}
        <path
          d="M45 120H245L225 95H65Z"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* Depot bays */}
        <path
          d="
            M75 150V215
            M115 150V215
            M155 150V215
            M195 150V215
          "
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path d="M65 150H225" strokeWidth="2" opacity="0.35" />

        {/* Depot doors */}
        <rect x="75" y="170" width="28" height="45" opacity="0.22" />

        <rect x="120" y="170" width="28" height="45" opacity="0.22" />

        <rect x="165" y="170" width="28" height="45" opacity="0.22" />

        {/* =======================================================
            CONTROL CENTER
        ======================================================= */}

        <rect
          x="320"
          y="85"
          width="190"
          height="105"
          rx="6"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Screen */}
        <rect
          x="340"
          y="105"
          width="150"
          height="50"
          rx="3"
          fill="currentColor"
          fillOpacity="0.045"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Map route */}
        <path
          d="
            M350 140
            L370 125
            L390 132
            L410 118
            L430 132
            L450 120
            L475 137
          "
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Control panel */}
        <path d="M340 170H490" strokeWidth="1" opacity="0.25" />

        <circle cx="355" cy="178" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="370" cy="178" r="3" fill="currentColor" opacity="0.45" />

        <circle cx="385" cy="178" r="3" fill="currentColor" opacity="0.45" />

        {/* =======================================================
            LARGE FLEET TRUCK
        ======================================================= */}

        {/* Trailer */}
        <rect
          x="255"
          y="325"
          width="165"
          height="65"
          rx="5"
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="2.5"
          opacity="0.6"
        />

        {/* Trailer panels */}
        <path
          d="
            M285 325V390
            M320 325V390
            M355 325V390
            M390 325V390
          "
          strokeWidth="1"
          opacity="0.25"
        />

        {/* Trailer top */}
        <path d="M255 325H420" strokeWidth="3" opacity="0.45" />

        {/* Truck cabin */}
        <path
          d="
            M420 350
            V315
            H475
            L505 350
            V390
            H420
            Z
          "
          fill="currentColor"
          fillOpacity="0.045"
          strokeWidth="2.5"
          opacity="0.6"
        />

        {/* Windshield */}
        <path
          d="
            M438 322
            H468
            L488 347
            H438
            Z
          "
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="1.5"
          opacity="0.4"
        />

        {/* Cabin door */}
        <path d="M438 350V385" strokeWidth="1.5" opacity="0.3" />

        {/* Front bumper */}
        <path d="M500 375H515" strokeWidth="4" opacity="0.45" />

        {/* Wheels */}
        <circle
          cx="290"
          cy="395"
          r="19"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.6"
        />

        <circle cx="290" cy="395" r="7" opacity="0.3" />

        <circle
          cx="395"
          cy="395"
          r="19"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.6"
        />

        <circle cx="395" cy="395" r="7" opacity="0.3" />

        <circle
          cx="475"
          cy="395"
          r="19"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.6"
        />

        <circle cx="475" cy="395" r="7" opacity="0.3" />

        {/* =======================================================
            SECOND TRUCK
        ======================================================= */}

        <rect
          x="590"
          y="285"
          width="105"
          height="43"
          rx="4"
          fill="currentColor"
          fillOpacity="0.03"
          strokeWidth="2"
          opacity="0.45"
        />

        <path
          d="
            M695 300
            V278
            H725
            L745 300
            V328
            H695
          "
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="2"
          opacity="0.45"
        />

        <path d="M705 283H720L735 299H705Z" strokeWidth="1" opacity="0.3" />

        <circle cx="615" cy="333" r="12" opacity="0.45" />

        <circle cx="680" cy="333" r="12" opacity="0.45" />

        <circle cx="725" cy="333" r="12" opacity="0.45" />

        {/* =======================================================
            GPS LOCATION PINS
        ======================================================= */}

        <path
          d="
            M285 235
            C285 220 296 210 310 210
            C324 210 335 220 335 235
            C335 254 310 272 310 272
            C310 272 285 254 285 235Z
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.6"
        />

        <circle
          cx="310"
          cy="235"
          r="6"
          fill="currentColor"
          opacity="0.75"
          filter="url(#fleet-glow)"
        />

        <path
          d="
            M690 210
            C690 195 701 185 715 185
            C729 185 740 195 740 210
            C740 229 715 247 715 247
            C715 247 690 229 690 210Z
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle
          cx="715"
          cy="210"
          r="6"
          fill="currentColor"
          opacity="0.7"
          filter="url(#fleet-glow)"
        />

        <path
          d="
            M790 355
            C790 340 801 330 815 330
            C829 330 840 340 840 355
            C840 374 815 392 815 392
            C815 392 790 374 790 355Z
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.5"
        />

        <circle
          cx="815"
          cy="355"
          r="6"
          fill="currentColor"
          opacity="0.7"
          filter="url(#fleet-glow)"
        />

        {/* =======================================================
            ROUTE CONNECTIONS
        ======================================================= */}

        <path
          d="
            M310 235
            C380 215 430 190 450 160
          "
          stroke="url(#fleet-route)"
          strokeWidth="3"
          strokeDasharray="7 8"
          opacity="0.7"
        />

        <path
          d="
            M450 160
            C545 145 625 170 715 210
          "
          stroke="url(#fleet-route)"
          strokeWidth="3"
          strokeDasharray="7 8"
          opacity="0.65"
        />

        <path
          d="
            M715 210
            C750 245 770 300 815 355
          "
          stroke="url(#fleet-route)"
          strokeWidth="3"
          strokeDasharray="7 8"
          opacity="0.65"
        />

        {/* Truck to network */}
        <path
          d="
            M475 350
            L535 350
            L590 315
          "
          stroke="url(#fleet-route)"
          strokeWidth="3"
          opacity="0.65"
          filter="url(#fleet-glow)"
        />

        {/* =======================================================
            TELEMETRY SIGNAL
        ======================================================= */}

        <path
          d="
            M475 350
            L475 225
            L420 190
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path
          d="
            M625 305
            L625 225
            L715 210
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* =======================================================
            FLEET STATUS PANEL
        ======================================================= */}

        <rect
          x="570"
          y="85"
          width="250"
          height="80"
          rx="5"
          fill="currentColor"
          fillOpacity="0.02"
          strokeWidth="2"
          opacity="0.4"
        />

        {/* Status bars */}
        <path d="M590 112H650" strokeWidth="4" opacity="0.35" />

        <path d="M590 128H705" strokeWidth="4" opacity="0.25" />

        <path d="M590 144H670" strokeWidth="4" opacity="0.3" />

        {/* Vehicle status dots */}
        <circle cx="755" cy="112" r="5" fill="currentColor" opacity="0.7" />

        <circle cx="775" cy="112" r="5" fill="currentColor" opacity="0.45" />

        <circle cx="795" cy="112" r="5" fill="currentColor" opacity="0.3" />

        {/* =======================================================
            SATELLITE
        ======================================================= */}

        <path
          d="
            M795 190
            L815 170
            M815 170
            L835 190
          "
          strokeWidth="2"
          opacity="0.45"
        />

        <rect
          x="805"
          y="165"
          width="20"
          height="14"
          rx="2"
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="1.5"
          opacity="0.55"
        />

        {/* Satellite signal arcs */}
        <path
          d="
            M800 155
            C820 135 845 135 865 155
          "
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path
          d="
            M790 145
            C820 115 855 115 880 145
          "
          strokeWidth="1"
          opacity="0.2"
        />

        {/* =======================================================
            SENSOR NODES
        ======================================================= */}

        <circle
          cx="475"
          cy="350"
          r="7"
          fill="currentColor"
          opacity="0.8"
          filter="url(#fleet-glow)"
        />

        <circle
          cx="625"
          cy="305"
          r="6"
          fill="currentColor"
          opacity="0.7"
          filter="url(#fleet-glow)"
        />

        <circle
          cx="715"
          cy="210"
          r="6"
          fill="currentColor"
          opacity="0.75"
          filter="url(#fleet-glow)"
        />

        {/* =======================================================
            DATA BUS
        ======================================================= */}

        <path
          d="M250 445H820"
          strokeDasharray="4 8"
          strokeWidth="1"
          opacity="0.2"
        />

        <circle cx="300" cy="445" r="3" fill="currentColor" opacity="0.6" />

        <circle cx="400" cy="445" r="3" fill="currentColor" opacity="0.6" />

        <circle cx="500" cy="445" r="3" fill="currentColor" opacity="0.6" />

        <circle cx="600" cy="445" r="3" fill="currentColor" opacity="0.6" />

        <circle cx="700" cy="445" r="3" fill="currentColor" opacity="0.6" />

        <circle cx="800" cy="445" r="3" fill="currentColor" opacity="0.6" />
      </g>

      {/* =========================================================
          LABELS
      ========================================================= */}

      <g
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        <text x="60" y="75" fontSize="18" fontWeight="600" opacity="0.16">
          FLEET
        </text>

        <text x="60" y="92" fontSize="9" opacity="0.28">
          GPS • TELEMETRY • ANALYTICS
        </text>

        <text x="60" y="255" fontSize="10" opacity="0.35">
          FLEET DEPOT
        </text>

        <text x="320" y="75" fontSize="10" opacity="0.35">
          FLEET CONTROL CENTER
        </text>

        <text x="570" y="75" fontSize="10" opacity="0.35">
          LIVE VEHICLE STATUS
        </text>

        <text x="700" y="465" fontSize="10" opacity="0.32">
          GPS NETWORK
        </text>

        <text x="42" y="480" fontSize="9" opacity="0.25">
          ABN INDUSTRIAL
        </text>
      </g>

      {/* =========================================================
          MOVING DATA PARTICLES
      ========================================================= */}

      <g fill="currentColor" filter="url(#fleet-glow)">
        <circle cx="350" cy="215" r="2.5" opacity="0.75" />

        <circle cx="420" cy="180" r="2" opacity="0.65" />

        <circle cx="535" cy="160" r="2.5" opacity="0.7" />

        <circle cx="650" cy="180" r="2" opacity="0.6" />

        <circle cx="760" cy="270" r="2.5" opacity="0.75" />

        <circle cx="815" cy="355" r="3" opacity="0.8" />
      </g>
    </svg>
  );
};

export default FleetIndustry;
