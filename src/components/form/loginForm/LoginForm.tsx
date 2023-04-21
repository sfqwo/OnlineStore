import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input/Input';
import Link from 'next/link';

type TInputs = {
  email: string,
  password: string,
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name="email" required pattern="email" label="Почта" error={errors.email} />
      <Input register={register} name="password" type="password" required label="Пароль" error={errors.password} />
      <input type="submit" />
      <div>
        Нет аккаунта?
        <Link href='/registration'>Зарегистрируйтесь</Link>
      </div>
    </form>
  );
}
export default LoginForm;