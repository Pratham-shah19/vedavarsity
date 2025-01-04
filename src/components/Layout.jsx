'use client';
import Script from 'next/script';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './navigation/Header';
import { INST_URL, PORTAL_NAME } from '../data/constants';
import { Footer } from './footer/footer';
const Layout = ({ children, className, SEO }) => {
  return (
    <React.Fragment>
      <iframe
        src={`${INST_URL}/js-sdks/signup-sdk/iframe.php?subdomain=${PORTAL_NAME}`}
        id="iframe"
        className="iframe"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10000,
          display: 'none'
        }}
      />
      <div>
        <Toaster />
      </div>
      <Header />

      <main className={className}>{children}</main>
      <Footer />
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src={`${process.env.NEXT_PUBLIC_INST_URL}/js-sdks/signup-sdk/signup-sdk.js?v=2.8`}
        strategy="beforeInteractive"
      />
      <Script src="/js/inst.js" />
    </React.Fragment>
  );
};

export default Layout;
