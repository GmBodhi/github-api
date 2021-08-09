// @ts-nocheck
import React from 'react';
import * as THREE from 'three';
// prettier-ignore
import {
  OrbitControls,
} from '../../node_modules/three/examples/jsm/controls/OrbitControls';

let camera;
let renderer;
let controls;
let scene;
let geometry;
let material;
let mesh;

window.onresize = () => {
  camera.aspect = document.querySelector('nav').width / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(document.querySelector('nav').width, window.innerHeight);
};

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // scene

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xcce0ff);
    // scene.fog = new THREE.Fog(0xcce0ff, 500, 10000);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const light = new THREE.DirectionalLight(0xdfebff, 1);
    light.position.set(50, 200, 100);
    light.position.multiplyScalar(1.3);

    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const d = 300;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;

    light.shadow.camera.far = 1000;

    scene.add(light);

    // Geometry
    geometry = new THREE.BoxGeometry(1, 1, 1);

    // Material
    material = new THREE.MeshLambertMaterial({color: 0xffffff});

    // Mesh
    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    // Camera
    camera = new THREE.PerspectiveCamera(
        30,
        document.querySelector('nav').width / window.innerHeight,
        1,
        10000,
    );

    renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas'),
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(
        document.querySelector('nav').width,
        window.innerHeight - 500,
    );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.maxPolarAngle = Math.PI * 0.5;
    controls.minDistance = 1000;
    controls.maxDistance = 5000;
    animate();
  }

  componentWillUnmount() {
    renderer.dispose();
  }

  render() {
    return <canvas id="canvas"></canvas>;
  }
}

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  renderer.render(scene, camera);
}
