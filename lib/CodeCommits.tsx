import type {FC, SVGProps} from 'react';

const CodeCommits: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 3.25h-.008a1.25 1.25 0 1 0 .016 0H8Zm.75-2.5v1.104a2.751 2.751 0 0 1 0 5.292v1.708a2.751 2.751 0 0 1 0 5.293v1.103a.75.75 0 0 1-1.5 0v-1.104a2.751 2.751 0 0 1 0-5.292V7.147a2.751 2.751 0 0 1 0-5.293V.75a.75.75 0 0 1 1.5 0Zm-.745 12h-.01a1.25 1.25 0 1 1 .01 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          d="M0 0h16v16H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default CodeCommits;
