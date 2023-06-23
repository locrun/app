import { FC } from 'react';
import { FieldError, UseFormRegister } from "react-hook-form";
import { AdvFormValues } from 'features/AdvfForm.tsx/AdvForm';
import Input from 'components/Input';
import InputLabel from 'components/Input/InputLabel';

import s from "./CheckBoxGroup.module.scss";

interface CheckBox {
  id: string;
  label: string;
}

interface Props {
  checkBoxes: CheckBox[];
  register: UseFormRegister<AdvFormValues>;
  errors: { [x: string]: FieldError }
}
const CheckBoxGroup: FC<Props> = ({ checkBoxes, register, errors }) => {
  return (
    <div className={s.checkboxGroup}>
      <InputLabel label="Checkbox group" className={s.inputLabel} />
      {checkBoxes.map((checkbox) => (
        <div key={checkbox.id} className={s.inputWrapper}>
          <Input
            type="checkbox"
            id={checkbox.id}
            value={checkbox.label}
            className={s.input}
            {...register("selectedCheckboxes", { required: true })}
          />
          <label htmlFor={checkbox.id}>{checkbox.label}</label>
        </div>
      ))}
      {errors.selectedCheckboxes && (
        <span className={s.confirm}>
          {errors.selectedCheckboxes.message}
        </span>
      )}
    </div>
  )
}
export default CheckBoxGroup;