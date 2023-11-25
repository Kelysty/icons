import type {FC, SVGProps} from 'react';

const ArrowUpToLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M7.47 4.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 6.56v7.69a.75.75 0 0 1-1.5 0V6.56L6.03 7.78a.75.75 0 0 1-1.06-1.06l2.5-2.5Zm6.78-1.72a.75.75 0 0 0 0-1.5H1.75a.75.75 0 0 0 0 1.5h12.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowUpToLine;
