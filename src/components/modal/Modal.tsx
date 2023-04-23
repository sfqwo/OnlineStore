import React, { ReactNode, useEffect } from 'react';
import styles from './Modal.module.scss';
import clsx from 'clsx';

interface IModal {
  isVisible: boolean,
  title: string,
  children: ReactNode,
  onClose: () => void,
}

const Modal = ({ isVisible = false, title, children, onClose }: IModal) => {
  const handleKeyDown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={clsx(styles.back, !isVisible && styles.hide)} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.modal_header}>
          {title}
          <button className={styles.modal__close} onClick={onClose} />
        </div>
        <div className={styles.modal_body}>
          <div className={styles.modal_body__content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;