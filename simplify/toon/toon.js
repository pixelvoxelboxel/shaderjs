// create a WebGLRenderer and set its width and height
var renderer = new THREE.WebGLRenderer( );
renderer.setSize( window.innerWidth, window.innerHeight );

// add the automatically created canvas element to the page
document.body.appendChild( renderer.domElement );

// create a Scene
var scene = new THREE.Scene();


var fov = 75;
var aspect = window.innerWidth / window.innerHeight;
var nearClippingPlane = 0.1;
var farClippingPlane = 1000;
var camera = new THREE.PerspectiveCamera( fov, aspect, nearClippingPlane, farClippingPlane );
camera.position.set( 0, 0, 20 );


var ambientLight = new THREE.AmbientLight( 0x666666, 1.0 );  
scene.add( ambientLight );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
directionalLight.position.set( 0, 10, 0 );
scene.add( directionalLight );

const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

const sphereMaterial =
  new THREE.MeshToonMaterial(
    {
      color: 0xCC0000
    });

const sphere = new THREE.Mesh(

  new THREE.SphereGeometry(
    RADIUS,
    SEGMENTS,
    RINGS),

  sphereMaterial);

  
sphere.position.z = -200;

scene.add(sphere);

function animate() {
  // schedule the animate function to be called at the start of every frame
  requestAnimationFrame( animate );
  
  // increase the mesh's rotation each frame
  sphere.rotation.z += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  
  // render a frame
  renderer.render( scene, camera );
}
animate();