import getCubes from './cubes';
import figure from './figure';
import sphere from './sphere';
import plane from './planeBottom';
import lamp from './lamp';
import {ball, planeGUI, gui} from './../gui';
import shadow from './shadows';


// gui();

function addElements(scene){
    plane(scene)
    scene.add(sphere);
    scene.add(figure);
    lamp(scene);
    scene.add(shadow);
    scene.add(getCubes(-100, 50, 200));
    scene.add(getCubes(250, 100, 250));
}

function animateElements(){
  // sphere.rotation.y += ball.rotationY;
  // sphere.rotation.x += ball.rotationX;
  // sphere.rotation.z += ball.rotationZ;
  // sphere.position.y += ball.positionY;
  // sphere.position.x += ball.positionX;
  // sphere.position.z += ball.positionZ;
}

export {addElements};
export {animateElements};
