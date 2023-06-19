import { FC } from "react";
import sprite from "../../assets/sprite/sprite.svg"

interface IPropsSvg {
  id: string;
  className?: string
}
const IconSvg: FC<IPropsSvg> = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={sprite + id} />
    </svg>
  )
}

export default IconSvg