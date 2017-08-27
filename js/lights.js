import THREE from 'three';


function addLights(scene){

  var pointLight = new THREE.PointLight( 0xd2d26b, 3, 600, 2);
  pointLight.position.set( 250, 150, 50 );
  scene.add(pointLight);

  var light = new THREE.AmbientLight( 0x151515 ); // soft white light
  scene.add( light );

  pointLight.castShadow = true;   
  pointLight.shadow.mapSize.width = 512;  // default
  pointLight.shadow.mapSize.height = 512; // default
  pointLight.shadow.camera.near = 0.5;       // default
  pointLight.shadow.camera.far = 500 
}

export default addLights;