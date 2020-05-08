import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class Stick extends App {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content='hub' />
          <meta httpEquiv='cleartype' content='on' />
          <meta name='HandheldFriendly' content='True' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
          <title>Stick-Motion</title>
        </Head>
        <>
          <CssBaseline />
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
