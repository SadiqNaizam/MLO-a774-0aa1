import React from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import LoginForm from '@/components/Login/LoginForm';

/**
 * LoginPage serves as the entry point for user authentication.
 * It utilizes AuthLayout to provide a centered layout for the LoginForm component.
 */
const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
