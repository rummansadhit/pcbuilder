import React from 'react';
import { Button, Card } from 'antd';
import Link from 'next/link';

interface CategoryProps {
  categoryName: string;
}

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    
    <Card title= {categoryName} extra={<a href="#">More</a>} style={{ width: 300}}>


          <Link href={`pc-builder/${encodeURIComponent(categoryName)}`}>
          <Button>Select</Button>
          </Link>


      
    </Card>

  
  );
};

export default Category;