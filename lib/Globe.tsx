import type {FC, SVGProps} from 'react';

const Globe: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M9.208 12.346c-.485 1-.953 1.154-1.208 1.154s-.723-.154-1.208-1.154c-.372-.768-.647-1.858-.749-3.187a20.77 20.77 0 0 0 3.914 0c-.102 1.329-.377 2.419-.75 3.187Zm.788-4.699C9.358 7.714 8.69 7.75 8 7.75s-1.358-.036-1.996-.103c.037-1.696.343-3.075.788-3.993C7.277 2.654 7.745 2.5 8 2.5s.723.154 1.208 1.154c.445.918.75 2.297.788 3.993Zm1.478 1.306c-.085 1.516-.375 2.848-.836 3.874a5.501 5.501 0 0 0 2.843-4.364c-.621.199-1.295.364-2.007.49Zm1.918-2.043c-.572.204-1.21.379-1.901.514-.056-1.671-.354-3.14-.853-4.251a5.508 5.508 0 0 1 2.754 3.737Zm-8.883.514c.056-1.671.354-3.14.853-4.251A5.508 5.508 0 0 0 2.608 6.91c.572.204 1.21.379 1.901.514ZM2.52 8.463a5.501 5.501 0 0 0 2.843 4.364c-.46-1.026-.75-2.358-.836-3.874a15.535 15.535 0 0 1-2.007-.49ZM15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Globe;
