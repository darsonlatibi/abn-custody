import React from "react";

interface PowerIndustryProps {
  className?: string;
}

const PowerIndustry: React.FC<PowerIndustryProps> = ({ className = "" }) => {
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
          id="power-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.12"
          />
        </pattern>

        {/* =========================================================
            GLOW
        ========================================================= */}
        <filter id="power-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =========================================================
            ENERGY GRADIENT
        ========================================================= */}
        <linearGradient id="power-energy" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />

          <stop offset="50%" stopColor="currentColor" stopOpacity="0.9" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>

        <linearGradient id="power-tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <rect width="900" height="500" fill="url(#power-grid)" />

      {/* =========================================================
          POWER STATION STRUCTURE
      ========================================================= */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Main building */}
        <path
          d="M80 380V245L135 205H335L390 245V380"
          strokeWidth="3"
          opacity="0.48"
        />

        {/* Roof */}
        <path d="M80 245H390" strokeWidth="3" opacity="0.6" />

        {/* Building divisions */}
        <path
          d="M135 205V380
             M205 205V380
             M275 205V380
             M335 205V380"
          strokeWidth="1.5"
          opacity="0.25"
        />

        {/* Windows */}
        <rect x="105" y="260" width="40" height="45" rx="2" opacity="0.25" />

        <rect x="165" y="260" width="40" height="45" rx="2" opacity="0.25" />

        <rect x="225" y="260" width="40" height="45" rx="2" opacity="0.25" />

        <rect x="285" y="260" width="40" height="45" rx="2" opacity="0.25" />

        {/* Generator hall */}
        <rect
          x="105"
          y="320"
          width="220"
          height="60"
          rx="4"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Generator symbol */}
        <circle cx="215" cy="350" r="20" strokeWidth="2" opacity="0.6" />

        <path
          d="M205 350H225
             M215 340V360"
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* =======================================================
            TURBINE / GENERATOR
        ======================================================= */}

        <ellipse
          cx="350"
          cy="350"
          rx="48"
          ry="22"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.55"
        />

        <path d="M302 350H398" strokeWidth="2" opacity="0.5" />

        <path
          d="M325 337
             C340 345 340 355 325 363

             M350 337
             C365 345 365 355 350 363

             M375 337
             C390 345 390 355 375 363"
          strokeWidth="1.5"
          opacity="0.45"
        />

        {/* =======================================================
            TRANSFORMER
        ======================================================= */}

        <rect
          x="445"
          y="295"
          width="90"
          height="100"
          rx="5"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2.5"
          opacity="0.55"
        />

        {/* Transformer coils */}
        <path
          d="M470 320
             C455 325 455 335 470 340
             C485 345 485 355 470 360
             C455 365 455 375 470 380"
          strokeWidth="2"
          opacity="0.65"
        />

        <path
          d="M510 320
             C495 325 495 335 510 340
             C525 345 525 355 510 360
             C495 365 495 375 510 380"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* Transformer top */}
        <path
          d="M465 295V275
             M490 295V270
             M515 295V275"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* =======================================================
            SWITCHGEAR
        ======================================================= */}

        <rect
          x="560"
          y="300"
          width="75"
          height="95"
          rx="4"
          fill="currentColor"
          fillOpacity="0.02"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M575 325H620
             M575 350H620
             M575 375H620"
          strokeWidth="2"
          opacity="0.4"
        />

        <circle cx="585" cy="325" r="4" fill="currentColor" opacity="0.7" />

        <circle cx="585" cy="350" r="4" fill="currentColor" opacity="0.7" />

        <circle cx="585" cy="375" r="4" fill="currentColor" opacity="0.7" />

        {/* =======================================================
            TRANSMISSION TOWER
        ======================================================= */}

        <path d="M690 395L735 150L780 395" strokeWidth="3" opacity="0.5" />

        <path
          d="M705 315H765
             M712 275H758
             M720 235H750
             M728 195H742"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* Tower cross arms */}
        <path
          d="M690 205H780
             M700 250H770
             M710 295H760"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* =======================================================
            TRANSMISSION LINES
        ======================================================= */}

        <path
          d="M735 150
             C680 110 600 120 535 150
             C475 178 410 150 350 115"
          strokeWidth="2"
          opacity="0.5"
        />

        <path
          d="M780 150
             C820 125 850 130 890 150"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Additional line */}
        <path
          d="M635 320
             C680 300 700 275 735 250"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* =======================================================
            POWER FLOW
        ======================================================= */}

        <path
          d="M390 350H445"
          stroke="url(#power-energy)"
          strokeWidth="5"
          opacity="0.7"
          filter="url(#power-glow)"
        />

        <path
          d="M535 350H560"
          stroke="url(#power-energy)"
          strokeWidth="5"
          opacity="0.7"
          filter="url(#power-glow)"
        />

        <path
          d="M635 330
             C670 310 700 285 735 250"
          stroke="url(#power-energy)"
          strokeWidth="4"
          opacity="0.65"
          filter="url(#power-glow)"
        />

        {/* =======================================================
            CONTROL ROOM
        ======================================================= */}

        <rect
          x="425"
          y="180"
          width="150"
          height="75"
          rx="5"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        <rect
          x="440"
          y="195"
          width="120"
          height="42"
          rx="3"
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Monitor lines */}
        <path
          d="M450 225
             L465 215
             L480 220
             L495 205
             L510 218
             L525 210
             L545 215"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Control panel */}
        <path d="M450 245H550" strokeWidth="1" opacity="0.3" />

        {/* =======================================================
            COOLING / STACK
        ======================================================= */}

        <path
          d="M120 200
             C130 165 130 120 145 95
             C160 120 160 165 170 200"
          strokeWidth="3"
          opacity="0.35"
        />

        <path
          d="M135 150
             C115 125 120 95 145 75
             C170 95 175 125 155 150"
          strokeWidth="1.5"
          opacity="0.22"
        />

        {/* =======================================================
            SENSOR NETWORK
        ======================================================= */}

        <circle
          cx="350"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#power-glow)"
        />

        <circle
          cx="490"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#power-glow)"
        />

        <circle
          cx="600"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#power-glow)"
        />

        <circle
          cx="735"
          cy="250"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#power-glow)"
        />

        {/* Digital connections */}
        <path
          d="M350 350
             L350 410
             L600 410
             L600 350"
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path
          d="M490 350
             L490 275
             L500 255"
          strokeDasharray="4 6"
          strokeWidth="1.5"
          opacity="0.35"
        />

        <path
          d="M600 350
             L650 350
             L690 300"
          strokeDasharray="4 6"
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* =======================================================
            DIGITAL SIGNAL NODES
        ======================================================= */}

        <circle cx="400" cy="410" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="450" cy="410" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="500" cy="410" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="550" cy="410" r="3" fill="currentColor" opacity="0.65" />

        {/* =======================================================
            ENERGY BOLTS
        ======================================================= */}

        <path
          d="M415 100
             L395 145
             H420
             L400 195"
          strokeWidth="3"
          opacity="0.55"
          filter="url(#power-glow)"
        />

        <path
          d="M820 215
             L805 245
             H825
             L810 280"
          strokeWidth="2.5"
          opacity="0.45"
          filter="url(#power-glow)"
        />
      </g>

      {/* =========================================================
          DATA LABELS
      ========================================================= */}

      <g
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        <text x="82" y="430" fontSize="12" opacity="0.45">
          POWER GENERATION
        </text>

        <text x="445" y="165" fontSize="10" opacity="0.4">
          GRID CONTROL
        </text>

        <text x="680" y="430" fontSize="11" opacity="0.4">
          TRANSMISSION
        </text>

        <text x="650" y="90" fontSize="20" fontWeight="600" opacity="0.18">
          POWER
        </text>

        <text x="650" y="108" fontSize="9" opacity="0.3">
          GENERATION • GRID • CONTROL
        </text>

        <text x="42" y="470" fontSize="9" opacity="0.28">
          ABN INDUSTRIAL
        </text>
      </g>

      {/* =========================================================
          ENERGY PARTICLES
      ========================================================= */}

      <g fill="currentColor" filter="url(#power-glow)">
        <circle cx="420" cy="350" r="2.5" opacity="0.8" />
        <circle cx="445" cy="350" r="2" opacity="0.6" />
        <circle cx="550" cy="350" r="2.5" opacity="0.75" />
        <circle cx="665" cy="300" r="2" opacity="0.65" />
        <circle cx="700" cy="275" r="2.5" opacity="0.75" />
        <circle cx="735" cy="250" r="3" opacity="0.85" />
      </g>
    </svg>
  );
};

export default PowerIndustry;
