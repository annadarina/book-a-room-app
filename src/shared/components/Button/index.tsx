import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

const variantStylesMap = {
  base: 'inline-flex items-center justify-center min-h-[2rem] min-w-[5.5rem] w-full sm:w-auto px-[0.5rem] py-3 sm:py-[0.2rem] rounded-md text-[0.8rem] font-bold focus:outline-none transition-opacity duration-300 hover:opacity-70 focus:opacity-70 disabled:opacity-50 disabled:pointer-events-none',
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-gray-800',
};

const Button = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const classNames = `${variantStylesMap.base} ${variantStylesMap[variant]} ${className}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
