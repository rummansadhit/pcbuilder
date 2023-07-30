import React from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { connectToDatabase } from '../../utils/dbConnect';
import ProductDetailsPage from '@/components/ProductDetailsPage';
import { Product } from '@/utils/types/PCComponent';
import { ObjectId } from 'mongodb';

interface DetailsPageProps {
  product: Product | null;
}

const DetailsPage: React.FC<DetailsPageProps> = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return <ProductDetailsPage product={product} />;
};

export const getServerSideProps: GetServerSideProps<DetailsPageProps> = async (context:any) => {
  const { productId } = context.params;
    console.log(productId);
  const objectId = new ObjectId(productId);
  try {
    // Fetch the product data using the 'details' parameter (id)
    const db = await connectToDatabase('pc_components');
    const productsCollection = db.collection('components');
    const product = await productsCollection.findOne({ _id: objectId });

    if (!product) {
      return {
        notFound: true, // Return a 404 page if product not found
      };
    }

    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      },
    };
  } catch (error) {
    return {
      notFound: true, // Return a 404 page if an error occurs
    };
  }
};

export default DetailsPage;