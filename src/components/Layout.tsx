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
      <main style={{ margin: '10rem' }}>
        {/* Content of the wrapped pages */}
        {children}
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#f0f0f0' }}>
        {/* Footer content */}
        <p>This is the footer content.</p>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  );
};

export default Layout;