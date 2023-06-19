import { FC } from 'react'
import BaseSelect, { ActionMeta, SingleValue } from "react-select"

import { SelectOption } from 'shared/options'
import s from "./Autocomplete.module.scss"

interface SelectProps {
  options: SelectOption[]
  value: SelectOption | {}
  onChange?: (newValue: SingleValue<SelectOption | {}>, actionMeta: ActionMeta<SelectOption | {}>) => void
  placeholder?: string
}

const Autocomplete: FC<SelectProps> = ({ options, value, onChange }) => {

  return (
    <BaseSelect
      options={options}
      value={value}
      onChange={onChange}
      className={s.select}
      placeholder="Не выбрано"
      classNamePrefix='my-className-prefix'
    />
  )
}

export default Autocomplete