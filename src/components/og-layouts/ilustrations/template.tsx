const TemplateIlustration = () => {
  return (
    <svg
      width={1200}
      height={630}
      viewBox="0 0 1200 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_61)">
        <mask
          id="mask0_7_61"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={1200}
          height={630}
        >
          <path d="M0 0H1200V630H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_7_61)">
          <path d="M0 0H1200V630H0V0Z" fill="#1E293B" />
          <mask
            id="mask1_7_61"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x={35}
            y={-1}
            width={1202}
            height={632}
          >
            <path
              d="M36 0H1236V630H36V0Z"
              fill="url(#paint0_radial_7_61)"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={2}
              strokeDasharray="4 8"
            />
          </mask>
          <g mask="url(#mask1_7_61)">
            <path
              d="M116 0V630M196 0V630M276 0V630M356 0V630M436 0V630M516 0V630M596 0V630M676 0V630M756 0V630M836 0V630M916 0V630M996 0V630M1076 0V630M1156 0V630M36 555H1236M36 475H1236M36 395H1236M36 315H1236M36 235H1236M36 155H1236M36 75H1236"
              stroke="white"
              strokeOpacity="0.3"
              strokeWidth={2}
              strokeDasharray="4 8"
            />
          </g>
          <path
            d="M81 474H677V476H81V474Z"
            fill="url(#paint1_linear_7_61)"
            fillOpacity="0.08"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_7_61"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(837 315) rotate(149.931) scale(307.363 397.506)"
        >
          <stop stopColor="#D9D9D9" />
          <stop offset={1} stopColor="#D9D9D9" stopOpacity={0} />
        </radialGradient>
        <linearGradient
          id="paint1_linear_7_61"
          x1={81}
          y1="475.999"
          x2="464.5"
          y2="475.999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_7_61">
          <rect width={1200} height={630} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TemplateIlustration;
