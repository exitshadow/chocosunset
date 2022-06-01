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
        gltf.scene.traverse(function(obj){
            obj.castShadow = true;
            obj.receiveShadow = true;
        })
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
        gltf.scene.traverse(function(obj){
            obj.castShadow = true;
            obj.receiveShadow = true;
        })
    },
    function (xhr){
        console.log((xhr.loaded / xhr.total * 100) + "% loaded");
    },
    function (error) {
        console.log("Something went wrong.")
    }
    );

var pc = createCarac("Stevie", "img/stevie_heart.png");
    
var pointLight1 = new THREE.PointLight(0xfff146, .2, 50);
pointLight1.position.set(-10, 8, -5);

var pointLight2 = new THREE.PointLight(0x94bbe9, .1, 50);
pointLight2.position.set(-8, 3, -12);

var ambientLight = new THREE.AmbientLight(0xfc7070, .6);

// light setup for shadows
const directLight = new THREE.DirectionalLight(0xffa000, .5);
directLight.position.y = 8;
directLight.position.x = 5;
directLight.position.z = -5;

scene.add(pc.charSprite);
scene.add(ambientLight);
scene.add(pointLight1);
scene.add(pointLight2);
scene.add(directLight);
scene.add(camera);

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(innerWidth, innerHeight);

// shadow setup
renderer.shadowMap.enabled = true;

directLight.castShadow = true;
directLight.shadow.bias = -.001;
directLight.shadow.camera.zoom = .5;

pointLight1.castShadow = true;
pointLight1.shadow.bias = -.001;
pointLight1.shadow.camera.zoom = .5;

pointLight2.castShadow = true;
pointLight2.shadow.bias = -.001;
pointLight2.shadow.camera.zoom = .5;




const controls = new THREE.OrbitControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);


var startAnimation = function(){
    physics();
    renderer.render(scene, camera);
    window.requestAnimationFrame(startAnimation);
}

startAnimation();

