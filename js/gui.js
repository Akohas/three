const DAT = require('./lib/dat.gui.min');
const ball =  {
  rotationY : 0,
  rotationX : 0,
  rotationZ : 0,
  positionY : 0,
  positionX : 0,
  positionZ : 0,
}

const gui = () => {
  var gui = new DAT.GUI();
  gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
  gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);
  gui.add(ball, 'rotationZ').min(-0.2).max(0.2).step(0.001);
  gui.add(ball, 'positionY').min(-5).max(5).step(0.1);
  gui.add(ball, 'positionX').min(-5).max(5).step(0.1);
  gui.add(ball, 'positionZ').min(-5).max(5).step(0.1);
}

export {ball, gui}