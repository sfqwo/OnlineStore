import React, { HTMLInputTypeAttribute, useState } from 'react';
import { FieldError, UseFormRegister, ValidationRule } from 'react-hook-form';
import styles from './Input.module.scss';
import ErrorSvg from '@assets/icons/inputError.svg';
import HideSvg from '@assets/icons/Eye-closed.svg';
import {
  validateLimits,
  validateMaxLength,
  validateMinLength,
  validatePatterns,
} from '@src/utils/validateInputs';
import clsx from 'clsx';

interface ITextInput {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  error?: FieldError;
  defaultValue?: string;
  limit?: keyof typeof validateLimits;
  pattern?: keyof typeof validatePatterns;
  beEqual?: string;
  maxLength?: number;
  minLength?: number;
  hidden?: boolean;
}

const inputType = (type: HTMLInputTypeAttribute, hidePassword: boolean) => {
  if (type === 'password') return hidePassword ? type : 'text';
  return type;
};

const Input: React.FC<ITextInput> = ({
  name,
  register,
  required = false,
  defaultValue,
  type = 'text',
  label,
  pattern,
  limit,
  maxLength,
  minLength,
  beEqual,
  hidden = false,
  error,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [showError, setShowError] = useState(!!error);
  const lim = limit && validateLimits[limit];
  const inputRegister = register(name, {
    required: required && validatePatterns.required,
    pattern: (beEqual
      ? validatePatterns.beEqual(beEqual)
      : pattern && validatePatterns[pattern]) as ValidationRule<RegExp>,
    maxLength: validateMaxLength(maxLength || 60),
    minLength: validateMinLength(minLength || 3),
    ...lim,
  });

  return (
    <div className={clsx(styles.container, hidden && styles.container_hidden)}>
      <div className={styles.container_input}>
        <input
          type={inputType(type, hidePassword)}
          className={styles.input}
          {...inputRegister}
          defaultValue={defaultValue || ''}
          readOnly
          onFocus={(e) => {
            e.target.removeAttribute('readonly');
            setShowError(false);
          }}
          onBlur={(e) => {
            setShowError(true);
            inputRegister?.onBlur(e);
          }}
          hidden={hidden}
        />
        <label
          className={clsx(styles.label, showError && !!error && styles.label_error)}
          htmlFor={name}
        >
          {showError && !!error ? (
            <>
              <ErrorSvg />
              {error.message}
            </>
          ) : (
            label
          )}
        </label>
        {type === 'password' && (
          <button
            onClick={() => setHidePassword(!hidePassword)}
            className={clsx(styles.hide_button, hidePassword || styles.hide_button_active)}
          >
            <HideSvg />
          </button>
        )}
      </div>
    </div>
  );
};
export default Input;
