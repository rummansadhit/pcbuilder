// pages/pc-builder/index.tsx
import React from 'react';
import Link from 'next/link';

const categories = ['CPU / Processor', 'Motherboard', 'RAM', 'Power Supply Unit', 'Storage Device', 'Monitor'];

const PCBuilderIndexPage: React.FC = () => {
  return (
    <div>
      <h1>PC Builder</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {/* Display other category details */}
          <Link href={`/pc-builder/${encodeURIComponent(category)}`}>
             <text> Choose/Select </text>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PCBuilderIndexPage;