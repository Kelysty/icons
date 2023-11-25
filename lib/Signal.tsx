import type {FC, SVGProps} from 'react';

const Signal: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M3.261 2.186c.337-.274.829-.154 1.044.223.197.344.09.777-.21 1.035A5.987 5.987 0 0 0 2 8a5.99 5.99 0 0 0 2.095 4.556c.3.258.407.69.21 1.035-.215.377-.707.497-1.044.223A7.485 7.485 0 0 1 .5 8a7.485 7.485 0 0 1 2.761-5.814Zm8.434.223c-.197.344-.09.777.21 1.035A5.986 5.986 0 0 1 14 8a5.986 5.986 0 0 1-2.095 4.556c-.3.258-.407.69-.21 1.035.215.377.707.497 1.044.223A7.485 7.485 0 0 0 15.5 8a7.485 7.485 0 0 0-2.761-5.814c-.337-.274-.829-.154-1.044.223ZM4.759 4.878c.315-.327.837-.21 1.062.184.19.33.097.744-.144 1.04A2.988 2.988 0 0 0 5 8c0 .72.254 1.381.677 1.899.241.295.333.708.144 1.04-.225.393-.747.51-1.062.183A4.485 4.485 0 0 1 3.5 8c0-1.213.48-2.313 1.26-3.122Zm5.42.184c-.19.33-.098.744.144 1.04C10.746 6.618 11 7.28 11 8s-.254 1.381-.677 1.899c-.242.295-.333.708-.144 1.04.225.393.747.51 1.062.183A4.484 4.484 0 0 0 12.5 8c0-1.213-.48-2.313-1.26-3.122-.314-.327-.836-.21-1.061.184ZM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Signal;
