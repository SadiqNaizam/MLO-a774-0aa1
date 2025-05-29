import React from 'react';
import { cn } from '@/lib/utils';
import FormInput from './FormInput';
import ActionButton from './ActionButton';
import InlineLinks from './InlineLinks';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Login attempt with:', { email, password });
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Example: alert('Login successful!');
      // setEmail(''); 
      // setPassword('');
    }, 1500);
  }, [email, password]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-md bg-card text-card-foreground p-8 pt-10 rounded-lg shadow-xl space-y-6',
        className
      )}
      noValidate
    >
      <h1 className="text-3xl font-bold text-center text-card-foreground mb-8">
        Welcome
      </h1>

      <FormInput
        id="email"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
        required
      />

      <FormInput
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        autoComplete="current-password"
        required
      />

      <div className="text-right">
        <InlineLinks
          text="Forgot Password"
          onClick={() => console.log('Forgot Password clicked')}
          className="text-xs"
        />
      </div>
      
      <ActionButton type="submit" disabled={isLoading || !email || !password}>
        {isLoading ? 'Logging in...' : 'Login'}
      </ActionButton>

      <p className="text-sm text-center text-muted-foreground">
        Don&apos;t have an account?{' '}
        <InlineLinks
          text="SignUp"
          onClick={() => console.log('SignUp clicked')}
        />
      </p>
    </form>
  );
};

export default LoginForm;
