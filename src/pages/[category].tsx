// pages/categories/[category].tsx

import React from 'react';
import { GetServerSideProps } from 'next';
import { connectToDatabase } from '../utils/dbConnect';
import ProductCard from '@/components/ProductCard';
import { PCComponent } from '@/utils/types/PCComponent';

interface CategoryProps {
  products: PCComponent[]; // Replace 'any[]' with the actual type of your product data
}

const Category: React.FC<CategoryProps> = ({ products }) => {
  


    return (

        <div>
            {/* Display at least 3 products for the specific category */}
            {products.map((product: PCComponent) => (
                <div key={product._id}>
                    <ProductCard product ={product} />
                </div>
            ))};
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<CategoryProps> = async (context:any) => {
  const { category } = context.params;

  // Fetch products for the specific category from your database
  const res = await fetch('https://pcbuilder-rummansadhit.vercel.app/api/builder');
  const responseData = await res.json();
  
  const filteredData = responseData.filter((item: PCComponent) => item.category === category);
   
  return {
    props: {
      products: JSON.parse(JSON.stringify(filteredData)),
    },
  };
};


export default Category;