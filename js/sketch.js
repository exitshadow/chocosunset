//import * as THREE from 'three';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 1, 1000);
camera.position.z = 17.5;
camera.position.x = 5;


const decor = new THREE.GLTFLoader();
decor.load(
    'mesh/decor.gltf',
    function (gltf) {
        scene.add(gltf.scene);
    },
    function (xhr){
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    function (error) {
        console.log("Something went wrong.")
    }
    );

const jabuticaba = new THREE.GLTFLoader();
jabuticaba.load(
    'mesh/jabuticaba.gltf',
    function (gltf) {
        scene.add(gltf.scene);
        gltf.scene.position.y = 2.4;
        gltf.scene.position.x = 8;
        machin = gltf.scene;
    },
    function (xhr){
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    function (error) {
        console.log("Something went wrong.")
    }
    );

var pc = createCarac("Stevie", "img/stevie_heart.png");
    
var pointLight1 = new THREE.PointLight(0xfff146, 2, 50);
pointLight1.position.set(3, 2, -5);

var pointLight2 = new THREE.PointLight(0x94bbe9, .3, 50);
pointLight2.position.set(-15, 1, -8);

var ambientLight = new THREE.AmbientLight(0xfc7070, .6);

scene.add(pc.charSprite);
// the character constructor bridges all previous functions inside of itself
    // information to build the character’s sprite
    // const charTex = new THREE.TextureLoader().load(pc.getSkin().src);
    // const charMaterial = new THREE.SpriteMaterial( {map: charTex});
    // const charSprite = new THREE.Sprite(charMaterial);

scene.add(ambientLight);
scene.add(pointLight1);
scene.add(pointLight2);

scene.add(camera);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(innerWidth, innerHeight);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);


var startAnimation = function(){
    physics();
    renderer.render(scene, camera);
    window.requestAnimationFrame(startAnimation);
}

startAnimation();

