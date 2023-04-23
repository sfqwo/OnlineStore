import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input/Input';
import Link from 'next/link';

type TInputs = {
  firstname: string,
  lastname: string,
  age: number,
  email: string,
  password: string,
}

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<TInputs>();
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input register={register} name="firstname" required label="Имя" error={errors.firstname} />
      <Input register={register} name="lastname" label="Фамилия" error={errors.lastname} />
      <Input register={register} name="age" type="number" limit="age" label="Возраст" error={errors.age} />
      <Input register={register} name="email" required pattern="email" label="Почта" error={errors.email} />
      <Input register={register} name="password" type="password" required label="Пароль" error={errors.password} />
      <input type="submit" />
      <div>
        Есть аккаунт?
        <Link href='/'>Войдите</Link>
      </div>
    </form>
  );
}
export default RegisterForm;