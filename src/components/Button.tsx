import { ButtonProps } from '../types';
import clsx from 'clsx';
import Link from 'next/link';

export const Button = ({
  text,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) => {
  const buttonClasses = clsx(
    'inline-block font-semibold rounded-lg transition-all duration-200 text-center',
    {
      // Variants
      'bg-secondary hover:bg-secondary/90 text-primary': variant === 'primary',
      'bg-primary hover:bg-primary/90 text-white': variant === 'secondary',
      'bg-transparent border-2 border-secondary text-secondary hover:bg-secondary/10': variant === 'outline',

      // Sizes
      'px-4 py-2 text-sm': size === 'sm',
      'px-6 py-3 text-base': size === 'md',
      'px-8 py-4 text-lg': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
