import type {FC, SVGProps} from 'react';

const Funnel: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M12.5 4c0 .174-.071.513-.885.888C10.8 5.263 9.538 5.5 8 5.5c-1.538 0-2.799-.237-3.615-.612C3.57 4.513 3.5 4.174 3.5 4c0-.174.071-.513.885-.888C5.2 2.737 6.462 2.5 8 2.5c1.538 0 2.799.237 3.615.612.814.375.885.714.885.888Zm-1.448 2.66C10.158 6.888 9.114 7 8 7s-2.158-.113-3.052-.34l1.98 2.905c.21.308.322.672.322 1.044v3.37c.06.012.141.021.25.021.422 0 .749-.14.95-.316.185-.162.3-.38.3-.684v-2.39c0-.373.112-.737.322-1.045l1.98-2.904ZM8 1c3.314 0 6 1 6 3a3.24 3.24 0 0 1-.563 1.826l-3.125 4.584a.354.354 0 0 0-.062.2V13c0 1.5-1.25 2.5-2.75 2.5s-1.75-1-1.75-1v-3.89a.354.354 0 0 0-.061-.2L2.563 5.826A3.242 3.242 0 0 1 2 4c0-2 2.686-3 6-3Zm-.88 12.936c-.01-.005-.014-.009-.013-.01l.013.01Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Funnel;
