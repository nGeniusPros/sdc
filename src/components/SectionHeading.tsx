import clsx from 'clsx';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeadingProps) => {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
