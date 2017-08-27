import THREE from 'three';
import Detector from './lib/detector';
import {addElements, animateElements} from './elements';
import addLights from './lights';
const OrbitControls = require('three-orbit-controls')(THREE);
const height = window.innerHeight;
const width = window.innerWidth;
 
let scene, camera, renderer;


(function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
  camera.position.set(0, 150, 1000);


  renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);
  renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);


  addElements(scene);
  addLights(scene)

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, false);

  const controls = new OrbitControls(camera);
})();


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  animateElements();
}

if (Detector.webgl) {
  animate();
} else {
  const warning = Detector.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}
