import type {FC, SVGProps} from 'react';

const LetterM: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M4.062 2c.454 0 .876.234 1.115.62L8 7.162l2.823-4.542a1.312 1.312 0 0 1 2.427.692v9.938a.75.75 0 0 1-1.5 0V3.97L8.637 8.98a.75.75 0 0 1-1.274 0L4.25 3.97v9.28a.75.75 0 0 1-1.5 0V3.312C2.75 2.588 3.338 2 4.062 2Z"
      clipRule="evenodd"
    />
  </svg>
);

export default LetterM;
