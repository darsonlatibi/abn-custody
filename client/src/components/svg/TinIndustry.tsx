import React from "react";

type TinIndustryProps = {
  className?: string;
};

const TinIndustry: React.FC<TinIndustryProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 900 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* =====================================================
            WATER GRID
        ====================================================== */}
        <pattern
          id="tin-water-grid"
          width="50"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 15H50"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.08"
          />
        </pattern>

        {/* =====================================================
            GLOW
        ====================================================== */}
        <filter id="tin-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =====================================================
            PIPE GRADIENT
        ====================================================== */}
        <linearGradient id="tin-pipe" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.1" />

          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.75" />

          <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>

        {/* =====================================================
            WATER GRADIENT
        ====================================================== */}
        <linearGradient id="tin-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.04" />

          <stop offset="1" stopColor="currentColor" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {/* =====================================================
          WATER / DIGITAL BACKGROUND
      ====================================================== */}

      <rect x="0" y="0" width="900" height="500" fill="url(#tin-water)" />

      <rect
        x="0"
        y="285"
        width="900"
        height="215"
        fill="url(#tin-water-grid)"
      />

      {/* =====================================================
          SEA SURFACE
      ====================================================== */}

      <g stroke="currentColor" strokeLinecap="round" opacity="0.25">
        <path
          d="M0 300
             C60 288 120 312 180 300
             C240 288 300 312 360 300
             C420 288 480 312 540 300
             C600 288 660 312 720 300
             C780 288 840 312 900 300"
          strokeWidth="2"
        />

        <path
          d="M0 315
             C70 305 130 325 200 315
             C270 305 340 325 410 315
             C480 305 550 325 620 315
             C690 305 760 325 830 315
             C860 312 880 314 900 315"
          strokeWidth="1"
          opacity="0.6"
        />
      </g>

      {/* =====================================================
          TIN DREDGER / SUCTION SHIP
      ====================================================== */}

      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        {/* -----------------------------------------------------
            MAIN HULL
        ------------------------------------------------------ */}

        <path
          d="
            M150 245
            H665
            L735 285
            H190
            Z
          "
          fill="currentColor"
          fillOpacity="0.07"
          strokeWidth="2.5"
          opacity="0.65"
        />

        {/* Hull lower structure */}

        <path d="M190 285L225 305H680L735 285" strokeWidth="2" opacity="0.45" />

        <path d="M235 305H665" strokeWidth="2" opacity="0.25" />

        {/* Hull frame */}

        <path d="M260 250V290" strokeWidth="1.5" opacity="0.35" />

        <path d="M330 250V290" strokeWidth="1.5" opacity="0.35" />

        <path d="M400 250V290" strokeWidth="1.5" opacity="0.35" />

        <path d="M470 250V290" strokeWidth="1.5" opacity="0.35" />

        <path d="M540 250V290" strokeWidth="1.5" opacity="0.35" />

        <path d="M610 250V290" strokeWidth="1.5" opacity="0.35" />

        {/* -----------------------------------------------------
            UPPER DECK
        ------------------------------------------------------ */}

        <rect
          x="285"
          y="185"
          width="300"
          height="60"
          rx="4"
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.55"
        />

        {/* Deck beams */}

        <path d="M300 205H570" strokeWidth="1" opacity="0.25" />

        <path d="M300 225H570" strokeWidth="1" opacity="0.25" />

        {/* -----------------------------------------------------
            CONTROL CABIN
        ------------------------------------------------------ */}

        <path
          d="
            M390 185
            V135
            H510
            L535 185
          "
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* Cabin windows */}

        <rect
          x="405"
          y="148"
          width="32"
          height="23"
          rx="2"
          strokeWidth="1.5"
          opacity="0.4"
        />

        <rect
          x="445"
          y="148"
          width="32"
          height="23"
          rx="2"
          strokeWidth="1.5"
          opacity="0.4"
        />

        <rect x="485" y="148" width="32" height="23" rx="2" opacity="0.35" />

        {/* -----------------------------------------------------
            MAIN DREDGING TOWER
        ------------------------------------------------------ */}

        <path d="M310 185L350 95H390L430 185" strokeWidth="3" opacity="0.6" />

        <path d="M330 145H410" strokeWidth="2" opacity="0.35" />

        <path d="M340 120H400" strokeWidth="1.5" opacity="0.3" />

        {/* -----------------------------------------------------
            SUCTION PIPE
        ------------------------------------------------------ */}

        <path
          d="
            M370 100
            V160
            L350 220
            L330 280
            L315 350
            L300 405
          "
          strokeWidth="10"
          opacity="0.16"
        />

        <path
          d="
            M370 100
            V160
            L350 220
            L330 280
            L315 350
            L300 405
          "
          stroke="url(#tin-pipe)"
          strokeWidth="4"
        />

        {/* Pipe joints */}

        <circle cx="350" cy="220" r="6" strokeWidth="2" opacity="0.55" />

        <circle cx="330" cy="280" r="6" strokeWidth="2" opacity="0.55" />

        <circle cx="315" cy="350" r="6" strokeWidth="2" opacity="0.55" />

        {/* Suction head */}

        <path
          d="
            M282 405
            L300 385
            L318 405
            L310 420
            H290
            Z
          "
          fill="currentColor"
          fillOpacity="0.12"
          strokeWidth="2"
          opacity="0.65"
        />

        {/* -----------------------------------------------------
            MATERIAL / SLURRY FLOW
        ------------------------------------------------------ */}

        <path
          d="
            M300 420
            C285 438 280 455 300 470
            C320 482 345 478 360 462
          "
          strokeWidth="2"
          strokeDasharray="5 7"
          opacity="0.35"
        />

        <path
          d="
            M300 420
            C290 440 290 455 305 468
          "
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* -----------------------------------------------------
            SLURRY PIPE TO PROCESS UNIT
        ------------------------------------------------------ */}

        <path
          d="
            M375 220
            H470
            V120
            H600
          "
          strokeWidth="7"
          opacity="0.12"
        />

        <path
          d="
            M375 220
            H470
            V120
            H600
          "
          stroke="url(#tin-pipe)"
          strokeWidth="2.5"
        />

        {/* -----------------------------------------------------
            PROCESS / SEPARATION UNIT
        ------------------------------------------------------ */}

        <rect
          x="590"
          y="115"
          width="80"
          height="105"
          rx="5"
          fill="currentColor"
          fillOpacity="0.04"
          strokeWidth="2"
          opacity="0.5"
        />

        <ellipse
          cx="630"
          cy="115"
          rx="40"
          ry="9"
          strokeWidth="1.5"
          opacity="0.4"
        />

        <path d="M605 145H655" strokeWidth="1" opacity="0.3" />

        <path d="M605 175H655" strokeWidth="1" opacity="0.3" />

        <path d="M605 205H655" strokeWidth="1" opacity="0.3" />

        {/* -----------------------------------------------------
            OUTLET PIPE
        ------------------------------------------------------ */}

        <path
          d="
            M670 165
            H735
            V220
            H800
          "
          strokeWidth="3"
          opacity="0.4"
        />

        {/* -----------------------------------------------------
            SENSOR / CONTROL PANEL
        ------------------------------------------------------ */}

        <rect
          x="540"
          y="220"
          width="55"
          height="35"
          rx="3"
          fill="currentColor"
          fillOpacity="0.05"
          strokeWidth="1.5"
          opacity="0.5"
        />

        <circle
          cx="555"
          cy="238"
          r="4"
          fill="currentColor"
          stroke="none"
          opacity="0.75"
        />

        <circle
          cx="570"
          cy="238"
          r="4"
          fill="currentColor"
          stroke="none"
          opacity="0.5"
        />

        <circle
          cx="585"
          cy="238"
          r="4"
          fill="currentColor"
          stroke="none"
          opacity="0.3"
        />
      </g>

      {/* =====================================================
          SENSOR NODES
      ====================================================== */}

      <g fill="currentColor" filter="url(#tin-glow)">
        {/* Dredging sensor */}

        <circle cx="350" cy="220" r="4" opacity="0.85" />

        {/* Pipe sensor */}

        <circle cx="470" cy="120" r="4" opacity="0.75" />

        {/* Processing sensor */}

        <circle cx="630" cy="165" r="4" opacity="0.85" />

        {/* Ship sensor */}

        <circle cx="555" cy="238" r="4" opacity="0.8" />

        {/* Control sensor */}

        <circle cx="450" cy="160" r="4" opacity="0.75" />
      </g>

      {/* =====================================================
          DIGITAL TELEMETRY
      ====================================================== */}

      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 7"
        opacity="0.25"
      >
        <path d="M350 220L555 238" />

        <path d="M470 120L630 165" />

        <path d="M630 165L555 238" />

        <path d="M450 160L630 165" />
      </g>

      {/* =====================================================
          DATA SIGNAL
      ====================================================== */}

      <g
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        opacity="0.3"
      >
        <path d="M555 238L700 350" />

        <path d="M630 165L760 330" />

        <path d="M450 160L730 300" />
      </g>

      {/* =====================================================
          UNDERWATER GEOLOGY / TIN DEPOSIT
      ====================================================== */}

      <g stroke="currentColor" strokeLinecap="round">
        <path
          d="
            M0 420
            C80 395 130 435 210 420
            C290 405 340 440 420 420
            C500 400 560 440 640 420
            C720 400 800 440 900 415
          "
          strokeWidth="2"
          opacity="0.18"
        />

        <path
          d="
            M0 455
            C90 430 160 470 250 450
            C340 430 430 475 520 450
            C610 430 700 470 800 445
            C850 435 875 445 900 440
          "
          strokeWidth="1.5"
          opacity="0.12"
        />

        <path
          d="
            M70 485
            C150 465 220 490 300 475
            C390 458 460 492 540 475
            C630 458 710 490 820 470
          "
          strokeWidth="1"
          opacity="0.1"
        />
      </g>

      {/* =====================================================
          TIN / MINERAL PARTICLES
      ====================================================== */}

      <g fill="currentColor" opacity="0.35">
        <circle cx="260" cy="410" r="2" />
        <circle cx="280" cy="435" r="1.5" />
        <circle cx="320" cy="450" r="2" />
        <circle cx="350" cy="425" r="1.5" />
        <circle cx="390" cy="455" r="2" />
        <circle cx="430" cy="430" r="1.5" />
        <circle cx="470" cy="465" r="2" />
        <circle cx="520" cy="440" r="1.5" />
        <circle cx="560" cy="470" r="2" />
        <circle cx="610" cy="445" r="1.5" />
        <circle cx="660" cy="475" r="2" />
      </g>

      {/* =====================================================
          WATER RIPPLE
      ====================================================== */}

      <g stroke="currentColor" fill="none" strokeLinecap="round" opacity="0.18">
        <ellipse cx="300" cy="410" rx="45" ry="10" strokeWidth="1" />

        <ellipse
          cx="300"
          cy="410"
          rx="70"
          ry="16"
          strokeWidth="1"
          opacity="0.6"
        />

        <ellipse
          cx="300"
          cy="410"
          rx="100"
          ry="24"
          strokeWidth="1"
          opacity="0.35"
        />
      </g>

      {/* =====================================================
          DIGITAL CORNER MARKS
      ====================================================== */}

      <g stroke="currentColor" strokeWidth="1" opacity="0.18">
        <path d="M40 70H90" />
        <path d="M40 70V110" />

        <path d="M810 70H860" />
        <path d="M860 70V110" />

        <path d="M40 380V420" />
        <path d="M40 420H90" />

        <path d="M810 420H860" />
        <path d="M860 380V420" />
      </g>
    </svg>
  );
};

export default TinIndustry;
