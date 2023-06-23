import { FC } from 'react'
import cn from "classnames"
import s from "./InputLabel.module.scss"

interface InputLabelProps {
  label: string
  className?: string
}

const InputLabel: FC<InputLabelProps> = ({ label, className }) => {
  return (
    <span className={cn(s.label, className)}>{label}</span>
  )
}

export default InputLabel