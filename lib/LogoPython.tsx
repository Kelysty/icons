import type {FC, SVGProps} from 'react';

const LogoPython: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M4 5.5h3.752a.75.75 0 0 0 0-1.5H5.5A1.5 1.5 0 0 1 7 2.5h2A1.5 1.5 0 0 1 10.5 4v2c0 .69-.56 1.25-1.25 1.25h-2.5A2.75 2.75 0 0 0 4 10v.5A1.5 1.5 0 0 1 2.5 9V7A1.5 1.5 0 0 1 4 5.5Zm1.5 5V12A1.5 1.5 0 0 0 7 13.5h2a1.5 1.5 0 0 0 1.5-1.5H8.25a.75.75 0 0 1 0-1.5H12A1.5 1.5 0 0 0 13.5 9V7A1.5 1.5 0 0 0 12 5.5V6a2.75 2.75 0 0 1-2.75 2.75h-2.5c-.69 0-1.25.56-1.25 1.25v.5ZM7 1a3 3 0 0 0-3 3 3 3 0 0 0-3 3v2a3 3 0 0 0 3 3 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3 3 3 0 0 0 3-3V7a3 3 0 0 0-3-3 3 3 0 0 0-3-3H7Z"
      clipRule="evenodd"
    />
  </svg>
);

export default LogoPython;
