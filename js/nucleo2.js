

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

var videoPlayer = document.querySelector(".video-js");
// videoPlayer.responsive(true);

// const botonCerrarVideo = document.querySelector(".botonCerrarVid");
// botonCerrarVideo.addEventListener("click",()=>{{
//     abrirVideos(false);
// }})

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

const fadeNegro = document.querySelector(".panelFade");

function cambioPosicion(pos){
    console.log("cambiandoPosicion");

    fadeNegro.style.visibility = 'visible';

    gsap.to(fadeNegro,{duration:0.5,opacity:1.0}).eventCallback('onComplete',()=>
    {
        if(pos == "posicionA"){

            viewer.setPanorama(panoramaN2);
            navegacionInferior.style.visibility ="visible";
            navegacionInferiorN2.style.visibility ="hidden";
    
    
        }else if(pos =="posicionB")
        {
             viewer.setPanorama(panoramaN2_B);
             navegacionInferior.style.visibility ="hidden";
             navegacionInferiorN2.style.visibility ="visible";
    
             // panoramaN2_B.add(cuadroPlano_1); 
                panoramaN2_B.add(cuadroPlano_2); 
                // panoramaN2_B.add(cuadroPlano_3);
                panoramaN2_B.add(cuadroPlano_4);
                panoramaN2_B.add(cuadroPlano_5); 
                panoramaN2_B.add(cuadroPlano_6); 
                panoramaN2_B.add(cuadroPlano_7);
                //panoramaN2_B.add(cuadroPlano_8);
                panoramaN2_B.add(cuadroPlano_9); 
                panoramaN2_B.add(cuadroPlano_10); 
                panoramaN2_B.add(cuadroPlano_11);
                panoramaN2_B.add(cuadroPlano_12);
                panoramaN2_B.add(cuadroPlano_13);
                panoramaN2_B.add(cuadroPlano_14); 
                // panoramaN2_B.add(cuadroPlano_15);
                panoramaN2_B.add(cuadroPlano_16);
                panoramaN2_B.add(cuadroPlano_17);//CENTRO
                panoramaN2_B.add(cuadroPlano_18); 
                panoramaN2_B.add(cuadroPlano_19);
                panoramaN2_B.add(cuadroPlano_20);
                panoramaN2_B.add(cuadroPlano_21);
                panoramaN2_B.add(cuadroPlano_22); 
                panoramaN2_B.add(cuadroPlano_23);
                panoramaN2_B.add(cuadroPlano_24);
                panoramaN2_B.add(cuadroPlano_25);
    
        }

        gsap.to(fadeNegro,{delay:1.0,duration:0.5,opacity:0}).eventCallback('onComplete',()=>{
            fadeNegro.style.visibility = 'hidden';
        })
    })
   

}


// const gui = new dat.GUI({width:500});
// gui.close();



// const raycaster = new THREE.Raycaster();

// const rayOrigin = new THREE.Vector3(1900,-500,-13.97)
// const rayDirection = new THREE.Vector3(10, 0, 0)
// rayDirection.normalize()

// raycaster.set(rayOrigin, rayDirection)

// const intersect = raycaster.intersectObject(cuadroPlano_1)
// console.log(intersect)


// const sizes = { width:window.innerWidth,height:window.innerHeight}
// const mouse = new THREE.Vector2()

// window.addEventListener('mousemove', (event) =>
// {
//     mouse.x = event.clientX / sizes.width * 2 - 1
//     mouse.y = - (event.clientY / sizes.height) * 2 + 1

//     console.log(mouse)
// })
//update


var seleccion


//Fotografias

const rutaImgen = "src/img/somos_nucleo-2/somos_nucleo-2_"
const galeriaRutaImagenes = [
    [ "txt_00.jpg", "txt_00-bn.jpg"],
    [ "txt_01.jpg", "txt_01-bn.jpg"],
    [ "txt_02.jpg", "txt_02-bn.jpg"],
    [ "txt_03.jpg", "txt_03-bn.jpg"],
    [ "txt_04.jpg", "txt_04-bn.jpg"],
    [ "txt_05.jpg", "txt_05-bn.jpg"],
    [ "txt_06.jpg", "txt_06-bn.jpg"],
    [ "txt_07.jpg", "txt_07-bn.jpg"],
    [ "txt_08.jpg", "txt_08-bn.jpg"],
    [ "txt_09.jpg", "txt_09-bn.jpg"],
    [ "txt_10.jpg", "txt_10-bn.jpg"],
    [ "txt_11.jpg", "txt_11-bn.jpg"],
    [ "txt_12.jpg", "txt_12-bn.jpg"],
    [ "txt_13.jpg", "txt_13-bn.jpg"],
    [ "txt_14.jpg", "txt_14-bn.jpg"],
    [ "txt_15.jpg", "txt_15-bn.jpg"],
    [ "txt_16.jpg", "txt_16-bn.jpg"],
    [ "txt_17.jpeg", "txt_17-bn.jpg"],
    [ "txt_18.jpeg", "txt_18-bn.jpg"],
    [ "txt_19.jpg", "txt_19-bn.jpg"],
    [ "txt_20.jpeg", "txt_20-bn.jpg"],
    [ "txt_21.jpeg", "txt_21-bn.jpg"],
    [ "txt_22.jpeg", "txt_22-bn.jpg"],
    [ "txt_23.jpg", "txt_23-bn.jpg"],
    [ "txt_24.jpg", "txt_24-bn.jpg"],
]


const imagenColor1 = new Image();
const imagenColor2 = new Image(), imagenColor3= new Image(), imagenColor4= new Image(), imagenColor5= new Image(), imagenColor6= new Image(),imagenColor7= new Image(), imagenColor8= new Image(), imagenColor9= new Image(), 
      imagenColor10 = new Image(), imagenColor11 = new Image(), imagenColor12 = new Image(), imagenColor13 = new Image(), imagenColor14 = new Image(), imagenColor15 = new Image(), imagenColor16 = new Image(), imagenColor17 = new Image(), 
      imagenColor18 = new Image(), imagenColor19 = new Image(),  imagenColor20 = new Image(), imagenColor21 = new Image(), imagenColor22 = new Image(), imagenColor23 = new Image(), imagenColor24 = new Image(), imagenColor25 = new Image()

const texturaColor1 = new THREE.Texture(imagenColor1), texturaColor2 = new THREE.Texture(imagenColor2), texturaColor3 = new THREE.Texture(imagenColor3);
const texturaColor4 = new THREE.Texture(imagenColor4), texturaColor5 = new THREE.Texture(imagenColor5), texturaColor6 = new THREE.Texture(imagenColor6);
const texturaColor7 = new THREE.Texture(imagenColor7), texturaColor8 = new THREE.Texture(imagenColor8), texturaColor9 = new THREE.Texture(imagenColor9);
const texturaColor10 =new THREE.Texture(imagenColor10), texturaColor11 = new THREE.Texture(imagenColor11), texturaColor12 = new THREE.Texture(imagenColor12);
const texturaColor13 = new THREE.Texture(imagenColor13), texturaColor14 = new THREE.Texture(imagenColor14), texturaColor15 = new THREE.Texture(imagenColor15);
const texturaColor16 = new THREE.Texture(imagenColor16), texturaColor17 = new THREE.Texture(imagenColor17), texturaColor18 = new THREE.Texture(imagenColor18);
const texturaColor19 = new THREE.Texture(imagenColor19), texturaColor20 = new THREE.Texture(imagenColor20), texturaColor21 = new THREE.Texture(imagenColor21);
const texturaColor22 = new THREE.Texture(imagenColor22), texturaColor23 = new THREE.Texture(imagenColor23), texturaColor24 = new THREE.Texture(imagenColor24);
const texturaColor25 = new THREE.Texture(imagenColor25);

imagenColor1.addEventListener('load', () =>{texturaColor1.needsUpdate = true}); imagenColor2.addEventListener('load', () =>{texturaColor2.needsUpdate = true});
imagenColor3.addEventListener('load', () =>{texturaColor3.needsUpdate = true}); imagenColor4.addEventListener('load', () =>{texturaColor4.needsUpdate = true});
imagenColor5.addEventListener('load', () =>{texturaColor5.needsUpdate = true}); imagenColor6.addEventListener('load', () =>{texturaColor6.needsUpdate = true});
imagenColor7.addEventListener('load', () =>{texturaColor7.needsUpdate = true}); imagenColor8.addEventListener('load', () =>{texturaColor8.needsUpdate = true});
imagenColor9.addEventListener('load', () =>{texturaColor9.needsUpdate = true}); imagenColor10.addEventListener('load', () =>{texturaColor10.needsUpdate = true});
imagenColor11.addEventListener('load', () =>{texturaColor11.needsUpdate = true}); imagenColor12.addEventListener('load', () =>{texturaColor12.needsUpdate = true});
imagenColor13.addEventListener('load', () =>{texturaColor13.needsUpdate = true}); imagenColor14.addEventListener('load', () =>{texturaColor14.needsUpdate = true});
imagenColor15.addEventListener('load', () =>{texturaColor15.needsUpdate = true}); imagenColor16.addEventListener('load', () =>{texturaColor16.needsUpdate = true});
imagenColor17.addEventListener('load', () =>{texturaColor17.needsUpdate = true}); imagenColor18.addEventListener('load', () =>{texturaColor18.needsUpdate = true});
imagenColor19.addEventListener('load', () =>{texturaColor19.needsUpdate = true}); imagenColor20.addEventListener('load', () =>{texturaColor20.needsUpdate = true});
imagenColor21.addEventListener('load', () =>{texturaColor21.needsUpdate = true}); imagenColor22.addEventListener('load', () =>{texturaColor22.needsUpdate = true});
imagenColor23.addEventListener('load', () =>{texturaColor23.needsUpdate = true}); imagenColor24.addEventListener('load', () =>{texturaColor24.needsUpdate = true});
imagenColor25.addEventListener('load', () =>{texturaColor25.needsUpdate = true});


imagenColor1.src = rutaImgen+galeriaRutaImagenes[0][0]; imagenColor2.src = rutaImgen+galeriaRutaImagenes[1][0]; imagenColor3.src = rutaImgen+galeriaRutaImagenes[2][0]
imagenColor4.src = rutaImgen+galeriaRutaImagenes[3][0]; imagenColor5.src = rutaImgen+galeriaRutaImagenes[4][0]; imagenColor6.src = rutaImgen+galeriaRutaImagenes[5][0]
imagenColor7.src = rutaImgen+galeriaRutaImagenes[6][0]; imagenColor8.src = rutaImgen+galeriaRutaImagenes[7][0]; imagenColor9.src = rutaImgen+galeriaRutaImagenes[8][0]
imagenColor10.src = rutaImgen+galeriaRutaImagenes[9][0]; imagenColor11.src = rutaImgen+galeriaRutaImagenes[10][0]; imagenColor12.src = rutaImgen+galeriaRutaImagenes[11][0]
imagenColor13.src = rutaImgen+galeriaRutaImagenes[12][0]; imagenColor14.src = rutaImgen+galeriaRutaImagenes[13][0]; imagenColor15.src = rutaImgen+galeriaRutaImagenes[14][0]
imagenColor16.src = rutaImgen+galeriaRutaImagenes[15][0]; imagenColor17.src = rutaImgen+galeriaRutaImagenes[16][0]; imagenColor18.src = rutaImgen+galeriaRutaImagenes[17][0]
imagenColor19.src = rutaImgen+galeriaRutaImagenes[18][0]; imagenColor20.src = rutaImgen+galeriaRutaImagenes[19][0]; imagenColor21.src = rutaImgen+galeriaRutaImagenes[20][0]
imagenColor22.src = rutaImgen+galeriaRutaImagenes[21][0]; imagenColor23.src = rutaImgen+galeriaRutaImagenes[22][0]; imagenColor24.src = rutaImgen+galeriaRutaImagenes[23][0]
imagenColor25.src = rutaImgen+galeriaRutaImagenes[24][0]

//IMAGENES BLANCO Y NEGRO

    
const imagenBN_1 = new Image(),
imagenBN_2 = new Image(), imagenBN_3= new Image(), imagenBN_4= new Image(), imagenBN_5= new Image(), imagenBN_6= new Image(),imagenBN_7= new Image(), imagenBN_8= new Image(), imagenBN_9= new Image(), 
imagenBN_10 = new Image(), imagenBN_11 = new Image(), imagenBN_12 = new Image(), imagenBN_13 = new Image(), imagenBN_14 = new Image(), imagenBN_15 = new Image(), imagenBN_16 = new Image(), imagenBN_17 = new Image(), 
imagenBN_18 = new Image(), imagenBN_19 = new Image(),  imagenBN_20 = new Image(), imagenBN_21 = new Image(), imagenBN_22 = new Image(), imagenBN_23 = new Image(), imagenBN_24 = new Image(),imagenBN_25 = new Image()

const texturaBN_1 = new THREE.Texture(imagenBN_1), texturaBN_2 = new THREE.Texture(imagenBN_2), texturaBN_3 = new THREE.Texture(imagenBN_3);
const texturaBN_4 = new THREE.Texture(imagenBN_4), texturaBN_5 = new THREE.Texture(imagenBN_5), texturaBN_6 = new THREE.Texture(imagenBN_6);
const texturaBN_7 = new THREE.Texture(imagenBN_7), texturaBN_8 = new THREE.Texture(imagenBN_8), texturaBN_9 = new THREE.Texture(imagenBN_9);
const texturaBN_10 =new THREE.Texture(imagenBN_10), texturaBN_11 = new THREE.Texture(imagenBN_11), texturaBN_12 = new THREE.Texture(imagenBN_12);
const texturaBN_13 = new THREE.Texture(imagenBN_13), texturaBN_14 = new THREE.Texture(imagenBN_14), texturaBN_15 = new THREE.Texture(imagenBN_15);
const texturaBN_16 = new THREE.Texture(imagenBN_16), texturaBN_17 = new THREE.Texture(imagenBN_17), texturaBN_18 = new THREE.Texture(imagenBN_18);
const texturaBN_19 = new THREE.Texture(imagenBN_19), texturaBN_20 = new THREE.Texture(imagenBN_20), texturaBN_21 = new THREE.Texture(imagenBN_21);
const texturaBN_22 = new THREE.Texture(imagenBN_22), texturaBN_23 = new THREE.Texture(imagenBN_23), texturaBN_24 = new THREE.Texture(imagenBN_24);
const texturaBN_25 = new THREE.Texture(imagenBN_25);


imagenBN_1.addEventListener('load', () =>{texturaBN_1.needsUpdate = true}); imagenBN_2.addEventListener('load', () =>{texturaBN_2.needsUpdate = true});
imagenBN_3.addEventListener('load', () =>{texturaBN_3.needsUpdate = true}); imagenBN_4.addEventListener('load', () =>{texturaBN_4.needsUpdate = true});
imagenBN_5.addEventListener('load', () =>{texturaBN_5.needsUpdate = true}); imagenBN_6.addEventListener('load', () =>{texturaBN_6.needsUpdate = true});
imagenBN_7.addEventListener('load', () =>{texturaBN_7.needsUpdate = true}); imagenBN_8.addEventListener('load', () =>{texturaBN_8.needsUpdate = true});
imagenBN_9.addEventListener('load', () =>{texturaBN_9.needsUpdate = true}); imagenBN_10.addEventListener('load', () =>{texturaBN_10.needsUpdate = true});
imagenBN_11.addEventListener('load', () =>{texturaBN_11.needsUpdate = true}); imagenBN_12.addEventListener('load', () =>{texturaBN_12.needsUpdate = true});
imagenBN_13.addEventListener('load', () =>{texturaBN_13.needsUpdate = true}); imagenBN_14.addEventListener('load', () =>{texturaBN_14.needsUpdate = true});
imagenBN_15.addEventListener('load', () =>{texturaBN_15.needsUpdate = true}); imagenBN_16.addEventListener('load', () =>{texturaBN_16.needsUpdate = true});
imagenBN_17.addEventListener('load', () =>{texturaBN_17.needsUpdate = true}); imagenBN_18.addEventListener('load', () =>{texturaBN_18.needsUpdate = true});
imagenBN_19.addEventListener('load', () =>{texturaBN_19.needsUpdate = true}); imagenBN_20.addEventListener('load', () =>{texturaBN_20.needsUpdate = true});
imagenBN_21.addEventListener('load', () =>{texturaBN_21.needsUpdate = true}); imagenBN_22.addEventListener('load', () =>{texturaBN_22.needsUpdate = true});
imagenBN_23.addEventListener('load', () =>{texturaBN_23.needsUpdate = true}); imagenBN_24.addEventListener('load', () =>{texturaBN_24.needsUpdate = true});
imagenBN_25.addEventListener('load', () =>{texturaBN_25.needsUpdate = true});

imagenBN_1.src = rutaImgen+galeriaRutaImagenes[0][1]
imagenBN_1.src = rutaImgen+galeriaRutaImagenes[0][1]; imagenBN_2.src = rutaImgen+galeriaRutaImagenes[1][1]; imagenBN_3.src = rutaImgen+galeriaRutaImagenes[2][1]
imagenBN_4.src = rutaImgen+galeriaRutaImagenes[3][1]; imagenBN_5.src = rutaImgen+galeriaRutaImagenes[4][1]; imagenBN_6.src = rutaImgen+galeriaRutaImagenes[5][1]
imagenBN_7.src = rutaImgen+galeriaRutaImagenes[6][1]; imagenBN_8.src = rutaImgen+galeriaRutaImagenes[7][1]; imagenBN_9.src = rutaImgen+galeriaRutaImagenes[8][1]
imagenBN_10.src = rutaImgen+galeriaRutaImagenes[9][1]; imagenBN_11.src = rutaImgen+galeriaRutaImagenes[10][1]; imagenBN_12.src = rutaImgen+galeriaRutaImagenes[11][1]
imagenBN_13.src = rutaImgen+galeriaRutaImagenes[12][1]; imagenBN_14.src = rutaImgen+galeriaRutaImagenes[13][1]; imagenBN_15.src = rutaImgen+galeriaRutaImagenes[14][1]
imagenBN_16.src = rutaImgen+galeriaRutaImagenes[15][1]; imagenBN_17.src = rutaImgen+galeriaRutaImagenes[16][1]; imagenBN_18.src = rutaImgen+galeriaRutaImagenes[17][1]
imagenBN_19.src = rutaImgen+galeriaRutaImagenes[18][1]; imagenBN_20.src = rutaImgen+galeriaRutaImagenes[19][1]; imagenBN_21.src = rutaImgen+galeriaRutaImagenes[20][1]
imagenBN_22.src = rutaImgen+galeriaRutaImagenes[21][1]; imagenBN_23.src = rutaImgen+galeriaRutaImagenes[22][1]; imagenBN_24.src = rutaImgen+galeriaRutaImagenes[23][1]
imagenBN_25.src = rutaImgen+galeriaRutaImagenes[24][1]
//CREACION CUADROS y Su MATERIAL

const cuadroGeometry =new THREE.PlaneGeometry(1,1,2);//GEOMETRIA IGUAL

const cuadro_1_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor1,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_2_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor2,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_3_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor3,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_4_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor4,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_5_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor5,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_6_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor6,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_7_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor7,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_8_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor8,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_9_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor9,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_10_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor10,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_11_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor11,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_12_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor12,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_13_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor13,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_14_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor14,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_15_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor15,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_16_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor16,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_17_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor17,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_18_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor18,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_19_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor19,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_20_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor20,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_21_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor21,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_22_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor22,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_23_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor23,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_24_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor24,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide
const cuadro_25_MAT = new THREE.MeshBasicMaterial({color:0xfffffff,map:texturaColor25,side: THREE.Front, transparent: true,})//side:THREE.DoubleSide

const cuadroPlano_1 = new THREE.Mesh(cuadroGeometry,cuadro_1_MAT); const cuadroPlano_2 = new THREE.Mesh(cuadroGeometry,cuadro_2_MAT);
const cuadroPlano_3 = new THREE.Mesh(cuadroGeometry,cuadro_3_MAT); const cuadroPlano_4 = new THREE.Mesh(cuadroGeometry,cuadro_4_MAT);
const cuadroPlano_5 = new THREE.Mesh(cuadroGeometry,cuadro_5_MAT); const cuadroPlano_6 = new THREE.Mesh(cuadroGeometry,cuadro_6_MAT);
const cuadroPlano_7 = new THREE.Mesh(cuadroGeometry,cuadro_7_MAT); const cuadroPlano_8 = new THREE.Mesh(cuadroGeometry,cuadro_8_MAT);
const cuadroPlano_9 = new THREE.Mesh(cuadroGeometry,cuadro_9_MAT); const cuadroPlano_10 = new THREE.Mesh(cuadroGeometry,cuadro_10_MAT);
const cuadroPlano_11 = new THREE.Mesh(cuadroGeometry,cuadro_11_MAT); const cuadroPlano_12 = new THREE.Mesh(cuadroGeometry,cuadro_12_MAT);
const cuadroPlano_13 = new THREE.Mesh(cuadroGeometry,cuadro_13_MAT); const cuadroPlano_14 = new THREE.Mesh(cuadroGeometry,cuadro_14_MAT);
const cuadroPlano_15 = new THREE.Mesh(cuadroGeometry,cuadro_15_MAT); const cuadroPlano_16 = new THREE.Mesh(cuadroGeometry,cuadro_16_MAT);
const cuadroPlano_17 = new THREE.Mesh(cuadroGeometry,cuadro_17_MAT); const cuadroPlano_18 = new THREE.Mesh(cuadroGeometry,cuadro_18_MAT);
const cuadroPlano_19 = new THREE.Mesh(cuadroGeometry,cuadro_19_MAT); const cuadroPlano_20 = new THREE.Mesh(cuadroGeometry,cuadro_20_MAT);
const cuadroPlano_21= new THREE.Mesh(cuadroGeometry,cuadro_21_MAT); const cuadroPlano_22 = new THREE.Mesh(cuadroGeometry,cuadro_22_MAT);
const cuadroPlano_23 = new THREE.Mesh(cuadroGeometry,cuadro_23_MAT); const cuadroPlano_24 = new THREE.Mesh(cuadroGeometry,cuadro_24_MAT);
const cuadroPlano_25 = new THREE.Mesh(cuadroGeometry,cuadro_25_MAT);



let rotacionY = -1.575;
cuadroPlano_1.rotation.y = rotacionY; cuadroPlano_2.rotation.y = rotacionY; cuadroPlano_3.rotation.y = rotacionY; cuadroPlano_4.rotation.y = rotacionY; 
cuadroPlano_5.rotation.y = rotacionY; cuadroPlano_6.rotation.y = rotacionY; cuadroPlano_7.rotation.y = rotacionY; cuadroPlano_8.rotation.y = rotacionY; 
cuadroPlano_9.rotation.y = rotacionY; cuadroPlano_10.rotation.y = rotacionY; cuadroPlano_11.rotation.y = rotacionY; cuadroPlano_12.rotation.y = rotacionY; 
cuadroPlano_13.rotation.y = rotacionY; cuadroPlano_14.rotation.y = rotacionY; cuadroPlano_15.rotation.y = rotacionY; cuadroPlano_16.rotation.y = rotacionY; 
cuadroPlano_17.rotation.y = rotacionY; cuadroPlano_18.rotation.y = rotacionY; cuadroPlano_19.rotation.y = rotacionY; cuadroPlano_20.rotation.y = rotacionY; 
cuadroPlano_21.rotation.y = rotacionY; cuadroPlano_22.rotation.y = rotacionY; cuadroPlano_23.rotation.y = rotacionY; cuadroPlano_24.rotation.y = rotacionY; 
cuadroPlano_25.rotation.y = rotacionY; 

let posicionX = 182 //antes 182

cuadroPlano_1.position.set(posicionX,0,-34.7163)
cuadroPlano_1.scale.set(50,34.04,1);

cuadroPlano_2.position.set(posicionX,120,-70)
cuadroPlano_2.scale.set(40.92, 61.62,1);

cuadroPlano_4.position.set(posicionX,-1,74)
cuadroPlano_4.scale.set(50,34.04,1);

cuadroPlano_5.position.set(posicionX,125,-19.6895)
cuadroPlano_5.scale.set(50,61.62,1);

cuadroPlano_6.position.set(posicionX,50,60);
cuadroPlano_6.scale.set(22.8,17.63,1);

cuadroPlano_7.position.set(posicionX,99.3369,109);
cuadroPlano_7.scale.set(22.8,17.63,1);

cuadroPlano_8.position.set(posicionX,30,0);
cuadroPlano_8.scale.set(50,38.25,1);

cuadroPlano_9.position.set(posicionX,30,60);
cuadroPlano_9.scale.set(22.8,17.63,1);

cuadroPlano_10.position.set(posicionX,-8,33);
cuadroPlano_10.scale.set(22.8,40.92,1);

cuadroPlano_11.position.set(posicionX,88.9868,73.4616);
cuadroPlano_11.scale.set(38.34,51.27,1)

cuadroPlano_12.position.set(posicionX,70,-110);
cuadroPlano_12.scale.set(42,27.98,1)

cuadroPlano_13.position.set(posicionX,109.6871,26.8861);
cuadroPlano_13.scale.set(36.09,22.8,1)

cuadroPlano_14.position.set(posicionX,0,-80);
cuadroPlano_14.scale.set(59.03,38.33,1)

cuadroPlano_15.position.set(posicionX,72,103);
cuadroPlano_15.scale.set(12.45, 17.63, 1);

cuadroPlano_16.position.set(posicionX, 165, 25);
cuadroPlano_16.scale.set(30, 20.01, 1);

cuadroPlano_17.position.set(posicionX,40,0);
cuadroPlano_17.scale.set(90.08,48,1);

cuadroPlano_18.position.set(posicionX,70,-66.2651);
cuadroPlano_18.scale.set(27.98,26,1);

cuadroPlano_19.position.set(posicionX,135,26.8861);
cuadroPlano_19.scale.set(38.34,22.8,1);

cuadroPlano_20.position.set(posicionX,78.6367,21.711);
cuadroPlano_20.scale.set(33.15,22.81,1);

cuadroPlano_21.position.set(posicionX,40,94.1619);
cuadroPlano_21.scale.set(40.92,27.98,1);

cuadroPlano_22.position.set(posicionX,37.2363,-71.4401);
cuadroPlano_22.scale.set(41,27.98,1);

cuadroPlano_23.position.set(posicionX,-8,-15);
cuadroPlano_23.scale.set(61.63,40.92,1);

cuadroPlano_24.position.set(posicionX,140, 80);//78.6367,-24.8646
cuadroPlano_24.scale.set(50,38.25,1);//35.03, 25 ,1

cuadroPlano_25.position.set(posicionX, 78.6367,-24.8646);//151.0876, 26.8861
cuadroPlano_25.scale.set(35.03, 25 ,1);//50,38.25,1

// gui.add(cuadroPlano_24.position,"x").min(-5000).max(5000).step(0.0001).name("planoPos_X");
// gui.add(cuadroPlano_24.position,"y").min(-500).max(500).step(0.0001).name("planoPos_Y");
// gui.add(cuadroPlano_24.position,"z").min(-500).max(500).step(0.0001).name("planoPos_Z");
// gui.add(cuadroPlano_24.scale,"x").min(0).max(500).step(0.01).name("planoScala_X");
// gui.add(cuadroPlano_24.scale,"y").min(0).max(500).step(0.01).name("planoScala_Y");
// gui.add(cuadroPlano_24.scale,"z").min(0).max(50).step(0.01).name("planoScala_Z");
// gui.add(cuadroPlano_17.rotation,"x").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRotacion_X");
// gui.add(cuadroPlano_25.rotation,"y").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRotacion_Y");
// gui.add(cuadroPlano_5.rotation,"z").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRotacion_Z");



//FUNCION TOQUE
let intersectado
panoramaN2_B.addEventListener('click',function(event)
{
    if(event.intersects.length > 0){
        intersectado = event.intersects[0].object;
        if(intersectado.material)
        {
            buscarObjeto(intersectado);

            if(intersectado == cuadroPlano_1)
            {
            }
        }
    }
})
panoramaN2_B.addEventListener('mouseover',function(e){
    console.log("sobre cuadro")
    if(e.intersects.length > 0){
        intersectado = e.intersects[0].object;
        if(intersectado.material)
        {
        }
    }
})


cuadroPlano_1.addEventListener("onmouseover",()=>{
    console.log("hola");
})

const imagenGaleria = document.querySelector(".imagenGaleria");
function buscarObjeto(objeto)
{
    
    switch(objeto)
    {
        case cuadroPlano_1: 
            objeto.material.map = texturaBN_1
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[0][0]

        break;
        case cuadroPlano_2: 
            objeto.material.map = texturaBN_2
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[1][0]
        break;
        case cuadroPlano_3: 
            objeto.material.map = texturaBN_3
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[2][0]
        break;
        case cuadroPlano_4: 
            objeto.material.map = texturaBN_4
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[3][0]
        break;
        case cuadroPlano_5: 
            objeto.material.map = texturaBN_5
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[4][0]

        break;
        case cuadroPlano_6: 
            objeto.material.map = texturaBN_6
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[5][0]

        break;
        case cuadroPlano_7: 
            objeto.material.map = texturaBN_7
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[6][0]

        break;
        case cuadroPlano_8: 
            objeto.material.map = texturaBN_8
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[7][0]

        break;
        case cuadroPlano_9: 
            objeto.material.map = texturaBN_9
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[8][0]

        break;
        case cuadroPlano_10: 
            objeto.material.map = texturaBN_10
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[9][0]

        break;
        case cuadroPlano_11: 
            objeto.material.map = texturaBN_11
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[10][0]

        break;
        case cuadroPlano_12: 
            objeto.material.map = texturaBN_12
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[11][0]

        break;
        case cuadroPlano_13: 
            objeto.material.map = texturaBN_13
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[12][0]

        break;
        case cuadroPlano_14: 
            objeto.material.map = texturaBN_14
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[13][0]

        break;
        case cuadroPlano_15: 
            objeto.material.map = texturaBN_15
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[14][0]

        break;
        case cuadroPlano_16: 
            objeto.material.map = texturaBN_16
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[15][0]

        break;
        case cuadroPlano_17: 
            objeto.material.map = texturaBN_17
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[16][0]

        break;
        case cuadroPlano_18: 
            objeto.material.map = texturaBN_18
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[17][0]

        break;
        case cuadroPlano_19: 
            objeto.material.map = texturaBN_19
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[18][0]

        break;
        case cuadroPlano_20: 
            objeto.material.map = texturaBN_20
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[19][0]

        break;
        case cuadroPlano_21: 
            objeto.material.map = texturaBN_21
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[20][0]

        break;
        case cuadroPlano_22: 
            objeto.material.map = texturaBN_22
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[21][0]

        break;
        case cuadroPlano_23: 
            objeto.material.map = texturaBN_23
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[22][0]

        break;
        case cuadroPlano_24: 
            objeto.material.map = texturaBN_24
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[23][0]

        break;
        case cuadroPlano_25: 
            objeto.material.map = texturaBN_25
            imagenGaleria.src = rutaImgen+galeriaRutaImagenes[24][0]

        break;
        default:
            console.log("cuadro no encontrado");
        break;
    }


    panelGaleria.style.visibility ="visible"
    gsap.to(panelGaleria,{duration:0.5,opacity:1.0});
    // panelGaleria.style.opacity =1.0;
}

const botonCerrarGaleria = document.querySelector(".botonCerrarFoto");
botonCerrarGaleria.addEventListener("click",cerrarGaleria);
function cerrarGaleria() {
    gsap.to(panelGaleria,{duration:0.5,opacity:0.0}).eventCallback('onComplete',()=>
    {
        panelGaleria.style.visibility ="hidden"

    });


}
const sizes ={
    width:window.innerWidth,
    height:window.innerHeight
}

const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y = - (event.clientY / sizes.height) * 2 + 1

    // console.log(mouse)
})

const raycaster = new THREE.Raycaster()
const intersects = raycaster.intersectObjects([cuadroPlano_25,cuadroPlano_17])
console.log(intersects)

// getRaycastViewCenter() → {THREE.Vector3}

const tick=()=>{

    // window.requestAnimationFrame(tick);

    // const rayOrigin = new THREE.Vector3(- 3, 0, 0)
    // const rayDirection = new THREE.Vector3(10, 0, 0)
    // rayDirection.normalize()

    // raycaster.set(mouse, viewer.getRaycastViewCenter())

    // const objectsToTest = [cuadroPlano_25,cuadroPlano_17]
    // // console.log(intersects);
    // for(const intersect of intersects)
    // {
    //     // intersect.object.material.color.set('#0000ff')
    //     console.log("hola 2")
    // }
}
tick();

// registerEventListeners()
// registerMouseAndTouchEvents()
// onMouseMove(event)

// var escalaNormal = new THREE.Vector3();

// cuadroPlano_17.addEventListener("hoverenter",()=>{
//     // console.log("sobre mi");
//     // escalaNormal = cuadroPlano_17.scale;
//     // // console.log(escalaNormal);
//     // cuadroPlano_17.scale.set(cuadroPlano_17.scale.x * 1.05,cuadroPlano_17.scale.y *1.05,1);
//     crecerObjeto(cuadroPlano_17);
// })
// cuadroPlano_17.addEventListener("hoverleave",()=>{
//     // cuadroPlano_17.scale.set(90.08,48,1);
//     // cuadroPlano_17.scale.set(escalaNormal.x,escalaNormal.y,escalaNormal.z);
//     regresarEscala(cuadroPlano_17);
// })

// function crecerObjeto(obj) {
//     escalaNormal = obj.scale;
//     // console.log(escalaNormal);
//     obj.scale.set(cuadroPlano_17.scale.x * 1.05,cuadroPlano_17.scale.y *1.05,1);
// }
// function regresarEscala(obj)
// {
//     obj.scale.set(escalaNormal.x,escalaNormal.y,escalaNormal.z);

// }
cuadroPlano_1.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_1.scale.set(cuadroPlano_1.scale.x * 1.05,cuadroPlano_1.scale.y *1.05,1);
})
cuadroPlano_1.addEventListener("hoverleave",()=>{
    cuadroPlano_1.scale.set(50,34.04,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_2.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_2.scale.set(cuadroPlano_2.scale.x * 1.05,cuadroPlano_2.scale.y *1.05,1);
})
cuadroPlano_2.addEventListener("hoverleave",()=>{
    cuadroPlano_2.scale.set(40.92, 61.62,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_4.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_4.scale.set(cuadroPlano_4.scale.x * 1.05,cuadroPlano_4.scale.y *1.05,1);
})
cuadroPlano_4.addEventListener("hoverleave",()=>{
    cuadroPlano_4.scale.set(50,34.04,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_5.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_5.scale.set(cuadroPlano_5.scale.x * 1.05,cuadroPlano_5.scale.y *1.05,1);
})
cuadroPlano_5.addEventListener("hoverleave",()=>{
    cuadroPlano_5.scale.set(50,61.62,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_6.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_6.scale.set(cuadroPlano_6.scale.x * 1.05,cuadroPlano_6.scale.y *1.05,1);
})
cuadroPlano_6.addEventListener("hoverleave",()=>{
    cuadroPlano_6.scale.set(22.8,17.63,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_7.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_7.scale.set(cuadroPlano_7.scale.x * 1.05,cuadroPlano_7.scale.y *1.05,1);
})
cuadroPlano_7.addEventListener("hoverleave",()=>{
    cuadroPlano_7.scale.set(22.8,17.63,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_8.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_8.scale.set(cuadroPlano_8.scale.x * 1.05,cuadroPlano_8.scale.y *1.05,1);
})
cuadroPlano_8.addEventListener("hoverleave",()=>{
    cuadroPlano_8.scale.set(50,38.25,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_9.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_9.scale.set(cuadroPlano_9.scale.x * 1.05,cuadroPlano_9.scale.y *1.05,1);
})
cuadroPlano_9.addEventListener("hoverleave",()=>{
    cuadroPlano_9.scale.set(22.8,17.63,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_10.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_10.scale.set(cuadroPlano_10.scale.x * 1.05,cuadroPlano_10.scale.y *1.05,1);
})
cuadroPlano_10.addEventListener("hoverleave",()=>{
    cuadroPlano_10.scale.set(22.8,40.92,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_11.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_11.scale.set(cuadroPlano_11.scale.x * 1.05,cuadroPlano_11.scale.y *1.05,1);
})
cuadroPlano_11.addEventListener("hoverleave",()=>{
    cuadroPlano_11.scale.set(38.34,51.27,1)
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_12.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_12.scale.set(cuadroPlano_12.scale.x * 1.05,cuadroPlano_12.scale.y *1.05,1);
})
cuadroPlano_12.addEventListener("hoverleave",()=>{
    cuadroPlano_12.scale.set(42,27.98,1)
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_13.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_13.scale.set(cuadroPlano_13.scale.x * 1.05,cuadroPlano_13.scale.y *1.05,1);
})
cuadroPlano_13.addEventListener("hoverleave",()=>{
    cuadroPlano_13.scale.set(36.09,22.8,1)
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_14.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_14.scale.set(cuadroPlano_14.scale.x * 1.05,cuadroPlano_14.scale.y *1.05,1);
})
cuadroPlano_14.addEventListener("hoverleave",()=>{
    cuadroPlano_14.scale.set(59.03,38.33,1)
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_15.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_15.scale.set(cuadroPlano_15.scale.x * 1.05,cuadroPlano_15.scale.y *1.05,1);
})
cuadroPlano_15.addEventListener("hoverleave",()=>{
    cuadroPlano_15.scale.set(12.45, 17.63, 1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_16.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_16.scale.set(cuadroPlano_16.scale.x * 1.05,cuadroPlano_16.scale.y *1.05,1);
})
cuadroPlano_16.addEventListener("hoverleave",()=>{
    cuadroPlano_16.scale.set(30, 20.01, 1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_17.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_17.scale.set(cuadroPlano_17.scale.x * 1.05,cuadroPlano_17.scale.y *1.05,1);
})
cuadroPlano_17.addEventListener("hoverleave",()=>{
    cuadroPlano_17.scale.set(90.08,48,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_18.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_18.scale.set(cuadroPlano_18.scale.x * 1.05,cuadroPlano_18.scale.y *1.05,1);
})
cuadroPlano_18.addEventListener("hoverleave",()=>{
    cuadroPlano_18.scale.set(27.98,26,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_19.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_19.scale.set(cuadroPlano_19.scale.x * 1.05,cuadroPlano_19.scale.y *1.05,1);
})
cuadroPlano_19.addEventListener("hoverleave",()=>{
    cuadroPlano_19.scale.set(38.34,22.8,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_20.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_20.scale.set(cuadroPlano_20.scale.x * 1.05,cuadroPlano_20.scale.y *1.05,1);
})
cuadroPlano_20.addEventListener("hoverleave",()=>{
    cuadroPlano_20.scale.set(33.15,22.81,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_21.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_21.scale.set(cuadroPlano_21.scale.x * 1.05,cuadroPlano_21.scale.y *1.05,1);
})
cuadroPlano_21.addEventListener("hoverleave",()=>{
    cuadroPlano_21.scale.set(40.92,27.98,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_22.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_22.scale.set(cuadroPlano_22.scale.x * 1.05,cuadroPlano_22.scale.y *1.05,1);
})
cuadroPlano_22.addEventListener("hoverleave",()=>{
    cuadroPlano_22.scale.set(41,27.98,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_23.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_23.scale.set(cuadroPlano_23.scale.x * 1.05,cuadroPlano_23.scale.y *1.05,1);
})
cuadroPlano_23.addEventListener("hoverleave",()=>{
    cuadroPlano_23.scale.set(61.63,40.92,1);
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_24.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_24.scale.set(cuadroPlano_24.scale.x * 1.05,cuadroPlano_24.scale.y *1.05,1);
})
cuadroPlano_24.addEventListener("hoverleave",()=>{
    cuadroPlano_24.scale.set(50,38.25,1);//35.03, 25 ,1
    // cuadroPlano_17.scale.set(escalaNormal);
})


cuadroPlano_25.addEventListener("hoverenter",()=>{
    console.log("sobre mi");
    // escalaNormal = cuadroPlano_17.scale;
    cuadroPlano_25.scale.set(cuadroPlano_25.scale.x * 1.05,cuadroPlano_25.scale.y *1.05,1);
})
cuadroPlano_25.addEventListener("hoverleave",()=>{
    cuadroPlano_25.scale.set(35.03, 25 ,1);//50,38.25,1
    // cuadroPlano_17.scale.set(escalaNormal);
})








