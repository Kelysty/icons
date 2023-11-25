import type {FC, SVGProps} from 'react';

const CurlyBrackets: FC<SVGProps<SVGSVGElement>> = (props) => (
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
      d="M3.413 3.421A.841.841 0 0 1 4.25 2.5a.75.75 0 0 0 0-1.5 2.341 2.341 0 0 0-2.33 2.563l.199 2.096a.898.898 0 0 1-.677.957l-.139.035a1.39 1.39 0 0 0 0 2.698l.14.035a.898.898 0 0 1 .676.957l-.2 2.096A2.341 2.341 0 0 0 4.25 15a.75.75 0 0 0 0-1.5.841.841 0 0 1-.837-.921l.2-2.096A2.399 2.399 0 0 0 2.04 8a2.399 2.399 0 0 0 1.571-2.483l-.2-2.096Zm9.175 9.158a.841.841 0 0 1-.838.921.75.75 0 0 0 0 1.5 2.341 2.341 0 0 0 2.33-2.563l-.199-2.096a.898.898 0 0 1 .677-.957l.139-.035a1.39 1.39 0 0 0 0-2.698l-.14-.035a.898.898 0 0 1-.676-.957l.2-2.096A2.341 2.341 0 0 0 11.75 1a.75.75 0 0 0 0 1.5c.496 0 .884.427.838.921l-.2 2.096A2.399 2.399 0 0 0 13.959 8a2.399 2.399 0 0 0-1.571 2.483l.2 2.096Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CurlyBrackets;