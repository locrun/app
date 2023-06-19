import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'redux/types'
import { setIsOpen } from 'redux/slices/modalWindowSlice'
import Button from 'components/Button'

import s from "./SuccessAlert.module.scss"
import IconSvg from 'components/IconSvg'

const SuccessAlert = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const closeAndNavigate = () => {
    dispatch(setIsOpen({ isOpen: false }))
    navigate("/")
  }
  return (
    <div className={s.flex}>
      <h1 className={s.title}>Форма успешно отправлена</h1>
      <div className={s.succesWrapper}>
        <IconSvg id="#success" className={s.success} />
      </div>

      <Button title="На главную" id="button-to-main" onClick={closeAndNavigate} />
    </div>
  )
}

export default SuccessAlert