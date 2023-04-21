import LoginForm from '@src/components/form/loginForm/LoginForm';
import { MetaHead } from '@src/components/metaHead/MetaHead';
import type { NextPage } from 'next';
import { useState } from 'react';

const dataObj = {
  meta: {
    title: 'Online Store',
    description: 'Вход',
  }
};

const Login: NextPage = () => {
  const [data] = useState(dataObj);

  return (
    <>
      <MetaHead title={data.meta.title} description={data.meta.description} />

      <LoginForm />
    </>

  );
};

export default Login;