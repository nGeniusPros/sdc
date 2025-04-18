import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const Section = ({ id, children, className = '', fullWidth = false }: SectionProps) => {
  return (
    <section id={id} className={clsx('py-16 md:py-24', className)}>
      <div className={clsx(fullWidth ? 'w-full' : 'container mx-auto px-4 md:px-6')}>
        {children}
      </div>
    </section>
  );
};

export default Section;
