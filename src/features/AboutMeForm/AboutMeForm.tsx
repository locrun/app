import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm, Controller, FormState } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'redux/types';
import { setFormData } from 'redux/slices/formSlice';
import { setIsOpen } from 'redux/slices/modalWindowSlice';
import { yupResolver } from "@hookform/resolvers/yup";
import { setPercent } from 'redux/slices/progressBarSlice';
import Button from 'components/Button';
import InputLabel from 'components/InputLabel';
import ModalWindow from 'components/ModalWindow';
import SuccessAlert from 'components/ModalWindow/SuccessAlert';
import ErrorAlert from 'components/ModalWindow/ErrorAlert';
import { aboutSchema } from 'shared/formValidations';
import { useSendUserFormMutation } from 'shared/api/formSend';

import s from "./AboutMeForm.module.scss";

interface About {
  about: string
};

type AboutFormState = FormState<About> & About;

const AboutMeForm: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { formData } = useAppSelector(state => state.formData)
  const { isOpen } = useAppSelector(state => state.modalWindow)

  const [updated, setUpdated] = useState(false);

  const [fetchUserForm, { isSuccess, isError, isLoading }
  ] = useSendUserFormMutation();

  const countSymbols = (text: string) => {
    return text.length;
  }
  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: { about: formData.about },
    resolver: yupResolver(aboutSchema),
  });

  useEffect(() => {
    if (updated) {
      fetchUserForm(formData);
    }
  }, [fetchUserForm, formData, updated]);

  const submitForm: SubmitHandler<AboutFormState | About> = (data, event) => {

    event?.preventDefault()
    const { about } = data
    dispatch(
      setFormData({ ...formData, about })
    )
    setUpdated(true);
    dispatch(setIsOpen({ isOpen: true }))
  };


  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {
        isOpen &&
        <ModalWindow>
          {isError && <ErrorAlert />}
          {isSuccess && < SuccessAlert />}
        </ModalWindow>
      }

      <form onSubmit={handleSubmit(submitForm)} >
        <InputLabel label={"About"} />
        <div className={s.textAreaWrapper}>
          <Controller
            name="about"
            control={control}
            render={({ field: { value, onChange } }) => (
              <>
                <textarea
                  id="field-adout"
                  maxLength={200}
                  className={s.textarea}
                  value={value}
                  onChange={(event) => {
                    const text = event.target.value;
                    const textWithoutSpaces = text.replace(/\s/g, '');
                    if (textWithoutSpaces.length <= 200) {
                      onChange(text);
                    }
                  }}
                  placeholder="Placeholder"
                />
                <span className={s.counter}>{countSymbols(value)}</span>
              </>
            )}
          />
          {errors.about && (
            <span className={s.confirm}>
              {errors.about.message}
            </span>
          )}
        </div>

        <div className={s.buttons}>
          <Button
            title="Назад"
            id="button-back"
            className={s.comebackBtn}
            onClick={() => {
              navigate("/step_2"); dispatch(setPercent({ percent: 50 }))
            }} />
          <Button
            title="Отправить"
            type="submit"
            id="button-send"
          />
        </div>
      </form>
    </>


  )
}
export default AboutMeForm

