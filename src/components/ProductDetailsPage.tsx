import React from 'react';
import { Product } from '@/utils/types/PCComponent';// Import the Product interface here
import { Typography, Divider } from 'antd';

const { Title, Text } = Typography;

interface ProductDetailsPageProps {
  product: Product ;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product }) => {
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div>
      <Title level={2}>{product.productName}</Title>
      <Divider />

      <img src={product.image} alt={product.productName} style={{ width: '100%', maxWidth: '400px' }} />

      <div>
        <Text strong>Category:</Text> {product.category}
      </div>

      <div>
        <Text strong>Status:</Text> {product.status}
      </div>

      <div>
        <Text strong>Price:</Text> {product.price.$numberDouble}
      </div>

      <div>
        <Text strong>Description:</Text>
        <p>{product.description}</p>
      </div>

      <Divider />

      <Title level={3}>Key Features:</Title>
      <div>
        <Text strong>Brand:</Text> {product.keyFeatures.brand}
      </div>

      <div>
        <Text strong>Model:</Text> {product.keyFeatures.model}
      </div>

      <div>
        <Text strong>Specification:</Text> {product.keyFeatures.specification}
      </div>

      <div>
        <Text strong>Port:</Text> {product.keyFeatures.port}
      </div>

      <div>
        <Text strong>Type:</Text> {product.keyFeatures.type}
      </div>

      <div>
        <Text strong>Resolution:</Text> {product.keyFeatures.resolution}
      </div>

      <div>
        <Text strong>Voltage:</Text> {product.keyFeatures.voltage}
      </div>

      <Divider />

      <div>
        <Text strong>Individual Rating:</Text> {product.individualRating.$numberDouble}
      </div>

      <div>
        <Text strong>Average Rating:</Text> {product.averageRating.$numberDouble}
      </div>
    </div>
  </div>
  );
};

export default ProductDetailsPage;