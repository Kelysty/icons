import type {FC, SVGProps} from 'react';

const Database: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M11.615 4.888c.814-.375.885-.714.885-.888 0-.174-.071-.513-.885-.888C10.8 2.737 9.538 2.5 8 2.5c-1.538 0-2.799.237-3.615.612-.814.375-.885.714-.885.888 0 .174.071.513.885.888C5.2 5.263 6.462 5.5 8 5.5c1.538 0 2.799-.237 3.615-.612Zm.885 1.235C11.4 6.708 9.792 7 8 7c-1.792 0-3.4-.292-4.5-.877V8c0 .174.071.513.885.888C5.2 9.263 6.462 9.5 8 9.5c1.538 0 2.799-.237 3.615-.612.814-.375.885-.714.885-.888V6.123Zm0 4C11.4 10.708 9.792 11 8 11c-1.792 0-3.4-.293-4.5-.877V12c0 .174.071.513.885.887.816.377 2.077.613 3.615.613 1.538 0 2.799-.236 3.615-.613.814-.374.885-.713.885-.887v-1.877ZM14 4c0-2-2.686-3-6-3S2 2 2 4v8c0 2 2.686 3 6 3s6-1 6-3V4Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Database;