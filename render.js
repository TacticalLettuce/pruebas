var scene = new THREE.Scene();

// Crear la cámara
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Crear el renderizador
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cargar el modelo STL
var loader = new THREE.STLLoader();
loader.load('keystone.stl', function (geometry) {
    var material = new THREE.MeshNormalMaterial(); // Material básico
    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
});

// Posicionar la cámara
camera.position.z = 5;

// Función de renderizado
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();