

import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js'
const panoramaN2 = new PANOLENS.ImagePanorama( 'src/img/360/nucleo02.jpg' );
panoramaN2.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, -300, -400), 0 );
  } );


const panoramaN2_B = new PANOLENS.ImagePanorama( 'src/img/360/nucleo02_closeup.jpg' );
panoramaN2.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, -300, -400), 0 );
  } );

let viewer;
const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );
const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';

var infoSpotSize = 400;
var infospotFotos;
infospotFotos = new PANOLENS.Infospot(infoSpotSize,"src/img/simbolos/VER_MAS.png?v=123456781");
infospotFotos.position.set( 5000.00, -500, -400 );
// infospotFotos.addHoverText( 'VIDEOS' );
infospotFotos.addEventListener('click',()=>{
    console.log("spot Videos")
    // abrirVideos(true);
    cambioPosicion("posicionB")
    
})
panoramaN2.add(infospotFotos);

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(infoSpotSize,"src/img/simbolos/VER_MAS.png?v=123456782");
infospotSomos.position.set( 4083.8273, -2202.3709, 3000 );
// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaN2.add(infospotSomos);

// gsap.to(infospotSomos.position,{delay:2,duration:1,y:10, repeat:-1}).eventCallback('onComplete',()=>{
//     infospotSomos.position.set( 1900, -1860, -5000)
// });


//DEBUG infospots
//  const gui = new dat.GUI();

// gui.add(infospotSomos.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
// gui.add(infospotSomos.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
// gui.add(infospotSomos.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotFotos.position,"x").min(-5000).max(5000).step(0.0001).name("Videos_x")
// gui.add(infospotFotos.position,"y").min(-5000).max(5000).step(0.0001).name("Videos_y")
// gui.add(infospotFotos.position,"z").min(-5000).max(5000).step(0.0001).name("Videos_z")

//Se construye viewer 360 FOV,panorama,etc

const camaraRot={ 
    x:0, y:0,z:0
}
function setupPanolens () {
    // viewer = new PANOLENS.ImagePanorama(panorama);
    viewer = new PANOLENS.Viewer( 
        {
             container: mainContainer,
             //  controlButtons: deteccionIphone() ? controlesIos:controles,
             cameraFov:70,
             autoHideInfospot:false
            //  initialLookAt:new THREE.Vector3(Math.PI*2,1,0.0)

        } 
    );
    viewer.add( panoramaN2 );
    viewer.add(panoramaN2_B);
    viewer.setPanorama(panoramaN2);
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
}
// gui.add(camaraRot,"x").min(-1).max(1).step(0.001).name("nucleo3_z").onFinishChange(()=>{
//      viewer.camera.rotation = new THREE.Vector3(camaraRot.x,0,0);
//     //  viewer.tweenControlCenter( new THREE.Vector3(camaraRot.x, 0, 0), 0 );

// })
function createWidget(){
    //Giroscopio
    const widget = { 
        style: { backgroundImage: "" },
        onTap: () => {
            //const { videoElement } = panorama;
            //videoElement.classList.toggle( 'visible' );
            item.style.backgroundImage = status === 0 ? offImage : onImage;
            // status = status === 1 ? 0 : 1;
            // gyro = status;

            // viewer.enableControl(gyro);
           

            // if(permisoGiroscopio == false)
            //      requestAccess();
           
        }
   
    };

    const item = viewer.appendControlItem( widget );
}

function init () {
    // Build up gallery 
    // buildGallery();
    // Setup panolens
    setupPanolens();

    createWidget();
}

init();


botonCerrarTextoSomos.addEventListener('click',()=>{
    console.log("cerrando texto");
    gsap.fromTo(panelTextoSomos,{opacity:1},{duration:0.5,opacity:0}).eventCallback('onComplete',()=>{

        panelTextoSomos.style.visibility = "hidden";
        viewer.enableControl();
    })

})

var videoPlayer = document.querySelector(".video-js");
// videoPlayer.responsive(true);

const botonCerrarVideo = document.querySelector(".botonCerrarVid");
botonCerrarVideo.addEventListener("click",()=>{{
    abrirVideos(false);
}})

const panelVideos = document.querySelector(".panelVideos");
function abrirVideos(abrir){
    if(abrir)
    {
        panelVideos.style.visibility ="visible";
        
        gsap.fromTo(panelVideos,{opacity:0},{duration:0.5,opacity:1}).eventCallback('onComplete',()=>{

        
            
            viewer.disableControl();
        })
    

    }else if(!abrir)
    {
        gsap.fromTo(panelVideos,{opacity:1},{duration:0.5,opacity:0}).eventCallback('onComplete',()=>{

        
            
            // viewer.disableControl();
            viewer.enableControl(0);
            panelVideos.style.visibility ="hidden";

        })

    }

}


function cambioPosicion(pos){
    console.log("cambiandoPosicion");
    if(pos == "posicionA"){

        viewer.setPanorama(panoramaN2);

    }else if(pos =="posicionB")
    {
         viewer.setPanorama(panoramaN2_B);

    }

}





const sombraEsfera = new THREE.MeshBasicMaterial({color:0x000000})//side:THREE.DoubleSide
const sombraGeometry =new THREE.PlaneGeometry(1,1,2);

const sombraPlanoN1 = new THREE.Mesh(sombraGeometry,sombraEsfera)
sombraPlanoN1.position.set(1900,-500,-13.97)
sombraPlanoN1.scale.set(500,500,1);
sombraPlanoN1.rotation.x = -Math.PI/2;
panoramaN2.add(sombraPlanoN1);


const raycaster = new THREE.Raycaster();

const rayOrigin = new THREE.Vector3(1900,-500,-13.97)
const rayDirection = new THREE.Vector3(10, 0, 0)
rayDirection.normalize()

raycaster.set(rayOrigin, rayDirection)

const intersect = raycaster.intersectObject(sombraPlanoN1)
console.log(intersect)


const sizes = { width:window.innerWidth,height:window.innerHeight}
const mouse = new THREE.Vector2()

// window.addEventListener('mousemove', (event) =>
// {
//     mouse.x = event.clientX / sizes.width * 2 - 1
//     mouse.y = - (event.clientY / sizes.height) * 2 + 1

//     console.log(mouse)
// })
//update
const tick = ()=>{

    window.requestAnimationFrame(tick)
}

tick();

var seleccion
