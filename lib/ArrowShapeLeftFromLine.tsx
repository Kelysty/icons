import type {FC, SVGProps} from 'react';

const ArrowShapeLeftFromLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M7 6.5V4.029L2.724 7.528a.61.61 0 0 0 0 .944L7 11.971V9.5h3.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H7Zm5 2.75V6.749A1.75 1.75 0 0 0 10.25 5H8.5V3.974a1.474 1.474 0 0 0-2.407-1.14L1.774 6.366a2.11 2.11 0 0 0 0 3.266l4.319 3.534a1.474 1.474 0 0 0 2.407-1.14V11h1.75A1.75 1.75 0 0 0 12 9.25Zm1.5-7.5a.75.75 0 0 1 1.5 0v12.5a.75.75 0 0 1-1.5 0V1.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowShapeLeftFromLine;
