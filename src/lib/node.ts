import { fabric } from 'fabric';

export default class Node extends fabric.Circle {
  [key: string]: any;

  public constructor(options: fabric.ICircleOptions) {
    super(options);
  }
}
