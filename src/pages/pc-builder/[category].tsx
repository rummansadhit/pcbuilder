// pages/pc-builder/[category].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import {  PCComponent } from '../../utils/types/PCComponent';
import ProductCard from '@/components/ProductCard';
import PCBuilderCard from '@/components/PCBuilderCard';

interface CategoryPageProps {
  categoryComponents: PCComponent[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryComponents }) => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <div>
      <h1>{category}</h1>
      {/* Display at least 3 components for the specific category */}
      {categoryComponents.map((component: PCComponent) => (
        <div key={component._id}>
     
          <div key={component._id}>
                  <PCBuilderCard product ={component} />
                </div>
        </div>
      ))}
    </div>
  );
};



export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async (context) => {
  const { category } = context.params as { category: string };
  const response = await fetch('https://pcbuilder-rummansadhit.vercel.app/api/builder');
  const data = await response.json();

  const categoryComponents = data?.filter((component:any) => component.category === category) || [];

  return {
    props: {
      categoryComponents,
    },
  };
};

export default  CategoryPage;