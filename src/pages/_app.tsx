import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from './themeConfig';
import Layout from '../components/Layout';
import '../styles/slick.css';
import { Provider } from 'react-redux';
import store from '@/utils/store';

const App = ({ Component, pageProps }: AppProps) => (

  <Provider store={store}>

<ConfigProvider theme={theme}>
    {/* Wrap the Component with the Layout */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>




  </Provider>

);

export default App;