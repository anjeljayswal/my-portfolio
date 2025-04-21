import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ title, children, className = '' }: SectionProps) => {
  return (
    <section className={`mb-12 sm:mx-40 ${className}`}>
      <h2 className="text-3xl font-bold mb-6 text-primary-light dark:text-primary-dark">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;