import { FC, ReactNode } from 'react'

import cn from "classnames"
import s from "./Button.module.scss"


interface ButtonProps {
  children?: ReactNode
  type?: 'submit' | "button"
  className?: string
  title?: string
  onClick?: () => void
  id?: string
}

const Button: FC<ButtonProps> = ({ children, type = "button", id, onClick, className, title }) => {
  return (
    <button
      type={type}
      id={id}
      className={cn(s.button, className)}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
export default Button;