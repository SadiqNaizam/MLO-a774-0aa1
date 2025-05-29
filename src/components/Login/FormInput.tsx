import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  className,
  error,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5">
      <Label 
        htmlFor={id} 
        className={cn(
          "text-sm font-medium text-muted-foreground",
          error ? "text-destructive" : ""
        )}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        className={cn(
          'w-full bg-transparent border-0 border-b text-card-foreground placeholder:text-muted-foreground',
          'focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none px-0 py-1.5 h-auto text-base',
          error ? 'border-destructive focus:border-destructive' : 'border-input focus:border-primary',
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-destructive pt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
