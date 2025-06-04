const AllMessagesIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8_153)">
        <mask
          id="mask0_8_153"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="18"
          height="18"
        >
          <path
            d="M16.5 9C16.5 13.1423 13.1423 16.5 9 16.5H1.5V9C1.5 4.85775 4.85775 1.5 9 1.5C13.1423 1.5 16.5 4.85775 16.5 9Z"
            fill="white"
            stroke="white"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.25 6.75H12M5.25 9.75H12M5.25 12.75H9"
            stroke="black"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#mask0_8_153)">
          <path d="M0 0H18V18H0V0Z" fill="#818181" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_8_153">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AllMessagesIcon;
