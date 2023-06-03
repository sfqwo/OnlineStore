import React from 'react';
import clsx from 'clsx';

import LinkSvg from '@assets/icons/link.svg';
import styles from './Button.module.scss';

interface ISubmitButton {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  onClick?: () => void;
  classes?: string;
}

const Button: React.FC<ISubmitButton> = ({
  title,
  type = 'button',
  onClick,
  isDisabled = false,
  classes,
}) => (
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
