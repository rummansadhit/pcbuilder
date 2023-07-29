import React from 'react';
import { Card } from 'antd';

interface CategoryProps {
  categoryName: string;
}

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    <Card
      style={{
        background: 'blue',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      }}
    >
      {categoryName}
    </Card>
  );
};

export default Category;