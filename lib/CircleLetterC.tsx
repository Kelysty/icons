import type {FC, SVGProps} from 'react';

const CircleLetterC: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M13.5 8a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0ZM15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0ZM6.458 8c0-.8.2-1.289.445-1.569C7.136 6.165 7.487 6 8 6c.368 0 .648.086.857.222.205.134.384.345.51.672a.75.75 0 0 0 1.4-.538c-.226-.59-.593-1.066-1.09-1.39C9.181 4.643 8.604 4.5 8 4.5c-.862 0-1.657.293-2.226.944-.557.637-.816 1.523-.816 2.556 0 1.033.259 1.92.816 2.556.569.65 1.364.944 2.226.944.605 0 1.182-.143 1.676-.466.498-.324.865-.8 1.091-1.39a.75.75 0 0 0-1.4-.538c-.126.327-.305.538-.51.672-.209.136-.49.222-.857.222-.513 0-.864-.165-1.097-.431-.245-.28-.445-.77-.445-1.569Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CircleLetterC;
