import ColladaLoader from 'three-collada-loader';

const loader = new ColladaLoader();
function lamp(scene){
  loader.load('./models/lamp/model.dae', (texture) => {
      texture.scene.scale.set(2, 2, 2);
      texture.scene.rotation.set(-1.53, 0, 0);
      texture.scene.position.set(200, -2, 100)
      scene.add(texture.scene)
  });
}

export default lamp;