import type {FC, SVGProps} from 'react';

const QuoteClose: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.589 9.67A2.751 2.751 0 0 1 1.5 7v-.25A2.75 2.75 0 0 1 4.25 4h.25a2.747 2.747 0 0 1 2.748 2.657v.003h.002V7c0 .131-.01.26-.027.386-.02.261-.05.518-.09.77a8.028 8.028 0 0 1-.559 1.918 7.208 7.208 0 0 1-2.162 2.801 7.043 7.043 0 0 1-.098.076.237.237 0 0 1-.144.049.251.251 0 0 1-.22-.367 17.026 17.026 0 0 0 .65-1.384c.197-.474.396-1.013.557-1.578a2.712 2.712 0 0 1-.657.079h-.25c-.228 0-.45-.028-.661-.08Zm-.549 1.405A4.252 4.252 0 0 1 0 7v-.25A4.25 4.25 0 0 1 4.25 2.5h.25c1.452 0 2.733.728 3.5 1.838A4.245 4.245 0 0 1 11.5 2.5h.25A4.25 4.25 0 0 1 16 6.664V7c0 .183-.012.365-.035.543-.207 2.62-1.358 4.966-3.488 6.599a1.738 1.738 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564.111-.211.26-.508.418-.86a4.252 4.252 0 0 1-2.005-1.297 8.763 8.763 0 0 1-3.058 4.363 1.738 1.738 0 0 1-1.057.358c-1.341 0-2.146-1.425-1.548-2.564.111-.211.26-.508.418-.86Zm7.8-1.405c.211.052.433.08.661.08h.25a2.76 2.76 0 0 0 .657-.079 14.405 14.405 0 0 1-.68 1.865 17.927 17.927 0 0 1-.527 1.097.251.251 0 0 0 .22.367.238.238 0 0 0 .144-.049l.098-.076a7.207 7.207 0 0 0 2.221-2.94 8.027 8.027 0 0 0 .5-1.779 9.01 9.01 0 0 0 .09-.77A2.73 2.73 0 0 0 14.501 7v-.339H14.5v-.004A2.747 2.747 0 0 0 11.75 4h-.251a2.75 2.75 0 0 0-2.75 2.75V7c0 1.29.89 2.374 2.089 2.67Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="currentColor"
          d="M0 0h16v16H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default QuoteClose;
