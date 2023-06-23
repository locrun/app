import { FC } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useAppSelector, useAppDispatch } from 'redux/types';
import { setFormData } from 'redux/slices/formSlice';
import InputMask from 'react-input-mask';
import InputLabel from 'components/Input/InputLabel';
import Button from 'components/Button';
import Input from 'components/Input';
import { userProfileSchema } from 'shared/formValidations';
import s from "./UserProfileForm.module.scss"

interface FormValues {
  phone: string
  email: string
}

const UserProfileForm: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { formData } = useAppSelector(state => state.formData)

  const form = useForm<FormValues>({
    defaultValues: {
      phone: formData.phone,
      email: formData.email
    },
    resolver: yupResolver(userProfileSchema),
  })
  const { handleSubmit, control, formState: { errors } } = form

  const submitForm: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault()
    const { phone, email } = data
    dispatch(setFormData({ ...formData, phone, email }))
    //navigate("/step_1")
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={s.form}>
      <div className={s.inputWrapper}>
        <InputLabel label="Номер телефона" />
        <Controller
          name='phone'
          control={control}
          rules={{ required: true }}
          render={(props) => (
            <InputMask
              name="tel"
              className={s.inputMask}
              mask="+7 (999) 999-99-99"
              id="tel"
              placeholder="+7 999 999-99-99"
              value={props.field.value}
              onChange={(value): void => {
                props.field.onChange(value)
              }}
            />
          )}
        />
        {errors.phone && <span className={s.confirm}>{errors.phone?.message}</span>}
      </div>
      <div className={s.inputWrapper}>
        <InputLabel label="Email" />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              className={s.inputEmail}
              type="email"
              value={field.value}
              name='email'
              id="email"
              placeholder='tim.jennings@example.com'
            />
          )}
        />
        {errors.email && <span className={s.confirm}>{errors.email?.message}</span>}
      </div>
      <Button
        title="Начать"
        type="submit"
        id="button-start"
        className={s.button}
        onClick={() => navigate("/step_1")}
      />
    </form >
  )
}
export default UserProfileForm

