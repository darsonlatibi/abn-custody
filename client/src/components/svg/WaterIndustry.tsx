import React from "react";

type WaterIndustryProps = {
  className?: string;
};

const WaterIndustry: React.FC<WaterIndustryProps> = ({ className }) => {
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
            GRID
        ====================================================== */}

        <pattern
          id="water-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0V40"
            stroke="currentColor"
            strokeWidth="0.7"
            opacity="0.12"
          />
        </pattern>

        {/* =====================================================
            GLOW
        ====================================================== */}

        <filter id="water-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* =====================================================
            WATER FLOW
        ====================================================== */}

        <linearGradient id="water-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.15" />

          <stop offset="0.5" stopColor="currentColor" stopOpacity="0.9" />

          <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <rect width="900" height="500" fill="url(#water-grid)" />

      {/* =====================================================
          MAIN PROCESS STRUCTURE
      ====================================================== */}

      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* =================================================
            RAW WATER TANK
        ================================================== */}

        <path
          d="
            M80 130
            C80 115 100 105 125 105
            H185
            C210 105 230 115 230 130
            V285
            H80Z
          "
          opacity="0.55"
        />

        <ellipse cx="155" cy="130" rx="75" ry="20" opacity="0.55" />

        <ellipse cx="155" cy="285" rx="75" ry="20" opacity="0.35" />

        {/* Water level */}

        <path d="M95 210H215" strokeDasharray="5 5" opacity="0.35" />

        <path
          d="M105 215C125 205 145 225 165 215C185 205 200 225 215 215"
          opacity="0.5"
        />

        {/* =================================================
            INTAKE PIPE
        ================================================== */}

        <path d="M25 215H80" strokeWidth="7" opacity="0.3" />

        <path d="M25 215H80" stroke="url(#water-flow)" strokeWidth="3" />

        {/* Flow arrow */}

        <path d="M45 208L58 215L45 222" opacity="0.7" />

        {/* =================================================
            PUMP
        ================================================== */}

        <circle cx="285" cy="285" r="38" opacity="0.55" />

        <circle cx="285" cy="285" r="12" opacity="0.45" />

        <path
          d="
            M285 250
            C300 260 310 275 310 285
            C310 300 300 312 285 320
          "
          opacity="0.55"
        />

        <path d="M230 285H247" strokeWidth="6" opacity="0.35" />

        <path d="M323 285H355" strokeWidth="6" opacity="0.35" />

        {/* =================================================
            FILTRATION UNIT
        ================================================== */}

        <rect x="355" y="145" width="95" height="190" rx="8" opacity="0.5" />

        {/* Filter layers */}

        <path d="M370 185H435" opacity="0.3" />

        <path d="M370 215H435" opacity="0.3" />

        <path d="M370 245H435" opacity="0.3" />

        <path d="M370 275H435" opacity="0.3" />

        <path d="M370 305H435" opacity="0.3" />

        {/* Filter center */}

        <path d="M402 165V315" strokeDasharray="4 5" opacity="0.35" />

        {/* =================================================
            MEMBRANE / RO UNIT
        ================================================== */}

        <rect x="485" y="155" width="125" height="170" rx="8" opacity="0.5" />

        <path d="M505 180H590" opacity="0.3" />

        <path d="M505 210H590" opacity="0.3" />

        <path d="M505 240H590" opacity="0.3" />

        <path d="M505 270H590" opacity="0.3" />

        <path d="M505 300H590" opacity="0.3" />

        {/* Membrane elements */}

        <circle cx="525" cy="225" r="14" opacity="0.4" />

        <circle cx="570" cy="225" r="14" opacity="0.4" />

        <circle cx="525" cy="270" r="14" opacity="0.4" />

        <circle cx="570" cy="270" r="14" opacity="0.4" />

        {/* =================================================
            CLEAN WATER TANK
        ================================================== */}

        <path
          d="
            M680 130
            C680 115 700 105 725 105
            H795
            C820 105 840 115 840 130
            V285
            H680Z
          "
          opacity="0.55"
        />

        <ellipse cx="760" cy="130" rx="80" ry="20" opacity="0.55" />

        <ellipse cx="760" cy="285" rx="80" ry="20" opacity="0.35" />

        {/* Clean water level */}

        <path d="M695 205H825" strokeDasharray="5 5" opacity="0.35" />

        <path
          d="
            M705 210
            C725 200 745 220 765 210
            C785 200 805 220 825 210
          "
          opacity="0.5"
        />

        {/* =================================================
            DISTRIBUTION PIPE
        ================================================== */}

        <path d="M840 215H875" strokeWidth="7" opacity="0.3" />

        <path d="M840 215H875" stroke="url(#water-flow)" strokeWidth="3" />

        <path d="M855 208L868 215L855 222" opacity="0.7" />

        {/* =================================================
            PROCESS PIPELINES
        ================================================== */}

        <path d="M230 215H300V285" strokeWidth="4" opacity="0.45" />

        <path d="M323 285H355V240" strokeWidth="4" opacity="0.45" />

        <path d="M450 240H485" strokeWidth="4" opacity="0.45" />

        <path d="M610 240H650V215H680" strokeWidth="4" opacity="0.45" />

        {/* =================================================
            DOSING SYSTEM
        ================================================== */}

        <rect x="275" y="100" width="45" height="65" rx="5" opacity="0.45" />

        <ellipse cx="297" cy="100" rx="22" ry="7" opacity="0.45" />

        <path d="M297 165V215" strokeWidth="3" opacity="0.45" />

        <circle cx="297" cy="190" r="5" opacity="0.75" />

        {/* =================================================
            CONTROL PANEL
        ================================================== */}

        <rect x="405" y="365" width="100" height="70" rx="4" opacity="0.5" />

        <rect x="417" y="378" width="76" height="28" rx="2" opacity="0.3" />

        <circle cx="428" cy="420" r="4" opacity="0.8" />

        <circle cx="450" cy="420" r="4" opacity="0.55" />

        <circle cx="472" cy="420" r="4" opacity="0.35" />

        {/* =================================================
            SIGNAL NETWORK
        ================================================== */}

        <path d="M455 380V330H402V285" strokeDasharray="5 5" opacity="0.4" />

        <path d="M475 380V350H548V300" strokeDasharray="5 5" opacity="0.35" />

        <path d="M495 380V350H760V285" strokeDasharray="5 5" opacity="0.3" />
      </g>

      {/* =====================================================
          SENSOR NODES
      ====================================================== */}

      <g fill="currentColor" filter="url(#water-glow)">
        {/* Raw water */}

        <circle cx="155" cy="210" r="4" opacity="0.85" />

        {/* Pump */}

        <circle cx="285" cy="285" r="4" opacity="0.8" />

        {/* Filter */}

        <circle cx="402" cy="215" r="4" opacity="0.8" />

        {/* RO */}

        <circle cx="548" cy="240" r="4" opacity="0.85" />

        {/* Clean water */}

        <circle cx="760" cy="205" r="4" opacity="0.85" />
      </g>

      {/* =====================================================
          DIGITAL DATA CONNECTIONS
      ====================================================== */}

      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 7"
        opacity="0.3"
      >
        <path d="M155 210L455 380" />
        <path d="M285 285L455 380" />
        <path d="M402 215L455 380" />
        <path d="M548 240L475 380" />
        <path d="M760 205L495 380" />
      </g>

      {/* =====================================================
          WATER DROPLETS
      ====================================================== */}

      <g fill="currentColor" opacity="0.45">
        <path
          d="
            M145 160
            C145 160 136 173 136 179
            C136 185 140 189 145 189
            C150 189 154 185 154 179
            C154 173 145 160 145 160Z
          "
        />

        <path
          d="
            M755 155
            C755 155 746 168 746 174
            C746 180 750 184 755 184
            C760 184 764 180 764 174
            C764 168 755 155 755 155Z
          "
        />

        <path
          d="
            M570 335
            C570 335 563 346 563 351
            C563 356 566 359 570 359
            C574 359 577 356 577 351
            C577 346 570 335 570 335Z
          "
        />
      </g>

      {/* =====================================================
          LABELS
      ====================================================== */}

      <g fill="currentColor" fontFamily="monospace" opacity="0.55">
        <text x="55" y="445" fontSize="12" letterSpacing="3">
          WATER TREATMENT
        </text>

        <text x="55" y="463" fontSize="8" letterSpacing="2" opacity="0.7">
          INTAKE • FILTRATION • RO • DISTRIBUTION
        </text>

        <text x="735" y="390" fontSize="9" letterSpacing="2">
          ABN INDUSTRIAL
        </text>
      </g>
    </svg>
  );
};

export default WaterIndustry;
