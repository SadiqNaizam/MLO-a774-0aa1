import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <Button
      type={type}
      className={cn(
        'w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 text-base font-semibold shadow-sm hover:shadow-md transition-shadow',
        props.disabled && 'opacity-75 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
