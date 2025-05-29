import React from 'react';
import { cn } from '@/lib/utils';

interface InlineLinksProps {
  text: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
  asButton?: boolean; // To explicitly render as a button if href is also provided but behavior is button-like
}

const InlineLinks: React.FC<InlineLinksProps> = ({ text, href, onClick, className, asButton }) => {
  const commonClasses = cn(
    'text-sm text-accent hover:text-accent/80 underline font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-sm',
    className
  );

  if (href && !asButton) {
    return (
      <a 
        href={href} 
        onClick={onClick} 
        className={commonClasses}
        // For external links, good to add these for security if applicable
        // target="_blank" rel="noopener noreferrer" 
      >
        {text}
      </a>
    );
  }

  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={commonClasses}
    >
      {text}
    </button>
  );
};

export default InlineLinks;
