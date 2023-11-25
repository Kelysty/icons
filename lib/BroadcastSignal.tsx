import type {FC, SVGProps} from 'react';

const BroadcastSignal: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M12.442 13.033c-.278.307-.319.777-.05 1.092.27.314.747.353 1.033.053a7.5 7.5 0 1 0-10.85 0c.286.3.763.261 1.032-.053.27-.315.23-.785-.05-1.092a6 6 0 1 1 8.884 0Zm-.987-1.15c-.265.318-.745.279-1.015-.036-.27-.314-.223-.784.015-1.123a3 3 0 1 0-4.91 0c.238.339.284.809.015 1.123-.27.315-.75.354-1.015.036a4.5 4.5 0 1 1 6.91 0ZM8 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default BroadcastSignal;
