import type {FC, SVGProps} from 'react';

const Circles3Plus: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M3.047 7.125A3 3 0 1 0 4.5 1.5a3 3 0 0 0-1.453 5.625ZM4.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-1.453 8.125A3 3 0 1 0 4.5 8.5a3 3 0 0 0-1.453 5.625ZM4.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7 1.5a3 3 0 1 1 0-6 3 3 0 1 1 0 6Zm1.5-3a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.75-9.25a.75.75 0 0 0-1.5 0v1.501h-1.5a.75.75 0 1 0 0 1.5h1.501v1.502a.75.75 0 0 0 1.5 0V5.25h1.501a.75.75 0 0 0 0-1.5h-1.5v-1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Circles3Plus;
