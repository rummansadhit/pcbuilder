import React from 'react';
import { ConfigProvider } from 'antd';
import type { AppProps } from 'next/app';
import theme from './themeConfig';
import Layout from '../components/Layout';
import '../styles/slick.css';
import { Provider } from 'react-redux';
import store, { persistor } from '@/utils/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = ({ Component, pageProps }: AppProps) => (

  <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>


<ConfigProvider theme={theme}>
    {/* Wrap the Component with the Layout */}
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ConfigProvider>

</PersistGate>





  </Provider>

);

export default App;