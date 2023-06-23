import { FC, Key } from 'react'
import { Control, Controller, FieldError, FieldValues, UseFieldArrayAppend, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form';
import Button from 'components/Button'
import Input from 'components/Input'
import InputLabel from 'components/Input/InputLabel'
import IconSvg from 'components/IconSvg'
import s from "./AdditionalField.module.scss"
import { AdvFormValues } from 'features/AdvfForm.tsx/AdvForm';

interface Props {
  control: Control<FieldValues>
  errors: { [x: string]: any;[key: number]: FieldError };
  register: UseFormRegister<AdvFormValues>;
  advantagesFields: AdvFormValues
  remove: UseFieldArrayRemove
  append: UseFieldArrayAppend<AdvFormValues, "advantages">
}

const AdditionalField: FC<Props> = ({ control, errors, advantagesFields, remove, append }) => {

  return (
    <>
      <InputLabel label="Advantages" className={s.inputLabel} />
      <div className={s.inputs}>
        {advantagesFields.map((item: { id: Key | null | undefined; }, index: number) => (
          <div key={item.id}>
            <Controller
              control={control}
              name={`advantages.${index}.name`}
              render={({ field }) => (
                <Input
                  {...field}
                  value={field.value}
                  className={s.input}
                  id={`field-advatages-${index + 1}`}
                  placeholder="Placeholder"
                />
              )}
            />
            <button
              type="button"
              id="button-remove"
              onClick={() => remove(index)}>
              <IconSvg id="#delete" className={s.removeBtn} />
            </button>
            {errors.advantages &&
              <span className={s.confirm}>
                {errors.advantages[index]?.name?.message}
              </span>
            }
          </div>
        ))}
      </div>
      <Button
        type="button"
        id="button-add"
        className={s.append}
        onClick={() => append({ name: "" })}
      />
    </>
  )
}

export default AdditionalField

