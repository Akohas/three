import THREE from 'three';

function getCubes(x, y, z){
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshPhongMaterial({
    color: 0x486ca7,
    specular: 0x555555,
    shininess: 10});

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    cube.castShadow = true;

    return cube
}


export default getCubes;

