import { TFC } from '@src/types';
import React, { ReactNode, useContext, useState } from 'react';
import Modal from '../../components/modal/Modal';
import LoginForm from '@src/components/form/loginForm/LoginForm';
import RegistrationForm from '@src/components/form/registrationForm/RegistrationForm';

export type TModalType = keyof typeof EModalTitle;
const defaultType = 'login' as TModalType;

enum EModalTitle {
  reg = 'Регистрация',
  login = 'Вход',
  confirm = 'Подтверждение пароля',
}

export type TModalData = {
  type: TModalType;
  isOpen?: boolean;
};

export interface IModalDataContext {
  type: TModalType;
  handleOpen: (type: TModalType) => void;
  handleClose: () => void;
}

export const initialModalData = {
  type: defaultType,
  isOpen: false,
} as TModalData;

const ModalContext = React.createContext({
  type: defaultType,
  handleOpen: (type: TModalType) => {},
  handleClose: () => {},
});

export const ModalProvider = ({ children }: TFC) => {
  const [modalData, setModalData] = useState(initialModalData);

  const handleClose = React.useCallback(() => {
    setModalData((ps) => ({ ...ps, isOpen: false }));
  }, [setModalData]);

  const handleOpen = React.useCallback(
    (type: TModalType) => {
      setModalData((ps) => ({
        ...ps,
        type: type || defaultType,
        isOpen: true,
      }));
    },
    [setModalData],
  );

  const valueMem = React.useMemo(
    () => ({ handleClose, handleOpen, type: modalData.type }),
    [handleClose, handleOpen, modalData.type],
  );

  return (
    <ModalContext.Provider value={valueMem}>
      <>{children}</>
      <Modal
        isVisible={modalData.isOpen || false}
        title={EModalTitle[modalData.type]}
        onClose={handleClose}
      >
        {modalData.type === 'login' ? (
          <LoginForm />
        ) : (
          <RegistrationForm isReg={modalData.type === 'reg'} />
        )}
      </Modal>
    </ModalContext.Provider>
  );
};

export const useModalContext = (): IModalDataContext => useContext(ModalContext);
