import { FC } from 'react'
import { useAppSelector } from 'redux/types';
import "react-step-progress-bar/styles.css";
import { ProgressBar as MyProgressBar, Step } from "react-step-progress-bar";

import cn from "classnames"
import s from "./ProgressBar.module.scss"

const ProgressBar: FC = () => {
  const { percent } = useAppSelector(state => state.progressBar)
  return (
    <div className={s.wrapper}>
      <MyProgressBar
        percent={percent}
        height="8px"
        filledBackground="#5558FA"
      >
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div className={cn(s.next, {
              [s.current]: accomplished && percent === 0,
              [s.finished]: accomplished && percent >= 50,
            })}>
              <span className={s.step_count_1}>1</span>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div className={cn(s.next, {
              [s.current]: accomplished && percent === 50,
              [s.finished]: accomplished && percent === 100,
            })}>
              <span className={s.step_count_2}>2</span>
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }: { accomplished: boolean }) => (
            <div className={cn(s.next, {
              [s.current]: accomplished && percent === 100,
            })}>
              <span className={s.step_count_3}>3</span>
            </div>
          )}
        </Step>
      </MyProgressBar>
    </div >
  )
}

export default ProgressBar