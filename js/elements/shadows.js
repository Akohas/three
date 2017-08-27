import THREE from 'three';

var planeGeometry = new THREE.PlaneGeometry( 2500, 2500 );
planeGeometry.rotateX( - Math.PI / 2 );

var planeMaterial = new THREE.ShadowMaterial();

var plane = new THREE.Mesh( planeGeometry, planeMaterial );
plane.receiveShadow = true;
plane.position.y = 1;
export default plane;