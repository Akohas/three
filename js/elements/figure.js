import THREE from 'three';

var geometry = new THREE.OctahedronGeometry( 20 );
var color = new THREE.Color( "#7833aa" );
var material = new THREE.MeshLambertMaterial({color: color.getHex()});
var figure = new THREE.Mesh( geometry, material );
figure.position.set(-50, 20, 0)
figure.castShadow = true;
export default figure;