import { FC } from "react";

type Props = {
  className?: string;
}

export const ArrowIcon: FC<Props> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g opacity="0.5">
      <path
        d="M16.293 9.293L12 13.586L7.707 9.293L6.293 10.707L12 16.414L17.707 10.707L16.293 9.293Z"
        fill="#3C3C3C"
      />
    </g>
  </svg>
);
