import React from 'react';
import styles from './SubmitButton.module.scss';
import LinkSvg from '@assets/icons/link.svg';
import { useModalContext } from '@src/utils/modalContext/ModalContext';
import clsx from 'clsx';

interface ISubmitButton{
	isReg?: boolean,
	isDisabled?: boolean,
}

const SubmitButton: React.FC<ISubmitButton> = ({ isReg = false, isDisabled = false }) => {
	const { handleOpen } = useModalContext();
	const handleClick = () => isReg && !isDisabled && handleOpen('confirm');
	return(
		<button
			type={!isReg ? 'submit' : 'button'}
			onClick={handleClick}
			className={styles.button}
			disabled={isDisabled}
		>
			Продолжить
			<LinkSvg />
		</button>
	)
}
export default SubmitButton;