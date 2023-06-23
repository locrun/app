//@ts-nocheck
import { FC } from 'react';
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { advFormSchema } from 'shared/formValidations';
import { useNavigate } from 'react-router-dom';
import { setPercent } from 'redux/slices/progressBarSlice'
import { useAppDispatch, useAppSelector } from 'redux/types'
import { setFormData } from 'redux/slices/formSlice';
import AdditionalField from 'components/UI/AdditionalField';
import CheckBoxGroup from 'components/UI/CheckBoxGroup';
import RadioGroup from 'components/UI/RadioGroup';
import Button from 'components/Button';
import { checkBoxes, radioOptions } from 'shared/options';
import s from "./AdvForm.module.scss";


export interface AdvFormValues {
  [x: string]: any;
  advantages: { name: string; }[] | undefined;
  selectedCheckboxes: number[] | undefined;
  selectedRadio: number | undefined;
}

const AdvForm: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { formData } = useAppSelector(state => state.formData)

  const arrayOfObjects = formData?.advantages.map(name => ({ name }));
  console.log(arrayOfObjects)
  const { register, handleSubmit, control, formState: { errors } } =
    useForm({
      defaultValues: {
        advantages: arrayOfObjects.length > 0 ? arrayOfObjects :
          [{ name: "" }, { name: "" }, { name: "" }],
        selectedCheckboxes: formData.selectedCheckboxes.length > 0 ?
          formData.selectedCheckboxes?.toString().split(",") :
          [],
        selectedRadio: formData.selectedRadio[0]?.toString()
      },
      resolver: yupResolver(advFormSchema),
    })

  const { fields: advantagesFields, append, remove } =
    useFieldArray({ control, name: "advantages" })

  const submitForm: SubmitHandler<AdvFormValues | any> = (data, e) => {
    e.preventDefault()
    const { advantages, selectedCheckboxes, selectedRadio } = data;
    dispatch(setFormData({
      ...formData,
      advantages: [...advantages.map(object => (object.name))],
      selectedCheckboxes: [...selectedCheckboxes.map((str: string) => parseInt(str))],
      selectedRadio: [Number(selectedRadio)]
    }))
    dispatch(setPercent({ percent: 100 }))
    navigate("/step_3")
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={s.form}>
      <AdditionalField
        control={control}
        errors={errors}
        remove={remove}
        append={append}
        advantagesFields={advantagesFields}
      />
      <CheckBoxGroup
        checkBoxes={checkBoxes}
        name="selectedCheckboxes"
        register={register}
        errors={errors}
      />
      <RadioGroup
        radioOptions={radioOptions}
        name="selectedRadio"
        register={register}
        errors={errors}
      />
      <div className={s.buttons}>
        <Button
          title="Назад"
          id="button-back"
          className={s.comebackBtn}
          onClick={() => {
            navigate("/step_1"); dispatch(setPercent({ percent: 0 }))
          }}
        />
        <Button
          title="Далее"
          type="submit"
          id="button-next"
          className={s.next} />
      </div>
    </form >
  )
}

export default AdvForm

