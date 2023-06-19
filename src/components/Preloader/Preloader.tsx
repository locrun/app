import { FC } from "react";
import s from "./Preloader.module.scss";

interface Props {
  customText: string;
}
const Preloader: FC<Props> = ({ customText }) => {
  return (
    <div className={s.spinnerContainer}>
      <svg
        width="100%"
        viewBox="0 0 276 276"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="spinner">
          <circle
            id="bottom"
            cx="138"
            cy="138"
            r="114"
            stroke="#DBDBDB"
            strokeWidth="18"
          />
          <circle
            className={s.upper}
            cx="138"
            cy="138"
            r="123"
            stroke="#5558fa"
            strokeWidth="30"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="373 100"
            style={{ animationDuration: "2s" }}
          />
        </g>
      </svg>
      <p>{customText}</p>
    </div>
  );
};

export default Preloader;
