import type {FC, SVGProps} from 'react';

const CloudNutHex: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M4.5 5.25a3.25 3.25 0 0 1 6.398-.811.75.75 0 0 0 .702.563 2.986 2.986 0 0 1 1.94.798c.591.549.96 1.33.96 2.2A.75.75 0 0 0 16 8a4.49 4.49 0 0 0-1.44-3.3 4.489 4.489 0 0 0-2.373-1.148 4.751 4.751 0 0 0-9.184 1.522A3.751 3.751 0 0 0 3.75 12.5h.5a.75.75 0 0 0 0-1.5h-.5a2.25 2.25 0 0 1-.002-4.5h.03a.75.75 0 0 0 .747-.843A3.289 3.289 0 0 1 4.5 5.25Zm7.123 8.25 1.406-2.5-1.406-2.5H8.877L7.471 11l1.406 2.5h2.746Zm2.713-1.765a1.5 1.5 0 0 0 0-1.47l-1.406-2.5A1.5 1.5 0 0 0 11.623 7H8.877a1.5 1.5 0 0 0-1.307.765l-1.406 2.5a1.5 1.5 0 0 0 0 1.47l1.406 2.5A1.5 1.5 0 0 0 8.877 15h2.746a1.5 1.5 0 0 0 1.307-.765l1.406-2.5ZM11.25 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CloudNutHex;