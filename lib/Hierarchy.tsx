import type {FC, SVGProps} from 'react';

const Hierarchy: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M12.25 2.5h-8.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-.75-.75Zm0 4.5H5v3.13c0 .69.56 1.25 1.25 1.25H7v-.13A2.25 2.25 0 0 1 9.25 9h3a2.25 2.25 0 0 1 2.25 2.25v1.5A2.25 2.25 0 0 1 12.25 15h-3a2.25 2.25 0 0 1-2.246-2.12H6.25a2.75 2.75 0 0 1-2.75-2.75V6.986a2.25 2.25 0 0 1-2-2.236v-1.5A2.25 2.25 0 0 1 3.75 1h8.5a2.25 2.25 0 0 1 2.25 2.25v1.5A2.25 2.25 0 0 1 12.25 7Zm-3 3.5h3a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Hierarchy;
