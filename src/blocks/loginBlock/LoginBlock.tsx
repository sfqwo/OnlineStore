import LoginForm from '@src/components/form/loginForm/LoginForm';
import Modal from '@src/components/modal/Modal';
import React from 'react';

interface ILoginBlock {
    isOpenModal: boolean,
    handleCloseModal: () => void,
}

const LoginBlock = ({ isOpenModal, handleCloseModal }: ILoginBlock) => {
    return(
        <Modal isVisible={isOpenModal} title="Вход" onClose={handleCloseModal}>
            <LoginForm />
        </Modal>
    )
}
export default LoginBlock;