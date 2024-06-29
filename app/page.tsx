import React from 'react';
import LoginForm from './LoginForm'
import { redirect } from 'next/navigation';

const LoginPage = () => {
  //redirect('/home/')
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;



