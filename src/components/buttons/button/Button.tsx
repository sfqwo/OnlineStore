import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import LinkSvg from '@assets/icons/link.svg';
import clsx from 'clsx';

interface ISubmitButton {
	title: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
	onClick?: () => void;
  classes?: string;
}

const Button: React.FC<ISubmitButton> = ({ title, type = 'button', onClick, isDisabled = false, classes }) => (
  <button
    type={type}
    onClick={onClick}
    className={clsx(styles.button, classes && (styles[classes] || classes))}
    disabled={isDisabled}
  >
    {title}
    <LinkSvg />
  </button>
);

export default Button;