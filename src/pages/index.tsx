// pages/index.tsx
import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import React from 'react';
import { GetServerSideProps } from 'next';
import { Col, Row } from 'antd';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Product {
  _id: number;
  image: string;
  productName: string;
  category: string;
  price: number;
  inStock: boolean;
  rating: number;
}

interface HomeProps {
  data: Product[];
}

const Home: React.FC<HomeProps> = ({ data }) => {


  const uniqueCategories = data.reduce((categories: string[], product) => {
    if (!categories.includes(product.category)) {
      return [...categories, product.category];
    }
    return categories;
  }, []);

  const sliderSettings = {
    arrow: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    
    
    pauseOnFocus: true,
    slidesPerRow: 3,
    
  };


  return (
    <div>
      
      <h1>Featured Products</h1>
      {uniqueCategories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
         
          <Slider {...sliderSettings}>
            {data
              .filter((product) => product.category === category)
              .map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </Slider>
          
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps= async () => {
  // Fetch data from the API


  const response = await fetch('http://localhost:3000/api/builder');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};
export default Home;

