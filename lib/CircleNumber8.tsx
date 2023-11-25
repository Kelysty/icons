import type {FC, SVGProps} from 'react';

const CircleNumber8: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 13.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm1.443-5.436A.692.692 0 0 0 9.5 9.25a.692.692 0 0 0-.057-.314.413.413 0 0 0-.14-.153C9.124 8.655 8.723 8.5 8 8.5s-1.124.155-1.303.283a.413.413 0 0 0-.14.153.692.692 0 0 0-.057.314c0 .172.033.265.057.314a.413.413 0 0 0 .14.153c.179.128.58.283 1.303.283s1.124-.155 1.303-.283a.413.413 0 0 0 .14-.153Zm-3.647-1.98C5.29 7.957 5 8.513 5 9.25c0 1.5 1.2 2.25 3 2.25s3-.75 3-2.25c0-.736-.289-1.292-.796-1.667.192-.291.296-.652.296-1.083 0-1.333-1-2-2.5-2s-2.5.667-2.5 2c0 .43.104.792.296 1.083ZM8 7c.556 0 .817-.127.903-.193a.173.173 0 0 0 .06-.069A.567.567 0 0 0 9 6.5a.567.567 0 0 0-.038-.238.173.173 0 0 0-.059-.069C8.817 6.127 8.556 6 8 6s-.817.127-.903.193a.173.173 0 0 0-.06.069A.567.567 0 0 0 7 6.5c0 .144.026.214.038.238.01.022.024.042.059.069.086.066.347.193.903.193Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CircleNumber8;
