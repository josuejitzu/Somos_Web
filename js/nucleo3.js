

import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js'
const panoramaN2 = new PANOLENS.ImagePanorama( 'src/img/360/nucleo02_6.jpg' );
panoramaN2.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, 1500, 0), 0 );
  } );
  panoramaN2.addEventListener('progress', function(e){
    // hide the loader
    var pro = e.progress.loaded / e.progress.total;
    console.log(pro)
    bar1.set(pro*100);

    // ocultarLoad();

 });
  panoramaN2.addEventListener('load', function(e){
    // hide the loader
    ocultarLoad();

 });

const panoramaN2_B = new PANOLENS.ImagePanorama( 'src/img/360/nucleo02_closeup2.jpg' );
panoramaN2_B.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, 1500, 0), 0 );
  } );

let viewer;

const mainContainer = document.getElementById( 'main-container' );

const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';

const navegacionInferior = document.querySelector(".navegacionInferior");
const navegacionInferiorN2 = document.querySelector(".navegacionInferiorN2")
      navegacionInferiorN2.style.visibility = "hidden";
const botonCambiarPosA = document.querySelector(".cambiarPos");
botonCambiarPosA.addEventListener("click",()=>{cambioPosicion("posicionA")});

var infoSpotSize = 400;
var infospotFotos;
infospotFotos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton_white.png?v=123456781");
infospotFotos.position.set( 5000.00, -500, -400 );
// infospotFotos.addHoverText( 'VIDEOS' );
infospotFotos.addEventListener('click',()=>{
    console.log("spot Videos")
    // abrirVideos(true);
    cambioPosicion("posicionB")
    
})
panoramaN2.add(infospotFotos);

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton_white.png?v=123456782");
infospotSomos.position.set( 4083.8273, -2202.3709, 3000 );
// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaN2.add(infospotSomos);

const panelGaleria = document.querySelector(".panelGaleria");

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
             autoHideInfospot:false,
            //  enableReticle: true,
             renderer: new THREE.WebGLRenderer({antialias:true})
            //  initialLookAt:new THREE.Vector3(Math.PI*2,1,0.0)

        } 
    );
    viewer.add( panoramaN2 );
    viewer.add(panoramaN2_B);
    viewer.setPanorama(panoramaN2);
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
    viewer.toggleControlBar();
    
  
    viewer.registerEventListeners();
    viewer.reticle.hide()
    viewer.disableReticleControl()
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



const fadeNegro = document.querySelector(".panelFade");



// const gui = new dat.GUI({width:500});
// gui.close();





