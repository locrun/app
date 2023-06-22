import { FC } from 'react'
import InputLabel from 'components/InputLabel'
import { AdvFormValues } from 'features/AdvfForm.tsx/AdvForm';
import { FieldError, UseFormRegister } from 'react-hook-form';
import s from "./RadioGroup.module.scss"

interface RadioOptions {
  id: string;
  label: string;
}

interface Props {
  radioOptions: RadioOptions[];
  register: UseFormRegister<AdvFormValues>;
  name: string;
  errors: { [x: string]: FieldError }
}

const RadioGroup: FC<Props> = ({ radioOptions, register, name, errors }) => {

  return (
    <div className={s.radioGroup}>
      <InputLabel label="Radio group" className={s.inputLabel} />
      {radioOptions.map((option) => (
        <div key={option.id} className={s.inputRadioWrapper}>
          <input
            type="radio"
            id={option.id}
            value={option.label}
            className={s.input}
            {...register("selectedRadio")}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
      {errors.selectedRadio && (
        <span className={s.confirm}>
          {errors.selectedRadio.message}
        </span>
      )}
    </div>
  )
}

export default RadioGroup