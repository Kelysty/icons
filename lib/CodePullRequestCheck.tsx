import type {FC, SVGProps} from 'react';

const CodePullRequestCheck: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M5.967 6.399a2.765 2.765 0 0 0 .88-1.24v-.002L8.22 6.53a.75.75 0 0 0 1.06-1.06L8.81 5h.69A1.501 1.501 0 0 1 11 6.5v1.75a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3h-.69l.47-.47a.75.75 0 0 0-1.06-1.06L6.847 3.343A2.755 2.755 0 0 0 4.25 1.5a2.75 2.75 0 0 0-.75 5.396v2.208a2.751 2.751 0 1 0 1.5 0V6.896c.357-.1.685-.272.967-.497Zm4.063 4.07a.75.75 0 1 0-1.06 1.061l2 2a.75.75 0 0 0 1.13-.08l3-4a.75.75 0 0 0-1.2-.9l-2.481 3.308-1.389-1.388Zm-6.842.622A1.246 1.246 0 0 0 3 11.75a1.25 1.25 0 1 0 .188-.659Zm1.6-7.97a1.25 1.25 0 1 1-1.076 2.257 1.25 1.25 0 0 1 1.076-2.257Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CodePullRequestCheck;
