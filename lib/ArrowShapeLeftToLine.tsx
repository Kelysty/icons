import type {FC, SVGProps} from 'react';

const ArrowShapeLeftToLine: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M10 6.5V4.029L5.724 7.528a.61.61 0 0 0 0 .944L10 11.971V9.5h3.25a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25H10ZM2.5 7.998V1.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V7.998Zm1.5 0c0-.632.284-1.23.774-1.631l4.319-3.534a1.474 1.474 0 0 1 2.407 1.14V5h1.75c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 13.25 11H11.5v1.026a1.474 1.474 0 0 1-2.407 1.14L4.774 9.634c-.49-.4-.774-1-.774-1.632V8Z"
      clipRule="evenodd"
    />
  </svg>
);

export default ArrowShapeLeftToLine;
