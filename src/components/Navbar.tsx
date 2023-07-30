import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Badge, Button, Drawer, Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearPCBuilder, fetchPCComponents, selectPCBuilderComponents, selectUniqueCategories } from '@/utils/slices/pcBuilderSlice';
import PCBuilderCart from './PCBuilderCart';
import { message } from 'antd';
import { Divider, Typography } from 'antd';
const Navbar: React.FC = () => {

    const [cartItemCount, setCartItemCount] = useState(0);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const pcBuilderComponents = useSelector(selectPCBuilderComponents);
    const dispatch = useDispatch<any>();
    useEffect(() => {
        setCartItemCount(pcBuilderComponents.length);
      }, [pcBuilderComponents]);


      const { Title, Paragraph, Text, Link } = Typography;
    
    const handleCartButtonClick = () => {
      setIsDrawerVisible(true);
    };
  
    const handleDrawerClose = () => {
      setIsDrawerVisible(false);
    };

    const handleDeleteAll = () => {
        dispatch(clearPCBuilder());
    }
    const handleComplete = () => {

        message.success('PC Build Complete');
        dispatch(clearPCBuilder());

    }
    const isCompleteButtonDisabled = pcBuilderComponents.length < 5;


  return (
    <div>
   

        <Menu theme="dark" mode="horizontal">

        <Menu.Item key="logo">
          <Link href="/">
            <Text strong style={{ color: 'white' }}>
                PC Builder
            </Text>
          </Link>
        </Menu.Item>



        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link href="/pc-builder">PC-Builder</Link>
        </Menu.Item>



        <Menu.Item key="pc-builder-cart">

        <Badge count={cartItemCount} >
      
        <Button type="primary" onClick={handleCartButtonClick}>
            My PC

        
        </Button>

        </Badge>


        <Drawer title="Your PC" placement="right" onClose={handleDrawerClose} visible={isDrawerVisible}>
        <div>
          {pcBuilderComponents.map((component) => (
            <PCBuilderCart key={component._id} component={component} />
          ))}
        </div>

           {pcBuilderComponents.length > 0 && <Button onClick={handleComplete} disabled={isCompleteButtonDisabled} type="primary">Complete</Button>}
           { pcBuilderComponents.length > 0 && <Button onClick={handleDeleteAll} type='primary' danger>Remove All</Button>}
        </Drawer>
        </Menu.Item>
      </Menu>


    
     



   

    </div>

  );
};

export default Navbar;