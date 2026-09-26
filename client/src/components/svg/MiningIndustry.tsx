import React from "react";

interface MiningIndustryProps {
  className?: string;
}

const MiningIndustry: React.FC<MiningIndustryProps> = ({ className = "" }) => {
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
          id="mining-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.1"
          />
        </pattern>

        {/* =========================================================
            GLOW
        ========================================================= */}
        <filter id="mining-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =========================================================
            PROCESS FLOW
        ========================================================= */}
        <linearGradient id="mining-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />

          <stop offset="50%" stopColor="currentColor" stopOpacity="0.85" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>

        {/* =========================================================
            TERRAIN
        ========================================================= */}
        <linearGradient id="mining-terrain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.22" />

          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* =========================================================
          BACKGROUND GRID
      ========================================================= */}

      <rect width="900" height="500" fill="url(#mining-grid)" />

      {/* =========================================================
          MOUNTAIN / OPEN PIT BACKGROUND
      ========================================================= */}

      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Mountain silhouette */}
        <path
          d="
            M0 270
            L90 205
            L150 235
            L235 150
            L310 225
            L395 125
            L485 225
            L565 165
            L650 235
            L735 150
            L820 225
            L900 180
          "
          strokeWidth="2.5"
          opacity="0.25"
        />

        {/* Mountain secondary lines */}
        <path
          d="
            M0 295
            L95 230
            L150 255
            L235 175
            L310 250
            L395 150
            L485 250
            L565 190
            L650 260
            L735 175
            L820 250
            L900 205
          "
          strokeWidth="1"
          opacity="0.18"
        />

        {/* =======================================================
            OPEN PIT
        ======================================================= */}

        <path
          d="
            M40 315
            C150 275 260 275 370 315
            C470 350 585 350 700 305
            C775 275 840 285 900 310
          "
          fill="url(#mining-terrain)"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* Pit benches */}
        <path
          d="M80 335 C170 305 250 305 335 335"
          strokeWidth="3"
          opacity="0.3"
        />

        <path
          d="M120 365 C195 340 260 340 325 365"
          strokeWidth="3"
          opacity="0.25"
        />

        <path
          d="M165 395 C220 375 270 375 315 395"
          strokeWidth="3"
          opacity="0.2"
        />

        {/* Pit access road */}
        <path
          d="
            M320 395
            C365 370 390 345 425 320
            C455 298 480 285 520 270
          "
          strokeWidth="14"
          opacity="0.12"
        />

        <path
          d="
            M320 395
            C365 370 390 345 425 320
            C455 298 480 285 520 270
          "
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.35"
        />

        {/* =======================================================
            EXCAVATOR
        ======================================================= */}

        {/* Tracks */}
        <rect
          x="95"
          y="355"
          width="105"
          height="25"
          rx="10"
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="2"
          opacity="0.55"
        />

        <circle cx="120" cy="368" r="8" opacity="0.35" />

        <circle cx="175" cy="368" r="8" opacity="0.35" />

        {/* Excavator body */}
        <path
          d="
            M115 350
            L125 320
            H185
            L200 350
            Z
          "
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Cabin */}
        <path
          d="
            M145 320
            V292
            H180
            L190 320
          "
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Boom */}
        <path
          d="
            M185 300
            L230 265
            L285 280
          "
          strokeWidth="8"
          opacity="0.45"
        />

        {/* Arm */}
        <path
          d="
            M285 280
            L315 315
            L345 325
          "
          strokeWidth="7"
          opacity="0.45"
        />

        {/* Bucket */}
        <path
          d="
            M335 315
            L365 325
            L350 350
            L320 340
            Z
          "
          fill="currentColor"
          fillOpacity="0.08"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* =======================================================
            HAUL TRUCK
        ======================================================= */}

        <path
          d="
            M395 350
            H490
            L515 370
            V395
            H385
            V370
            Z
          "
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* Truck cabin */}
        <path
          d="
            M470 350
            V325
            H505
            L520 350
          "
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* Dump body */}
        <path
          d="
            M395 345
            L450 325
            L475 345
            L455 365
            H395
            Z
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Wheels */}
        <circle cx="415" cy="395" r="17" opacity="0.5" />

        <circle cx="490" cy="395" r="17" opacity="0.5" />

        <circle cx="415" cy="395" r="6" opacity="0.35" />

        <circle cx="490" cy="395" r="6" opacity="0.35" />

        {/* =======================================================
            CRUSHER
        ======================================================= */}

        <path
          d="
            M555 280
            H640
            L655 315
            L640 350
            H555
            L540 315
            Z
          "
          fill="currentColor"
          fillOpacity="0.035"
          strokeWidth="2.5"
          opacity="0.55"
        />

        {/* Crusher jaws */}
        <path
          d="
            M565 295
            L600 315
            L565 335

            M635 295
            L600 315
            L635 335
          "
          strokeWidth="2"
          opacity="0.5"
        />

        {/* Crusher hopper */}
        <path
          d="
            M545 260
            H650
            L635 280
            H560
            Z
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* =======================================================
            CONVEYOR
        ======================================================= */}

        <path
          d="
            M630 345
            L780 255
          "
          strokeWidth="18"
          opacity="0.1"
        />

        <path
          d="
            M630 345
            L780 255
          "
          strokeWidth="3"
          opacity="0.5"
        />

        {/* Conveyor rollers */}
        <circle cx="650" cy="333" r="6" opacity="0.4" />
        <circle cx="680" cy="315" r="6" opacity="0.4" />
        <circle cx="710" cy="296" r="6" opacity="0.4" />
        <circle cx="740" cy="278" r="6" opacity="0.4" />
        <circle cx="770" cy="260" r="6" opacity="0.4" />

        {/* Conveyor support */}
        <path
          d="
            M680 315V360
            M735 280V325
          "
          strokeWidth="2"
          opacity="0.35"
        />

        {/* =======================================================
            STOCKPILE
        ======================================================= */}

        <path
          d="
            M755 385
            C785 345 825 345 865 385
            Z
          "
          fill="url(#mining-terrain)"
          strokeWidth="2"
          opacity="0.45"
        />

        <path
          d="M765 375 C800 350 830 350 855 375"
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* =======================================================
            PROCESS PLANT
        ======================================================= */}

        <rect
          x="690"
          y="160"
          width="160"
          height="100"
          rx="5"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.45"
        />

        {/* Plant columns */}
        <path
          d="
            M710 160V260
            M740 160V260
            M770 160V260
            M800 160V260
            M830 160V260
          "
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Processing tanks */}
        <circle cx="725" cy="205" r="17" opacity="0.4" />

        <circle cx="775" cy="205" r="17" opacity="0.4" />

        <circle cx="825" cy="205" r="17" opacity="0.4" />

        {/* Plant pipework */}
        <path
          d="
            M725 222V240H775V222
            M775 222V240H825V222
            M740 205H760
            M790 205H810
          "
          strokeWidth="2"
          opacity="0.35"
        />

        {/* =======================================================
            CONTROL ROOM
        ======================================================= */}

        <rect
          x="520"
          y="120"
          width="135"
          height="80"
          rx="5"
          fill="currentColor"
          fillOpacity="0.025"
          strokeWidth="2"
          opacity="0.5"
        />

        <rect
          x="535"
          y="135"
          width="105"
          height="38"
          rx="3"
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Dashboard graph */}
        <path
          d="
            M545 160
            L558 151
            L570 157
            L583 145
            L596 153
            L610 142
            L630 150
          "
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Panel */}
        <path d="M535 185H640" strokeWidth="1" opacity="0.25" />

        {/* =======================================================
            SENSOR NETWORK
        ======================================================= */}

        <circle
          cx="165"
          cy="330"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#mining-glow)"
        />

        <circle
          cx="450"
          cy="350"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#mining-glow)"
        />

        <circle
          cx="600"
          cy="315"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#mining-glow)"
        />

        <circle
          cx="775"
          cy="205"
          r="6"
          fill="currentColor"
          opacity="0.8"
          filter="url(#mining-glow)"
        />

        {/* =======================================================
            DIGITAL CONNECTIONS
        ======================================================= */}

        <path
          d="
            M165 330
            L165 115
            L585 115
            L585 120
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.25"
        />

        <path
          d="
            M450 350
            L450 215
            L520 160
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path
          d="
            M600 315
            L600 200
            L640 170
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.3"
        />

        <path
          d="
            M775 205
            L775 115
            L650 115
          "
          strokeDasharray="5 7"
          strokeWidth="1.5"
          opacity="0.25"
        />

        {/* =======================================================
            TELEMETRY NODES
        ======================================================= */}

        <circle cx="300" cy="115" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="400" cy="115" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="500" cy="115" r="3" fill="currentColor" opacity="0.65" />

        <circle cx="700" cy="115" r="3" fill="currentColor" opacity="0.65" />

        {/* =======================================================
            FLOW LINES
        ======================================================= */}

        <path
          d="M365 330H385"
          stroke="url(#mining-flow)"
          strokeWidth="4"
          filter="url(#mining-glow)"
        />

        <path
          d="M520 315H540"
          stroke="url(#mining-flow)"
          strokeWidth="4"
          filter="url(#mining-glow)"
        />

        <path
          d="M655 315L700 285"
          stroke="url(#mining-flow)"
          strokeWidth="4"
          filter="url(#mining-glow)"
        />

        {/* =======================================================
            DATA SIGNAL
        ======================================================= */}

        <path
          d="
            M250 430
            H650
          "
          strokeDasharray="4 8"
          strokeWidth="1"
          opacity="0.22"
        />

        <circle cx="300" cy="430" r="2.5" fill="currentColor" opacity="0.6" />

        <circle cx="380" cy="430" r="2.5" fill="currentColor" opacity="0.6" />

        <circle cx="460" cy="430" r="2.5" fill="currentColor" opacity="0.6" />

        <circle cx="540" cy="430" r="2.5" fill="currentColor" opacity="0.6" />

        <circle cx="620" cy="430" r="2.5" fill="currentColor" opacity="0.6" />
      </g>

      {/* =========================================================
          LABELS
      ========================================================= */}

      <g
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="2"
      >
        <text x="80" y="455" fontSize="11" opacity="0.4">
          OPEN PIT MINING
        </text>

        <text x="515" y="105" fontSize="10" opacity="0.38">
          MINE CONTROL
        </text>

        <text x="690" y="145" fontSize="10" opacity="0.38">
          PROCESS PLANT
        </text>

        <text x="640" y="65" fontSize="20" fontWeight="600" opacity="0.17">
          MINING
        </text>

        <text x="640" y="83" fontSize="9" opacity="0.28">
          EXCAVATION • PROCESS • TELEMETRY
        </text>

        <text x="42" y="480" fontSize="9" opacity="0.25">
          ABN INDUSTRIAL
        </text>
      </g>

      {/* =========================================================
          DIGITAL PARTICLES
      ========================================================= */}

      <g fill="currentColor" filter="url(#mining-glow)">
        <circle cx="365" cy="330" r="2.5" opacity="0.75" />

        <circle cx="520" cy="315" r="2.5" opacity="0.75" />

        <circle cx="655" cy="315" r="2" opacity="0.6" />

        <circle cx="700" cy="285" r="2.5" opacity="0.75" />

        <circle cx="775" cy="205" r="3" opacity="0.85" />
      </g>
    </svg>
  );
};

export default MiningIndustry;
