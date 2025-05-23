import * as THREE from 'three'
import "./style.css"
import { OrbitControls } from 'three/examples/jsm/Addons.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 10000);
camera.position.z = 30;
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.threejs"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(5, 5, 3), 
  new THREE.MeshStandardMaterial({
      color: 0xadfad,
      metalness: 0.7,
  })
);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
ambientLight.intensity = 2;
scene.add(cube, ambientLight);


console.log(cube);
console.log(scene);
const controller = new OrbitControls(camera, renderer.domElement)
function animate(){
  requestAnimationFrame(animate);

  cube.rotateX(0.01);
  cube.rotateY(0.01);
  renderer.render(scene, camera);
}

animate();