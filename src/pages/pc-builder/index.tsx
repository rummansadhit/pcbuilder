// pages/pc-builder/index.tsx
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPCComponents, selectUniqueCategories } from '@/utils/slices/pcBuilderSlice';
import Category from '@/components/Category';
import { Col, Row } from 'antd';
import BuilderCategory from '@/components/BuilderCategory';

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
      <Row gutter={[16, 16]}>
        {uniqueCategories.map((category) => (
          <Col key={category} xs={24} sm={12} md={8} lg={8} xl={6}>
            <BuilderCategory categoryName={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PCBuilderIndexPage;