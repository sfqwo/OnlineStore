import React, { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, ValidationRule } from 'react-hook-form';
import { TError } from '@components/form/types';
import styles from './Input.module.scss';
import ErrorSvg from '@assets/icons/inputError.svg'
import { validateLimits, validateMaxLength, validateMinLength, validatePatterns } from '@src/utils/validateInputs';

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
  const lim = limit && validateLimits[limit];
  return(
    <div className={styles.container}>
      <div className={styles.container_input}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className={styles.input}
          {...register(name, {
            required: required && validatePatterns.required,
            pattern: pattern && validatePatterns[pattern] as ValidationRule<RegExp>,
            maxLength: validateMaxLength(maxLength || 60),
            minLength: validateMinLength(minLength || 3),
            ...lim
          })}
          defaultValue={defaultValue}
          autoComplete='new-password'
        />
      </div>
      {error && (
        <div className={styles.error}>
          <ErrorSvg />
          {error?.message}
        </div>
      )}
    </div>
  )
}
export default Input;
