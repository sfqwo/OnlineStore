import React, { useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input/Input';
import Link from 'next/link';
import SubmitButton from '@src/components/buttons/submitButton/SubmitButton';
import FormFooter from '@components/form/formFooter/FormFooter';
import { useModalContext } from '@src/utils/modalContext/ModalContext';

type TInputs = {
  email: string,
  password: string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
    mode: 'onBlur', reValidateMode: 'onChange'
  });
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);
  const { handleOpen } = useModalContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name="email"
        error={errors.email}
        required
        pattern="email"
        label="Почта"
      />
      <Input
        register={register}
        error={errors.password}
        name="password"
        type="password"
        required
        label='Пароль'
      />
      <SubmitButton isDisabled={!!Object.values(errors).length} />
      <FormFooter isReg={false} changeForm={() => handleOpen('reg')} />
    </form>
  );
}
export default LoginForm;