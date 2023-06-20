import { FC } from 'react'
import BaseSelect, { ActionMeta, SingleValue, OptionProps, components, GroupBase, MultiValue } from "react-select"

import { SelectOption } from 'shared/options'
import s from "./Autocomplete.module.scss"

interface SelectProps {
  options: SelectOption[]
  value: SelectOption
  id: string
  onChange?: (newValue: SingleValue<SelectOption> | MultiValue<SelectOption>, actionMeta: ActionMeta<SelectOption>) => void | undefined
  placeholder?: string
}

const Autocomplete: FC<SelectProps> = ({ options, value, id, onChange }) => {

  const Option: FC<OptionProps<SelectOption, boolean, GroupBase<SelectOption>>> = props => {
    return (
      <components.Option {...props}>
        <div className={s.flex}>
          <span
            id={props.data.value === "man" ?
              "field-sex-option-man" : "field-sex-option-woman"}>
            {props.data.value}</span>
        </div>
      </components.Option>
    )
  }

  return (
    <BaseSelect
      options={options}
      value={value}
      id={id}
      className={s.select}
      components={{
        Option
      }}
      onChange={onChange}
      placeholder="Не выбрано"
      classNamePrefix='my-className-prefix'
    />
  )
}

export default Autocomplete