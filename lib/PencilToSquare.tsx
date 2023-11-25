import type {FC, SVGProps} from 'react';

const PencilToSquare: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M6.169 6.331a3 3 0 0 0-.833 1.6l-.338 1.912a1 1 0 0 0 1.159 1.159l1.912-.338a3 3 0 0 0 1.6-.833l3.07-3.07 2-2A.894.894 0 0 0 15 4.13 3.13 3.13 0 0 0 11.87 1a.894.894 0 0 0-.632.262l-2 2-3.07 3.07Zm3.936-1.814L7.229 7.392a1.5 1.5 0 0 0-.416.8L6.6 9.4l1.208-.213.057-.01a1.5 1.5 0 0 0 .743-.406l2.875-2.876a1.63 1.63 0 0 0-1.378-1.378Zm2.558.199a3.143 3.143 0 0 0-1.379-1.38l.82-.82a1.63 1.63 0 0 1 1.38 1.38l-.82.82ZM8 2.25a.75.75 0 0 0-.75-.75H4.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V8.75a.75.75 0 0 0-1.5 0v2.75a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3h2.75A.75.75 0 0 0 8 2.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default PencilToSquare;
