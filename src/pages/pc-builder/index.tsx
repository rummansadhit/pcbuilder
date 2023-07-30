// pages/pc-builder/index.tsx
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPCComponents, selectUniqueCategories } from '@/utils/slices/pcBuilderSlice';
import Category from '@/components/Category';

const categories = ['CPU', 'GPU' ,'Motherboard', 'RAM', 'Power Supply Unit', 'Storage Device', 'Monitor'];

const PCBuilderIndexPage: React.FC = () => {


    const dispatch = useDispatch<any>();

    const uniqueCategories: string[] = useSelector(selectUniqueCategories);

    useEffect(() => {
        // Dispatch the fetchProducts action when the component mounts
        dispatch(fetchPCComponents());
      }, [dispatch]);
      
  return (
    <div>
      <h1>PC Builder</h1>
      {uniqueCategories.map((category) => (

<div> <Category categoryName={category}/>   </div>
))}
    </div>
  );
};

export default PCBuilderIndexPage;