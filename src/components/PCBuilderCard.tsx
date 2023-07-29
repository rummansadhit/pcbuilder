import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import { PCComponent } from '@/utils/api/pcBuilderApi';
import { useDispatch } from 'react-redux';
import { addToPCBuilder } from '@/utils/slices/pcBuilderSlice';

interface PCBuilderCardProps {

    product: PCComponent;
}

const PCBuilderCard: React.FC<PCBuilderCardProps> = ({product}) => {

    const { _id, image, productName, category, price, inStock ,rating } = product;

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    
    const handleAddToPCBuilder = async () => {
        setLoading(true);
    
        // Simulate API call or any other async operation here
        const newComponent: PCComponent = {
            _id: _id,
            productName,
            category,
            price,
            image,
            inStock,
            rating,
        };
    
        // Dispatch action to add the component to the PC Builder
        dispatch(addToPCBuilder(newComponent));
    
        setLoading(false);
      };
    




  return (

    <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px' }}>
      <div style={{ flex: '0 0 150px' }}>
        <img src={image} alt={productName} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
      </div>
      <div style={{ flex: '1', padding: '16px 0' }}>
        <Card title={productName} bordered={false}>
          <Card.Meta
            description={
              <>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <p>Status: {inStock}</p>
                <p>Rating: {rating} out of 5 Stars</p>
              </>
            }
          />
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
        <Button type="primary" icon={<ShoppingCartOutlined />} style={{ flex: '1', marginRight: '8px' }}
        
        onClick={handleAddToPCBuilder}
        loading={loading}
        disabled={loading}
        
    
        >
          Add To Builder
        </Button>
        <Button type="primary" icon={<EyeOutlined />} style={{ flex: '1', marginLeft: '8px' }}>
          Detail
        </Button>
      </div>
    </div>
  );
};

export default PCBuilderCard;


