import { FC } from 'react'
import { useAppDispatch } from 'redux/types'
import { setIsOpen } from 'redux/slices/modalWindowSlice'
import Button from 'components/Button'

import s from "./ErrorAlert.module.scss"
import IconSvg from 'components/IconSvg'

const ErrorAlert: FC = () => {
  const dispatch = useAppDispatch()
  const handleModalClose = () => {
    dispatch(setIsOpen({ isOpen: false }))
  }
  return (
    <div className={s.flexCol}>
      <div className={s.flexRow}>
        <h1 className={s.title}>Ошибка</h1>
        <Button
          className={s.topCloseModalBtn}
          onClick={handleModalClose}
        >
          <IconSvg id="#close" className={s.closeIcon} />
        </Button>
      </div>
      <div className={s.succesWrapper}>
        <IconSvg id="#error" className={s.errorIcon} />
      </div>
      <Button
        title="Закрыть"
        className={s.bottomCloseBtn}
        onClick={handleModalClose}
      />
    </div>
  )
}

export default ErrorAlert


