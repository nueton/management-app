import React from "react";
type SandGlassIconProps = {
  style?: string;
};

function SandGlassIcon({ style }: SandGlassIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.833313 0.833313H19.1666M4.16665 0.833313V4.99998C4.16665 7.49998 8.33331 7.69581 8.33331 9.99998C8.33331 12.3041 4.16665 12.5 4.16665 15V19.1666M15.8333 0.833313V4.99998C15.8333 7.49998 11.6666 7.69581 11.6666 9.99998C11.6666 12.3041 15.8333 12.5 15.8333 15V19.1666M0.833313 19.1666H19.1666M8.33331 3.74998H11.6666V4.99998C11.6666 5.83331 9.99998 6.66665 9.99998 6.66665C9.99998 6.66665 8.33331 5.83331 8.33331 4.99998V3.74998ZM6.66665 17.5C6.66665 15.8333 9.99998 14.1666 9.99998 14.1666C9.99998 14.1666 13.3333 15.8333 13.3333 17.5V19.1666H6.66665V17.5Z"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default SandGlassIcon;
