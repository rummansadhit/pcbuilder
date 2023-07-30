// components/ProductCard.tsx
import { Card, Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { PCComponent } from '@/utils/types/PCComponent';


interface ProductCardProps {
  product: PCComponent;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      cover={<img src={product.image} alt={product.productName} />}
      actions={[
        <Link href={`/details/${product._id}`} passHref>
          <Button type="primary">View Details</Button>
        </Link>,
      ]}
    >
      <Card.Meta
        title={product.productName}
        description={
          <>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <p>
              Rating: {product.rating >= 1 ? <StarFilled /> : <StarOutlined />}
              {product.rating >= 2 ? <StarFilled /> : <StarOutlined />}
              {product.rating >= 3 ? <StarFilled /> : <StarOutlined />}
              {product.rating >= 4 ? <StarFilled /> : <StarOutlined />}
              {product.rating >= 5 ? <StarFilled /> : <StarOutlined />}
            </p>
          </>
        }
      />
    </Card>
  );
};

export default ProductCard;
