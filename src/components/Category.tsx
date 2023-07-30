import React from 'react';
import { Button, Card } from 'antd';

interface CategoryProps {
  categoryName: string;
}

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    
    <Card title= {categoryName} extra={<a href="#">More</a>} style={{ width: 300}}>

        <Button>View Details</Button>
    </Card>

  
  );
};

export default Category;