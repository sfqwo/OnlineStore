import Link from 'next/link';
import React from 'react';
import styles from './FormFooter.module.scss';

interface IFormFooter {
  isReg?: boolean;
  changeForm?: () => void;
}

const FormFooter = ({ isReg = false, changeForm }: IFormFooter) => {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {isReg ? (
          <>
            У вас уже есть аккаунт?
            <button onClick={changeForm}>Вход</button>
          </>
        ) : (
          <>
            У вас еще нет аккаунта?
            <button onClick={changeForm}>Регистрация</button>
          </>
        )}
      </div>
      <span className={styles.politic}>
        Продолжая, я соглашаюсь c &nbsp;
        <Link href="/">Пользовательским соглашением</Link>
        &nbsp; и &nbsp;
        <Link href="/">Политикой конфиденциальности</Link>
      </span>
    </div>
  );
};
export default FormFooter;
