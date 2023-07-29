import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from './themeConfig';
import Layout from '../components/Layout';
import '../styles/slick.css';

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={theme}>
    {/* Wrap the Component with the Layout */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>
);

export default App;