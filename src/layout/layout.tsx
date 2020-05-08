import React from 'react';
import Head from 'next/head';
import { Header, Footer } from './components';

const Layout: React.FunctionComponent<{title: string}> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
