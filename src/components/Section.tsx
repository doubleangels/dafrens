import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
      {children}
    </section>
  );
}

export default Section;
