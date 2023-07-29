
// pages/pc-builder/[category].tsx
import React from 'react';
import { useGetComponentsQuery } from '../../api/pcBuilderApi';
import { GetServerSideProps } from 'next';

const CategoryPage: React.FC = () => {
  const { data } = useGetComponentsQuery();
  const category = 'CPU / Processor'; // Get the category from the router query using useRouter()

  const categoryComponents = data?.filter((component) => component.category === category).slice(0, 3) || [];

  return (
    <div>
      <h1>{category}</h1>
      {/* Display at least 3 components for the specific category */}
      {categoryComponents.map((component) => (
        <div key={component._id}>
          <h2>{component.productName}</h2>
          {/* Display other component details */}
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps= async (context : any) => {
  const { category } = context.params; // Get the category parameter from the URL
  const { data } = await useGetComponentsQuery(); // Fetch all data using RTK Query API

  const categoryComponents = data?.filter((component) => component.category === category).slice(0, 3) || [];

  return {
    props: {
      categoryComponents,
    },
  };
}

