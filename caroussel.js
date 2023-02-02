var scene, camera, renderer, mesh;
var textures = [
  "https://i.ytimg.com/vi/d-wiyT_bDV8/maxresdefault.jpg",
  "https://i.picsum.photos/id/100/200/200.jpg",
  "https://i.picsum.photos/id/1000/200/200.jpg",
  "https://i.picsum.photos/id/10000/200/200.jpg",
  "https://i.picsum.photos/id/100000/200/200.jpg",
  "https://i.picsum.photos/id/1000000/200/200.jpg",
  "https://i.picsum.photos/id/10000000/200/200.jpg",
  "https://i.picsum.photos/id/100000000/200/200.jpg",
  "https://i.picsum.photos/id/1000000000/200/200.jpg",
  "https://i.picsum.photos/id/10000000000/200/200.jpg"
];
var currentTexture = 0;

init();
animate();

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 500;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.getElementById("container").appendChild(renderer.domElement);

  var geometry = new THREE.BoxGeometry(200, 200, 200);
  var loader = new THREE.TextureLoader();
  var material = new THREE.MeshBasicMaterial({ map: loader.load(Textures[currentTexture]) });
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  document.addEventListener("mousemove", onMouseMove, false);
  document.addEventListener("click", onMouseClick, false);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.02;

  renderer.render(scene, camera);
}

function onMouseMove(event) {
  mesh.rotation.y = (event.clientX / window.innerWidth) * 2 * Math.PI;
  mesh.rotation.x = (event.clientY / window.innerHeight) * 2 * Math.PI;
}

function onMouseClick(event) {
  currentTexture = (currentTexture + 1) % Textures.length;
  mesh.material.map = new THREE.TextureLoader().load(Textures[currentTexture]);
}
