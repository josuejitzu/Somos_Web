
import * as THREE from "./three/build/three.module.js"
import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js'


// console.log(THREE);
const loadingBarElement = document.querySelector('.loading-bar');
const botonFlecha = document.querySelector('.botonFlecha');
const botonIniciar = document.querySelector('.botonInicio');

// Scene
const scene = new THREE.Scene()
const gui = new dat.GUI();
gui.close ();

// Object

// console.log(GLTFLoader);
// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height)
camera.position.x = -7
camera.position.y = 30
camera.position.z = 30
camera.rotation.x = 0.2;
//final -7,19,30
camera.fov = 90
scene.add(camera)

gui.add(camera.position,"x").min(-30).max(50).step(0.001)
gui.add(camera.position,"y").min(-30).max(50).step(0.001)
gui.add(camera.position,"z").min(-30).max(50).step(0.001)
gui.add(camera.rotation,"x").min(-Math.PI).max(Math.PI).step(0.001).name("arriba/abajo")
gui.add(camera.rotation,"y").min(-Math.PI).max(Math.PI).step(0.001).name("derecha")
gui.add(camera.rotation,"z").min(-Math.PI).max(Math.PI).step(0.001).name("frontal")

/**
 * Overlay
 */
 const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
 const overlayMaterial = new THREE.ShaderMaterial({
    transparent:true,
    uniforms:
    {
        uAlpha:{value:1}
    },
    vertexShader: `
        void main()
        {
            gl_Position =  vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uAlpha;
        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
    `
    
})
 const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
 overlay.position.x=-7
 overlay.position.y=30
 overlay.position.z=30
 scene.add(overlay)

var bar1 = new ldBar("#barraCarga");
var bar2 = document.getElementById("barraCarga").ldBar;
// bar1.style.width = "100%";
 bar1.set(100)
//EDificio Modelo
const loadingManager = new THREE.LoadingManager(
    //cargado
    ()=>{
        console.log("cargado");
        
        
        document.querySelector(".panelLoad").style.opacity = 0.0;
        document.querySelector(".panelLoad").style.visibility = "hidden";

        gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0 })
        // loadingBarElement.classList.add('ended')
     
    },
    (itemUrl, itemsLoaded, itemsTotal)=>{
        
        const progressRatio = itemsLoaded / itemsTotal
        console.log(progressRatio)
        // loadingBarElement.style.transform = `scaleX(${progressRatio})`
        bar1.set(progressRatio * 100)
    
    }
)
const gltfLoader = new GLTFLoader(loadingManager)
const materialEdificio = new THREE.MeshStandardMaterial({color:'#ffffff'})

gltfLoader.load(
    './src/modelos3D/edificio_01.glb',
    (gltf) =>
    {
        console.log('success')
        console.log(gltf)
        scene.add(gltf.scene);
        gltf.scene.traverse((obj)=>{
            if(obj.isMesh)
            {
                obj.material = materialEdificio;
            }
        })
    },
    (progress) =>
    {
        console.log('progress')
        console.log(progress)
    },
    (error) =>
    {
        console.log('error')
        console.log(error)
    }
)


//LUZ
const luzFill = new THREE.AmbientLight( 0xffffff,0.5)
scene.add(luzFill);
const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.3)
scene.add(directionalLight)
// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.render(scene, camera)
renderer.setClearColor('#E4E0DD')

//UPDATE TICK
const clock = new THREE.Clock()

const tick = () =>
{
    // console.log('tick')

    const elapsedTime = clock.getElapsedTime()
     // Render
     renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()


window.addEventListener('resize', () =>
{
     // Update sizes
     sizes.width = window.innerWidth
     sizes.height = window.innerHeight
 
     // Update camera
     camera.aspect = sizes.width / sizes.height
     camera.updateProjectionMatrix()
 
     // Update renderer
     renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    console.log("RESIZE")
})


// console.log(botonFlecha);
botonFlecha.addEventListener('click',()=>{

    console.log('boton flecha presionado');
    gsap.to(camera.rotation,{duration:2,ease:"sine.out",x:-0.1})

    gsap.to(camera.position,{duration:1,ease:"sine.out",delay:0,x:-7})
    gsap.to(camera.position,{duration:1,ease:"sine.out",delay:0,y:19}).eventCallback('onComplete',()=>{

    })
    // gsap.to(camera.position,{duration:1,delay:0,z:30})
     document.querySelector(".logoInicio").style.opacity = 0.0;
     document.querySelector(".logosinicio").style.opacity = 1.0;
     document.querySelector(".botonInicio").style.opacity = 1.0;

})

//BOTON Inicio
botonIniciar.addEventListener('click',()=>{
    console.log('boton inicio presionado')
    document.querySelector(".panelLoad").style.visibility = "visible";
    gsap.to(camera.rotation,{duration:4,ease:"sine.out",x:0})
    let barraCarga = document.getElementById("barraCarga");
    barraCarga.parentNode.removeChild(barraCarga);
    document.querySelector(".panelLoad").style.visibility = "visible";
    gsap.to(camera.position,{duration:4,ease:"sine.out",y:3}).eventCallback('onComplete',()=>{})
    gsap.to(camera.position,{duration:4,ease:"sine.out",z:13}).eventCallback('onComplete',()=>{
        // document.querySelector(".panelLoad").style.opacity = 0.0;
        document.querySelector(".panelLoad").style.opacity = 1.0;
        var id = setInterval(frame, 1001);
        function frame(){

            window.location.href = 'lobby.html';
        }
    })

})
