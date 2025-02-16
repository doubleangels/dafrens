import React from 'react';

interface SectionProps {
  children?: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

export default Section;