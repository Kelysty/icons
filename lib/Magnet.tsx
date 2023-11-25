import type {FC, SVGProps} from 'react';

const Magnet: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M5.28 3.841 3.925 5.197a4.864 4.864 0 0 0 6.878 6.878l1.356-1.355-1.379-1.38-1.305 1.306a2.914 2.914 0 0 1-4.121-4.122L6.659 5.22 5.28 3.84Zm1.061-1.06L7.72 4.158 8.879 3 7.5 1.621l-1.159 1.16ZM14.379 8.5l-1.16 1.159-1.378-1.379L13 7.121 14.379 8.5ZM2.864 4.136l3.64-3.64a1.41 1.41 0 0 1 1.992 0l1.737 1.737c.424.424.424 1.11 0 1.534L6.414 7.586a1.414 1.414 0 0 0 2 2l3.82-3.82a1.084 1.084 0 0 1 1.533 0l1.737 1.738c.55.55.55 1.442 0 1.992l-3.64 3.64a6.364 6.364 0 1 1-9-9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Magnet;
