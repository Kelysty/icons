import type {FC, SVGProps} from 'react';

const LogoTelegram: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M5.254 8.521 9.61 5.86a.75.75 0 0 1 .782 1.28L6.586 9.465 9.77 12.65a1.199 1.199 0 0 0 1.973-.433l2.692-7.308a1.045 1.045 0 0 0-.98-1.408h-.105c-.1 0-.201.013-.298.04L2.022 6.509a.707.707 0 0 0 .046 1.375l3.186.637Zm-3.48.834L5 10l3.71 3.71a2.7 2.7 0 0 0 4.44-.976l2.693-7.308A2.544 2.544 0 0 0 13.454 2h-.104c-.232 0-.464.03-.688.091l-11.03 2.97a2.207 2.207 0 0 0 .142 4.294Z"
      clipRule="evenodd"
    />
  </svg>
);

export default LogoTelegram;
