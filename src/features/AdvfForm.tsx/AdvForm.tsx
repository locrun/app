import { FC } from 'react'
import { SubmitHandler, useFieldArray, useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { advFormSchema } from 'shared/formValidations';
import { useNavigate } from 'react-router-dom'
import { setPercent } from 'redux/slices/progressBarSlice'
import { useAppDispatch, useAppSelector } from 'redux/types'
import { setFormData } from 'redux/slices/formSlice';
import InputLabel from 'components/InputLabel';
import Input from 'components/Input';
import Button from 'components/Button'

import s from "./AdvForm.module.scss";
import IconSvg from 'components/IconSvg';


export interface Inputs {
  advantages: { name: string; }[] | undefined
  checkboxGroup: (string | undefined)[] | undefined
  radioGroup: (string | undefined)[] | string | undefined
}

const AdvForm: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { formData } = useAppSelector(state => state.formData)

  const defaultAdvantages = formData.selectedAdvantages.map(name => (name));

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      advantages: defaultAdvantages.length > 0 ? defaultAdvantages :
        [{ name: "" }, { name: "" }, { name: "" }],
      checkboxGroup: formData.checkedCheckboxes.toString().split(","),
      radioGroup: formData.selectedRadios[0].toString()
    },
    resolver: yupResolver(advFormSchema),
  })

  const { fields: advantagesFields, append, remove } =
    useFieldArray({ control, name: "advantages" })

  const submitForm: SubmitHandler<Inputs> = (data) => {
    const { advantages, checkboxGroup, radioGroup }: any = data;
    dispatch(setFormData({
      ...formData,
      selectedAdvantages: [...advantages],
      checkedCheckboxes: [...checkboxGroup.map((str: string) => parseInt(str))],
      selectedRadios: [Number(radioGroup)]
    }))
    dispatch(setPercent({ percent: 100 }))
    navigate("/step_3")
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={s.form}>
      <>
        <InputLabel label="Advantages" className={s.label} />
        <div className={s.inputs}>
          {advantagesFields.map((item, index) => (
            <div key={item.id}>
              <Controller
                control={control}
                name={`advantages.${index}.name`}
                render={({ field }) => (
                  <Input
                    {...field}
                    className={s.input}
                    id="advantages"
                    placeholder="Placeholder"
                  />
                )}
              />
              <button type="button" onClick={() => remove(index)}>
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
          className={s.append}
          onClick={() => append({ name: "" })}
        />
      </>
      <div className={s.checkboxGroup}>
        <InputLabel label="Checkbox group" className={s.label} />
        <div className={s.inputCheckBoxWrapper}>
          <input
            type="checkbox" value="1"{...register("checkboxGroup")}
            className={s.inputCheckbox}
            id="field-checkbox-group-option-1"
          />
          <label htmlFor="field-checkbox-group-option-1">
            1
          </label>
        </div>
        <div className={s.inputCheckBoxWrapper}>
          <input
            type="checkbox" value="2" {...register("checkboxGroup")}
            className={s.inputCheckbox}
            id="field-checkbox-group-option-2"
          />
          <label htmlFor="field-checkbox-group-option-2">2</label>
        </div>
        <div className={s.inputCheckBoxWrapper}>
          <input
            type="checkbox"
            value="3"
            {...register("checkboxGroup")}
            className={s.inputCheckbox}
            id="field-checkbox-group-option-3"
          />
          <label htmlFor="field-checkbox-group-option-3">3</label>
        </div>
        {errors.checkboxGroup && (
          <span className={s.confirm}>
            {errors.checkboxGroup.message}
          </span>
        )}
      </div>

      <div className={s.radioGroup}>
        <InputLabel label="Radio group" className={s.label} />
        <div className={s.inputRadioWrapper}>
          <input
            type="radio" value="1" {...register("radioGroup")}
            className={s.inputRadio}
            id="field-radio-group-option-1"
          />
          <label htmlFor="field-radio-group-option-1">1</label>
        </div>
        <div className={s.inputRadioWrapper}>
          <input
            type="radio" value="2" {...register("radioGroup")}
            className={s.inputRadio}
            id="field-radio-group-option-2"
          />
          <label htmlFor="field-radio-group-option-2">2</label>
        </div>
        <div className={s.inputRadioWrapper}>
          <input
            type="radio" value="3" {...register("radioGroup")}
            className={s.inputRadio}
            id="field-radio-group-option-3"
          />
          <label htmlFor="field-radio-group-option-3">3</label>
        </div>
        {errors.radioGroup && (
          <span className={s.confirm}>
            {errors.radioGroup.message}
          </span>
        )}
      </div>
      <div className={s.buttons}>
        <Button
          title="Назад"
          className={s.comebackBtn}
          onClick={() => {
            navigate("/step_1"); dispatch(setPercent({ percent: 0 }))
          }}
        />
        <Button type="submit" className={s.next} title="Далее" />
      </div>
    </form >
  )
}

export default AdvForm

