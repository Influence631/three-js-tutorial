import * as THREE from 'three'

const scene = new THREE.Scene();
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(5, 5), 
  new THREE.MeshStandardMaterial({
      color: 'yellow',
      metalness: 1
}));

const camera = new THREE.PerspectiveCamera(80, window.window)