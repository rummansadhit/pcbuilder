// pages/index.tsx
import { GetStaticProps, InferGetStaticPropsType } from 'next';
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
import { useDispatch, useSelector } from 'react-redux';
import { fetchPCComponents, selectUniqueCategories } from '@/utils/slices/pcBuilderSlice';
import { get } from 'http';
import { connectToDatabase } from '@/utils/dbConnect';




interface HomeProps {
  data: PCComponent[];
}
export const getStaticProps: GetStaticProps<HomeProps>= async () => {
  // Fetch data from the API


  const db = await connectToDatabase('pc_components');
  const productsCollection = db.collection('components');
  const data = await productsCollection.find({  }).toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      fallback: false,
    },
  };
};


export default function Home ({ data }: InferGetStaticPropsType<typeof getStaticProps> ){
  const dispatch = useDispatch<any>();

  const uniqueCategories: string[] = useSelector(selectUniqueCategories);

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

  useEffect(() => {
    // Dispatch the fetchProducts action when the component mounts
    dispatch(fetchPCComponents());
  }, [dispatch]);



  return (
    <div >
      <h1> Features Categories </h1>

      


        <Slider {...catsliderSettings}>

          {uniqueCategories.map((category, index) => (

            <div key={index}> <Category key={index} categoryName={category}/>   </div>
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



