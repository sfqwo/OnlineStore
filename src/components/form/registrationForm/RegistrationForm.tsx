import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../inputs/input/Input';
import FormFooter from '@components/form/formFooter/FormFooter';
import { useModalContext } from '@src/utils/modalContext/ModalContext';
import SubmitButton from '@src/components/buttons/submitButton/SubmitButton';

type TInputs = {
  email: string,
  testPassword: string,
  password: string,
}

const RegistrationForm = ({ isReg }: { isReg?: boolean }) => {
  const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<TInputs>({
    mode: 'onBlur', reValidateMode: 'onChange',
  });
  const onSubmit: SubmitHandler<TInputs> = (data) => console.log(data);
  const { handleOpen } = useModalContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        register={register}
        name="email"
        required
        pattern="email"
        label="Почта"
        error={errors.email}
        hidden={!isReg}
      />
      <Input
        register={register}
        name="testPassword"
        type="password"
        required
        label='Придумайте пароль'
        error={errors.testPassword}
        hidden={!isReg} 
      />
      <Input
        register={register}
        name="password"
        type="password"
        label='Повторите пароль'
        beEqual={getValues('testPassword')}
        error={errors.password}
        hidden={isReg}
      />
      <SubmitButton isReg={isReg} isDisabled={!isValid} />
      <FormFooter isReg changeForm={() => handleOpen('login')} />
    </form>
  );
}
export default RegistrationForm;