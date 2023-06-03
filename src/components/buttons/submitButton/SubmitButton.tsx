import React from 'react';
import { useModalContext } from '@src/utils/modalContext/ModalContext';
import Button from '../button/Button';

interface ISubmitButton {
	isReg?: boolean,
	isDisabled?: boolean,
}

const SubmitButton: React.FC<ISubmitButton> = ({ isReg = false, isDisabled = false }) => {
	const { handleOpen } = useModalContext();
	const handleClick = () => isReg && !isDisabled && handleOpen('confirm');
	return <Button title="Продолжить" type={!isReg ? 'submit' : 'button'} onClick={handleClick} isDisabled={isDisabled} classes='form' />
}
export default SubmitButton;