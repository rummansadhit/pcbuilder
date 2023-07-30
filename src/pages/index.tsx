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
import Category from '@/components/Category';
import { PCComponent } from '@/utils/types/PCComponent';




interface HomeProps {
  data: PCComponent[];
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
  const catsliderSettings = {
    arrow: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    rows:1,
    
    pauseOnFocus: true,
    slidesPerRow: 3,
    
  };

  return (
    <div>
      <h1> Features Categories </h1>

      


        <Slider {...catsliderSettings}>

          {uniqueCategories.map((category) => (

            <div> <Category categoryName={category}/>   </div>
          ))}
        </Slider>
      



      <h1>Featured Products</h1>

         
          <Slider {...sliderSettings}>
            {data
              .filter((product) => product.averageRating >= 4.5)
              .map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </Slider>
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

