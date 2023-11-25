import type {FC, SVGProps} from 'react';

const Comment: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="m4.843 10.944-.194 2.335a.204.204 0 0 0 .339.17l2.21-1.964.589.013L8 11.5c1.695 0 3.087-.44 4.02-1.177.89-.702 1.48-1.76 1.48-3.323s-.59-2.62-1.48-3.323C11.087 2.94 9.695 2.5 8 2.5c-1.695 0-3.087.44-4.02 1.177C3.09 4.38 2.5 5.437 2.5 7c0 1.648.656 2.742 1.648 3.448l.695.496Zm1.141 3.625 1.77-1.572C7.834 13 7.916 13 8 13c3.866 0 7-2 7-6s-3.134-6-7-6-7 2-7 6c0 2.117.878 3.674 2.277 4.67l-.123 1.484a1.704 1.704 0 0 0 2.83 1.415Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Comment;
