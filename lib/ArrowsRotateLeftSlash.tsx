import type {FC, SVGProps} from 'react';

const ArrowsRotateLeftSlash: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M8 1.5a6.47 6.47 0 0 1 2.709.59L9.552 3.245A4.996 4.996 0 0 0 8 3a4.983 4.983 0 0 0-3.57 1.5h1.32a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 2 5.25v-3a.75.75 0 1 1 1.5 0v1.06A6.48 6.48 0 0 1 8 1.5Zm4.026 3.534-6.991 6.992C5.865 12.638 6.89 13 8 13a4.983 4.983 0 0 0 3.57-1.5h-1.32a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-1.06A6.48 6.48 0 0 1 8 14.5a6.472 6.472 0 0 1-4.035-1.404l-.935.934a.75.75 0 0 1-1.06-1.06l11-11a.75.75 0 0 1 1.06 1.06l-.934.935a6.472 6.472 0 0 1 1.349 3.184.75.75 0 1 1-1.488.194 4.972 4.972 0 0 0-.93-2.309ZM3.043 8.657c.04.308.109.607.203.895L2.09 10.708a6.46 6.46 0 0 1-.534-1.857.75.75 0 0 1 1.487-.194Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowsRotateLeftSlash;
