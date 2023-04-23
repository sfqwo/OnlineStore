import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input/Input';
import Link from 'next/link';
import SubmitButton from '@components/form/submitButton/SubmitButton';
import FormFooter from '@components/form/formFooter/FormFooter';

type TInputs = {
  email: string,
  testPassword: string,
  password: string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }, getValues, watch, } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);
  const [isReg, setIsReg] = useState(false);
  // const [passwordIsConfirm, setPasswordIsConfirm] = useState(getValues()?.password == getValues()?.testPassword);

  // useEffect(() => {
  //   const subscription = watch(() => setPasswordIsConfirm(getValues()?.password === getValues()?.testPassword));
  //   return () => subscription.unsubscribe();
  // }, [watch]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name="email" required pattern="email" label="Почта" error={errors.email} />
      <Input register={register} name="password" type="password" required label={isReg ? 'Придумайте пароль' : 'Пароль' } error={errors.password} />
      {/* {isReg && passwordIsConfirm && <Input register={register} name="password" type="password" required label='Подтвердите пароль' error={errors.password} />} */}
      <SubmitButton />
      <FormFooter isReg={isReg} changeForm={() => setIsReg(!isReg)} />
    </form>
  );
}
export default LoginForm;