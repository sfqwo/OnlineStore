import RegistrationForm from '@src/components/form/registrationForm/RegistrationForm';
import { MetaHead } from '@src/components/metaHead/MetaHead';
import type { NextPage } from 'next';
import { useState } from 'react';

const dataObj = {
  meta: {
    title: 'Online Store',
    description: 'Регистрация',
  }
};

const Registration: NextPage = () => {
  const [data] = useState(dataObj);

  return (
    <>
      <MetaHead title={data.meta.title} description={data.meta.description} />

      <RegistrationForm />
    </>

  );
};

export default Registration;