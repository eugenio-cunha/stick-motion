import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../layout';
import Canvas from './components/canvas'


const IndexPage: NextPage = () => {

  return <Layout title='Stick-Motion'>
    <div>
      <Canvas />
    </div>
  </Layout>;
};

export default IndexPage;