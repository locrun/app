import { FC, ReactNode } from "react";
import s from "./ModalWindow.module.scss";

interface ModalProps {
  onClose?: () => void;
  children: ReactNode
}

const ModalWindow: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={s.modalOpen}>
      <div className={s.flex}>
        <div className={s.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
};
export default ModalWindow;
