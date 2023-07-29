import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Drawer, Menu } from 'antd';
import { useSelector } from 'react-redux';
import { selectPCBuilderComponents } from '@/utils/slices/pcBuilderSlice';
import PCBuilderCart from './PCBuilderCart';

const Navbar: React.FC = () => {


    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const pcBuilderComponents = useSelector(selectPCBuilderComponents);
  
    const handleCartButtonClick = () => {
      setIsDrawerVisible(true);
    };
  
    const handleDrawerClose = () => {
      setIsDrawerVisible(false);
    };

    const isCompleteButtonDisabled = pcBuilderComponents.length < 5;

  return (
    <div>
   

        <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="pc-builder">
        <Button type="primary" onClick={handleCartButtonClick}>
            Open
        </Button>
        <Drawer title="Your PC" placement="right" onClose={handleDrawerClose} visible={isDrawerVisible}>
        <div>
          {pcBuilderComponents.map((component) => (
            <PCBuilderCart key={component._id} component={component} />
          ))}
        </div>

           {pcBuilderComponents.length > 0 && <Button disabled={isCompleteButtonDisabled} type="primary">Complete</Button>}
        </Drawer>
        </Menu.Item>
      </Menu>


    
     



   

    </div>

  );
};

export default Navbar;