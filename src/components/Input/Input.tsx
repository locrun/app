import { DetailedHTMLProps, FC, ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import cn from "classnames"
import s from "./Input.module.scss"

interface InputProps {
  className?: string
  defaultValue?: string
  type?: string,
  disabled?: Boolean
  placeholder?: string
  name?: string
  id?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface IPropsInput extends
  DetailedHTMLProps<HTMLAttributes<HTMLInputElement>,
  HTMLInputElement> {
  className?: string
  defaultValue?: string
  type?: string,
  disabled?: Boolean
  placeholder?: string
  name?: string
  ref?: ForwardedRef<HTMLInputElement>
  id?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input: FC<InputProps> = forwardRef(({ className, defaultValue, name, id, type, checked, placeholder, disabled, ...rest }: IPropsInput, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {

  return (
    <input
      type={type}
      name={name}
      id={id}
      ref={ref}
      {...rest}
      checked={checked}
      defaultValue={defaultValue}
      className={cn(s.input, className)}
      autoComplete={name}
      disabled={!!disabled}
      placeholder={placeholder}
    />
  )
})

export default Input