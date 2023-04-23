import React from 'react';
import styles from './SubmitButton.module.scss';
import LinkSvg from '@assets/icons/link.svg';

const SubmitButton = () => {
	return(
		<button type="submit" className={styles.button}>
			Продолжить
			<LinkSvg />
		</button>
	)
}
export default SubmitButton;