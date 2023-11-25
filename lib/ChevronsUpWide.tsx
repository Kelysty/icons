import type {FC, SVGProps} from 'react';

const ChevronsUpWide: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M13.097 12.383a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 1 0 .806 1.266L8 9.139l5.097 3.244Zm0-4.5a.75.75 0 0 0 .806-1.266l-5.5-3.5a.75.75 0 0 0-.806 0l-5.5 3.5a.75.75 0 0 0 .806 1.266L8 4.639l5.097 3.244Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ChevronsUpWide;
