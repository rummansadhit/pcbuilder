import React from 'react';
import { Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { removeFromPCBuilder } from  '@/utils/slices/pcBuilderSlice'; // Import the action
import { PCComponent } from '@/utils/types/PCComponent';

interface PCBuilderCartProps {
  component: PCComponent;
}

const PCBuilderCart: React.FC<PCBuilderCartProps> = ({ component }) => {
  const dispatch = useDispatch();

  const handleRemoveFromPCBuilder = () => {
    // Dispatch the action to remove the component from the cart
    dispatch(removeFromPCBuilder(component._id));
  };

  return (
    <Card>
      <img src={component.image} alt={component.productName} style={{ width: '100px' }} />
      <div>
        <h3>{component.productName}</h3>
        <p>Price: {component.price}</p>
      </div>
      <div>
        <Button type="primary" danger onClick={handleRemoveFromPCBuilder}>Remove</Button>
      </div>
    </Card>
  );
};

export default PCBuilderCart;