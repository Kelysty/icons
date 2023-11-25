import type {FC, SVGProps} from 'react';

const Bell: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="m4.665 7.822.62-3.096a2.77 2.77 0 0 1 5.43 0l.62 3.096a4.782 4.782 0 0 0 1.305 2.44l.194.193a.567.567 0 0 1-.273.953l-.821.19a16.63 16.63 0 0 1-7.48 0l-.82-.19a.567.567 0 0 1-.274-.953l.194-.193a4.774 4.774 0 0 0 1.305-2.44Zm-1.47-.294.619-3.096a4.27 4.27 0 0 1 8.372 0l.62 3.096c.126.634.438 1.216.895 1.673l.194.194a2.066 2.066 0 0 1-.997 3.475l-.821.19c-.701.16-1.41.28-2.12.358a2 2 0 0 1-3.913 0 18.134 18.134 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673Z"
      clipRule="evenodd"
    />
  </svg>
);

export default Bell;
