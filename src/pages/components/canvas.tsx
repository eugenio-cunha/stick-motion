import { Stickman } from '../../lib';
import React, { useRef, useEffect } from 'react';

interface IProps { }

const Canvas: React.FunctionComponent<IProps> = () => {

  const canvas = useRef(new Stickman('c'));

  useEffect(() => {    
    canvas.current = new Stickman('main-canvas');
    canvas.current.draw();

  }, []);

  return <canvas id='main-canvas' width={500} height={500} />;
};

export default Canvas;
