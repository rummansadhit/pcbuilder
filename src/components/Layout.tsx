import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Place your common UI elements here */}
      <header>
        <Navbar />
      </header>
      <main>
        {/* Content of the wrapped pages */}
        {children}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default Layout;