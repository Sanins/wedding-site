import React from 'react';
import { AppProps } from 'next/app';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

// Custom App component
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;