import Node from './node';
import { fabric } from 'fabric';

export default class Stickman {

  private canvas: fabric.Canvas;

  public constructor(id: string) {
    fabric.Object.prototype.originX = 'center';
    fabric.Object.prototype.originY = 'center';
    this.canvas = new fabric.Canvas(id, { selection: false, backgroundColor: 'white' })
  }

  public draw() {
    const lines: any = {
      headLine: this.line([250, 125, 250, 175], 0, 0),
      hipsLine: this.line([250, 175, 250, 225], 0, 0),

      rightElbowLine: this.line([250, 175, 285, 200], 0, 0),
      rightHandLine: this.line([285, 200, 320, 225], 0, 0),

      leftElbowLine: this.line([250, 175, 215, 200], 0, 0),
      leftHand: this.line([215, 200, 180, 225], 0, 0),

      rightKneeLine: this.line([250, 225, 270, 275], 0, 0),
      rightAnkleLine: this.line([270, 275, 280, 315], 0, 0),

      leftKneeLine: this.line([250, 225, 230, 275], 0, 0),
      leftAnkleLine: this.line([230, 275, 220, 315], 0, 0),
    }

    const circles: any = {
      headCircle: this.node(250, 125, 24, { line2: lines.headLine }),

      shoulderCircle: this.node(250, 175, 5, { line1: lines.headLine, line2: lines.hipsLine, line3: lines.rightElbowLine, line4: lines.leftElbowLine }),

      hipsCircle: this.node(250, 225, 5, { line1: lines.hipsLine, line2: lines.rightKneeLine, line3: lines.leftKneeLine }),

      rightElbowCircle: this.node(285, 200, 5, { line1: lines.rightElbowLine, line2: lines.rightHandLine }),
      rightHandCircle: this.node(320, 225, 5, { line1: lines.rightHandLine }),

      leftElbowCircle: this.node(215, 200, 5, { line1: lines.leftElbowLine, line2: lines.leftHand }),
      leftHandCircle: this.node(180, 225, 5, { line1: lines.leftHand }),

      rightKneeCircle: this.node(270, 275, 5, { line1: lines.rightKneeLine, line2: lines.rightAnkleLine }),
      rightAnkleCircle: this.node(280, 315, 5, { line1: lines.rightAnkleLine }),

      leftKneeCircle: this.node(230, 275, 5, { line1: lines.leftKneeLine, line2: lines.leftAnkleLine }),
      leftAnkleCircle: this.node(220, 315, 5, { line1: lines.leftAnkleLine })
    }

    this.grid(this.canvas);
    const body = { ...lines, ...circles };

    for (const key in body) {
      this.canvas.add(body[key]);
    }

    this.canvas.on('object:moving', (e: any) => this.moving(e.target, body));
  }

  private node(left: number, top: number, radius: number, lines: any) {

    const c = new Node({
      left: left,
      top: top,
      strokeWidth: 2,
      radius: radius,
      fill: 'white',
      stroke: 'black'
    });

    c.hasControls = false;
    c.hasBorders = false;

    c.line1 = lines.line1;
    c.line2 = lines.line2;
    c.line3 = lines.line3;
    c.line4 = lines.line4;
    return c;
  }

  private line(coords: any, offsetX: number, offsetY: number) {
    const [a, b, c, d] = coords;
    return new fabric.Line([a + offsetX, b + offsetY, c + offsetX, d + offsetY], {
      fill: 'white',
      stroke: 'black',
      strokeWidth: 2,
      selectable: false,
      evented: false
    });
  }

  private moving(target: any, body: any) {

    if (target.line1) {
      target.line1 && target.line1.set({ 'x2': target.left, 'y2': target.top });
    }
    if (target.line2) {
      target.line2 && target.line2.set({ 'x1': target.left, 'y1': target.top });
    }
    if (target.line3) {
      target.line3 && target.line3.set({ 'x1': target.left, 'y1': target.top });
    }
    if (target.line4) {
      target.line4 && target.line4.set({ 'x1': target.left, 'y1': target.top });
    }

    this.canvas.bringToFront(body.headCircle);
    this.canvas.renderAll();
  }

  private grid(canvas: fabric.Canvas) {
    const grid = 20;
    const unitScale = 5;
    const canvasWidth = 100 * unitScale;
    const canvasHeight = 100 * unitScale;

    for (let i = 0; i < (canvasWidth / grid); i++) {
      canvas.add(new fabric.Line([i * grid, 0, i * grid, canvasHeight], { type: 'line', strokeWidth: .5, stroke: '#ccc', selectable: false }));
      canvas.add(new fabric.Line([0, i * grid, canvasWidth, i * grid], { type: 'line', strokeWidth: .5, stroke: '#ccc', selectable: false }))
    }
  }
}
