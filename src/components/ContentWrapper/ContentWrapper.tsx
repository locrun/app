import { CSSProperties, FC, ReactNode } from 'react'
import s from "./ContentWrapper.module.scss"

type Props = {
  children: ReactNode
  style?: CSSProperties
}

const ContentWrapper: FC<Props> = ({ children, style }) => {
  return (
    <div style={style} className={s.wrapper}>
      {children}
    </div>
  )
}

export default ContentWrapper