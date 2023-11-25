import type {FC, SVGProps} from 'react';

const EnvelopeOpen: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M14 6.498V11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V6.498l.001-.06L6.35 9.7a2.75 2.75 0 0 0 3.3 0l4.349-3.262.001.06Zm-.806-1.33L8.74 2.642a1.5 1.5 0 0 0-1.48 0L2.806 5.167 7.25 8.5a1.25 1.25 0 0 0 1.5 0l4.444-3.333ZM.5 6.497a3 3 0 0 1 1.521-2.61l4.5-2.55a3 3 0 0 1 2.958 0l4.5 2.55a3 3 0 0 1 1.521 2.61V11.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3V6.498Z"
      clipRule="evenodd"
    />
  </svg>
);

export default EnvelopeOpen;
