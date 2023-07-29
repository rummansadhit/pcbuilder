import React from 'react';
import { Button, Card } from 'antd';
import { PCComponent } from '@/utils/api/pcBuilderApi';

interface PCBuilderCartProps {
  component: PCComponent; 
}

const PCBuilderCart: React.FC<PCBuilderCartProps> = ({ component }) => {
  const handleAddToPCBuilder = () => {
    // Implement the logic to add the component to the PC builder state
    console.log('Adding component to PC builder:', component);
  };

  return (
    <Card>
      <img src={component.image} alt={component.productName} style={{ width: '100px' }} />
      <div>
        <h3>{component.productName}</h3>
        <p>Price: {component.price}</p>
      </div>
      <div>
        <Button type="primary" danger onClick={handleAddToPCBuilder}>Remove</Button>
       
      </div>
    </Card>
  );
};

export default PCBuilderCart;