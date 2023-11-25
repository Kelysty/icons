import type {FC, SVGProps} from 'react';

const Paperclip: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M9.77 10.73a.717.717 0 0 0 .01-.01l3.08-3.08a3.889 3.889 0 1 0-5.5-5.5L4.73 4.77l-.01.01-1.667 1.666a5.303 5.303 0 0 0 7.5 7.5l3.167-3.166a.75.75 0 1 0-1.061-1.06l-3.166 3.166a3.803 3.803 0 1 1-5.379-5.379L5.33 6.291l.011-.01L8.421 3.2a2.39 2.39 0 0 1 3.38 3.378l-1.13 1.13-.012.012-2.995 2.994a.975.975 0 1 1-1.378-1.378L9.28 6.34a.75.75 0 0 0-1.06-1.06L5.225 8.274a2.475 2.475 0 0 0 3.5 3.5l1.044-1.044Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Paperclip;