import THREE from 'three';
var loader = new THREE.TextureLoader();


function plane(scene){
  loader.load('./textures/1.png', (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 12, 12);
    const geometry = new THREE.PlaneGeometry(1000, 1000);
    const material = new THREE.MeshPhongMaterial({side: THREE.DoubleSide, map: texture, shininess: 2,});
    const obj = new THREE.Mesh(geometry, material);
    obj.rotateX( - Math.PI / 2 );
    scene.add(obj);


        obj.receiveShadow = true


  })
}
export default plane;