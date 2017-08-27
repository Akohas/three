import THREE from 'three';

var color = new THREE.Color( "#00ff00" );
var material = new THREE.MeshPhongMaterial( {color: color.getHex(), specular: 0x00ff00, shininess: 20, wireframe: true } );
const geometry = new THREE.SphereGeometry(50, 7,7);

const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(25, 50, 0);
sphere.castShadow = true;
export default sphere;
