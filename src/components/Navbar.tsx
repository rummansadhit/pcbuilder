import React from 'react';
import Link from 'next/link';
import { Menu } from 'antd';

const Navbar: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link href="/about">About</Link>
      </Menu.Item>
      {/* Add more menu items for other pages as needed */}
    </Menu>
  );
};

export default Navbar;