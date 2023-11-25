import type {FC, SVGProps} from 'react';

const Receipt: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M6.3 2 3.9.5 2 2v13.5l1.5-.776L4.9 14l2.4 1.5L9.7 14l2.4 1.5L14 14V.5l-1.5.776L11.1 2 8.7.5 6.3 2Zm2.4.269L7.095 3.272l-.795.497-.795-.497-1.504-.94-.501.395v10.308l.71-.367.76-.393.725.453L7.3 13.731l1.605-1.003.795-.497.795.497 1.504.94.501-.395V2.965l-.71.367-.76.393-.725-.453L8.7 2.269ZM5 6.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 6.5Zm.75 2.25a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Receipt;
