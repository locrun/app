import { FC } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useAppDispatch, useAppSelector } from 'redux/types';
import { setPercent } from 'redux/slices/progressBarSlice';
import { setFormData } from 'redux/slices/formSlice';
import Autocomplete from 'components/Autocomplete';
import InputLabel from 'components/InputLabel';
import Button from 'components/Button';
import Input from 'components/Input';

import { createFormSchema } from 'shared/formValidations';
import { options, SelectOption } from "../../shared/options"

import s from "./CreateForm.module.scss"

export interface FormValues {
  nickname: string
  name: string
  surname: string
  sex: SelectOption | {},
}

const CreateForm: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { formData } = useAppSelector(state => state.formData)

  const form = useForm({
    defaultValues: {
      nickname: formData.nickname,
      name: formData.name,
      surname: formData.surname,
      sex: formData.sex
    },
    resolver: yupResolver(createFormSchema),
  })
  const { handleSubmit, control, formState } = form
  const { errors } = formState;

  const submitForm: SubmitHandler<FormValues> = (data: FormValues, event) => {
    event?.preventDefault()
    const { nickname, name, surname, sex } = data
    dispatch(
      setFormData({ ...formData, nickname, name, surname, sex })
    )
    dispatch(setPercent({ percent: 50 }))
    navigate("/step_2")
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={s.form}>
      <div className={s.inputWrapper}>
        <InputLabel label="Nickname" />
        <Controller
          name='nickname'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              name='name'
              id="field-nickname"
              placeholder="Placeholder"
            />
          )}
        />
        {errors.nickname &&
          <span className={s.confirm}>{errors.nickname?.message}</span>
        }
      </div>
      <div className={s.inputWrapper}>
        <InputLabel label="Name" />
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              name='name'
              id="name"
              placeholder="Placeholder"
            />
          )}
        />
        {errors.name &&
          <span className={s.confirm}>{errors.name?.message}</span>
        }

      </div>
      <div className={s.inputWrapper}>
        <InputLabel label="Surname" />
        <Controller
          name='surname'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              name='name'
              id="field-surname"
              placeholder="Placeholder"
            />
          )}
        />
        {errors.surname &&
          <span className={s.confirm}>{errors.surname?.message}</span>
        }
      </div>
      <div className={s.inputWrapper}>
        <InputLabel label="sex" />
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Autocomplete
              value={value}
              options={options}
              id="field-sex"
              onChange={onChange}
            />
          )}
          rules={{ required: true }}
        />
        {errors.sex &&
          <span className={s.confirm}>{errors.sex?.message}</span>
        }
      </div>
      <div className={s.buttons}>
        <Button
          title="Назад"
          id="button-back"
          className={s.comebackBtn}
          onClick={() => navigate("/")}
        />
        <Button
          title="Далее"
          id="button-next"
          type="submit"
          className={s.next}
        />
      </div>
    </form >
  )

}

export default CreateForm