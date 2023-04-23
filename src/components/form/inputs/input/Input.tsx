import React, { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegister, ValidationRule } from 'react-hook-form';
import { TError } from '@components/form/types';
import styles from './Input.module.scss';
import ErrorSvg from '@assets/icons/inputError.svg'
import HideSvg from '@assets/icons/Eye-closed.svg'
import { validateLimits, validateMaxLength, validateMinLength, validatePatterns } from '@src/utils/validateInputs';
import clsx from 'clsx';

interface ITextInput {
  name: string,
  label: string,
  register: UseFormRegister<any>,
  type?: HTMLInputTypeAttribute,
  required?: boolean,
  error?: TError,
  defaultValue?: string,
  limit?: keyof(typeof validateLimits),
  pattern?: keyof (typeof validatePatterns),
  maxLength?: number,
  minLength?: number,
}

const inputType = (type: HTMLInputTypeAttribute, hidePassword: boolean) => {
  if (type === 'password') return hidePassword ? type : 'text';
  return type;
}

const Input: React.FC<ITextInput> = ({
  name,
  register,
  required = false,
  error,
  defaultValue,
  type="text",
  label,
  pattern,
  limit,
  maxLength,
  minLength,
}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const lim = limit && validateLimits[limit];
  return(
    <div className={styles.container}>
      <div className={styles.container_input}>
        <input
          type={inputType(type, hidePassword)}
          className={styles.input}
          {...register(name, {
            required: required && validatePatterns.required,
            pattern: pattern && validatePatterns[pattern] as ValidationRule<RegExp>,
            maxLength: validateMaxLength(maxLength || 60),
            minLength: validateMinLength(minLength || 3),
            ...lim
          })}
          defaultValue={defaultValue || ''}
          readOnly
          onFocus={(e) =>e.target.removeAttribute('readonly')}
        />
        <label className={styles.label} htmlFor={name}>{label}</label>
        {type === 'password' && (
          <button onClick={() => setHidePassword(!hidePassword)} className={clsx(styles.hide_button, hidePassword || styles.hide_button_active)}>
            <HideSvg />
          </button>
        )}
      </div>
    </div>
  )
}
export default Input;
