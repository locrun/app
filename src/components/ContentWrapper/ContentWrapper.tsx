import { FC, ReactNode } from 'react'
import s from "./ContentWrapper.module.scss"

type Props = {
  children: ReactNode
}

const ContentWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={s.wrapper}>{children}</div>
  )
}

export default ContentWrapper