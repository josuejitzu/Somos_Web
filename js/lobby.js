// import * as THREE from "./three/build/three.module.js"
// import imgPrueba from '../src/img/netflix_video_poster.jpg'

// import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js'

const panoramaLobbyA = new PANOLENS.ImagePanorama( 'src/img/360_amarillo/posicion01_6.jpg' );
panoramaLobbyA.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(4083.8273, -450, -2635.9018), 0 );

  } );
// panoramaLobbyA.addEventListener('progress', function(e){
//     // show the loader
//     console.log(e.loaded/e.total);
//  });
panoramaLobbyA.addEventListener('progress', function(e){
    // hide the loader
    var pro = e.progress.loaded / e.progress.total;
    console.log(pro)
    bar1.set(pro*100);

    // ocultarLoad();

 });
 panoramaLobbyA.addEventListener('load', function(e){
    // hide the loader
    ocultarLoad();

 });

const panoramaLobbyB = new PANOLENS.ImagePanorama( 'src/img/360_amarillo/posicion02_7.jpg' );
panoramaLobbyB.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(4000.00, -465.23, 100), 0 );
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




///INFOSPOTS
const infoSpotSize = 300;

var infospotAuditorio;
infospotAuditorio = new PANOLENS.Infospot(300,"src/img/iconos/mas_boton.png?v=123456782");//
infospotAuditorio.position.set( 5000.00, -1705.23, -880 );
// infospotAuditorio.addHoverText( 'AUDITORIO' );
infospotAuditorio.addEventListener('click',()=>{
    console.log("spot Auditorio")
    // document.querySelector(".panelCarga").style.opacity = 1.0;

    // window.location.href = 'auditorio.html';
    cambiarA("auditorio");
    // panoramaLobbyA.dispose();
    // viewer.remove(panoramaLobbyA);
    // viewer.add(panoramaAuditorio);
    
})
panoramaLobbyB.add(infospotAuditorio);
panoramaLobbyB.rotation.y = Math.PI*2;

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(220,"src/img/iconos/mas_boton.png?v=123456783");
infospotSomos.position.set( -300, -1226.9262, -4478.4081 );

// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaLobbyA.add(infospotSomos);




//nucleo2 pos 2800, -1200, -2500
// var infospotNucleo1 = new PANOLENS.Infospot(infoSpotSize,"src/img/simbolos/VER_MAS.png?v=123456783");
var infospotNucleo1 = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/1.png?v=123456783");
infospotNucleo1.position.set( 3975.4445, -1280, -50 );
// infospotNucleo1.position.y = -850;
// infospotNucleo1.addHoverText( 'Nucleo 1' );
infospotNucleo1.addEventListener('click',()=>{
    console.log("spot nucleo 1")
    cambiarA("nucleo1");
     
})
panoramaLobbyA.add(infospotNucleo1);


var infospotNucleo2 = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/2.png?v=123456784");
infospotNucleo2.position.set(  4083.8273, -1310, -2440);
infospotNucleo2.addEventListener('click',()=>{
    console.log("spot nucleo 2")
    cambiarA("nucleo2");
     
})
panoramaLobbyA.add(infospotNucleo2);


var infospotNucleo3 = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/3.png?v=123456785");
infospotNucleo3.position.set(  3867.0618, -1220, -4370.0254);

// infospotNucleo3.addHoverText( '' );
infospotNucleo3.addEventListener('click',()=>{
    console.log("spot nucleo 3")
    cambiarA("nucleo3");
     
})
panoramaLobbyA.add(infospotNucleo3);


var infospotPosicionA = new PANOLENS.Infospot(200,"src/img/simbolos/FLECHA_Arriba_negro.png?v=123456781");
infospotPosicionA.position.set( -1010.1609, -565.23, 3000 );
// infospotPosicionA.addHoverText( 'Posicion A' );
infospotPosicionA.addEventListener('click',()=>{
    console.log("posicionA")
    // cambiarA("nucleo1");
    cambioPosicion('posA')
    
})
panoramaLobbyB.add(infospotPosicionA);

var infospotPosicionB = new PANOLENS.Infospot(200,"src/img/iconos/mas_boton.png?v=123456785");
infospotPosicionB.position.set( 1374.2591, -880, -4911.939 );
// infospotPosicionB.addHoverText( 'Posicion B' );
infospotPosicionB.addEventListener('click',()=>{
    console.log("posicionB")
    // cambiarA("nucleo1");
    cambioPosicion('posB')
    
})
panoramaLobbyA.add(infospotPosicionB);



//DEBUG GUI
const gui = new dat.GUI();

// gui.add(infospotSomos.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
// gui.add(infospotSomos.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
// gui.add(infospotSomos.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotAuditorio.position,"x").min(-5000).max(5000).step(0.0001).name("Auditorio_x")
// gui.add(infospotAuditorio.position,"y").min(-5000).max(5000).step(0.0001).name("Auditorio_y")
// gui.add(infospotAuditorio.position,"z").min(-5000).max(5000).step(0.0001).name("Auditorio_z")

// gui.add(infospotPosicionA.position,"x").min(-5000).max(5000).step(0.0001).name("PosA_x")
// gui.add(infospotPosicionA.position,"y").min(-5000).max(5000).step(0.0001).name("PosA_y")
// gui.add(infospotPosicionA.position,"z").min(-5000).max(5000).step(0.0001).name("PosA_z")

// gui.add(infospotPosicionB.position,"x").min(-5000).max(5000).step(0.0001).name("PosB_x")
// gui.add(infospotPosicionB.position,"y").min(-5000).max(5000).step(0.0001).name("PosB_y")
// gui.add(infospotPosicionB.position,"z").min(-5000).max(5000).step(0.0001).name("PosB_z")

// gui.add(infospotNucleo1.position,"x").min(-5000).max(5000).step(0.0001).name("nucleo1_x")
// gui.add(infospotNucleo1.position,"y").min(-5000).max(5000).step(0.0001).name("nucleo1_y")
// gui.add(infospotNucleo1.position,"z").min(-5000).max(5000).step(0.0001).name("nucleo1_z")

// gui.add(infospotNucleo2.position,"x").min(-5000).max(5000).step(0.0001).name("nucleo2_x")
// gui.add(infospotNucleo2.position,"y").min(-5000).max(5000).step(0.0001).name("nucleo2_y")
// gui.add(infospotNucleo2.position,"z").min(-5000).max(5000).step(0.0001).name("nucleo2_z")

// gui.add(infospotNucleo3.position,"x").min(-5000).max(5000).step(0.0001).name("nucleo3_x")
// gui.add(infospotNucleo3.position,"y").min(-5000).max(5000).step(0.0001).name("nucleo3_y")
// gui.add(infospotNucleo3.position,"z").min(-5000).max(5000).step(0.0001).name("nucleo3_z")




function cambioPosicion(pos)
{
    if(pos=="posA")
    {   
        
        viewer.setPanorama(panoramaLobbyA);
        panoramaLobbyA.add(infospotSomos);
        panoramaLobbyA.add(infospotNucleo1); 
        panoramaLobbyA.add(infospotNucleo2); 
        panoramaLobbyA.add(infospotNucleo3); 
        infospotSomos.position.set( -100, -765.23, -3000 );
      
        infospotNucleo1.position.set( 3975.4445, -793, -50 );
        infospotNucleo2.position.set(  4083.8273, -833, -2440);
        infospotNucleo3.position.set(  3867.0618, -793.3954, -4370.0254);


        panoramaLobbyA.add(grupoEsferaN1)
        panoramaLobbyA.add(grupoEsferaN2)
        panoramaLobbyA.add(grupoEsferaN3)

        grupoEsferaN1.position.set(940.7282,34.7163,1265.8764) 
        grupoEsferaN2.position.set(940.7282,0,-359.8645) 
        grupoEsferaN3.position.set(940.7282,0,-1859.8645) 


        panoramaLobbyA.add(sombraPlanoN1);
        panoramaLobbyA.add(sombraPlanoN2);
        panoramaLobbyA.add(sombraPlanoN3);
        

        sombraPlanoN1.position.set(1900,-500,-13.97)
        sombraPlanoN2.position.set(2006.94,-500,-1200.48)
        sombraPlanoN3.position.set(2093.65,-500,-2328.37)

        textoPlanoN1.rotation.y = -Math.PI/2;
        textoPlanoN2.rotation.y = -0.9752//-Math.PI/2;
        textoPlanoN3.rotation.y = -0.7666;

        
        // textoPlanoN1.position.set(1591.0246,-34.7163,-1300)
        // textoPlanoN2.position.set(1591.0246,-34.7163,-1100)
        // textoPlanoN3.position.set(1591.0246,-34.7163,-950)
       
        textoPlanoN1.position.set(400,0,-1300)
        textoPlanoN2.position.set(500,0,-468)//1591.0246,-34.7163,-1100
        textoPlanoN3.position.set(500,0,182)//1591.0246,-34.7163,-950

        
        viewer.autoHideInfospot = false;


    }else if(pos == "posB")
    {
        
        viewer.setPanorama(panoramaLobbyB);
        
        panoramaLobbyB.add(infospotSomos);
        panoramaLobbyB.add(infospotNucleo1); 
        panoramaLobbyB.add(infospotNucleo2); 
        panoramaLobbyB.add(infospotNucleo3); 
        infospotSomos.position.set( -3069.4332, -1118.5436, 2349.7036 );
        // infospotNucleo1.position.set( 2024.5555, -900, 5000 );
        // infospotNucleo2.position.set( 0, -1000.1609, 4625.7409);
        // infospotNucleo3.position.set( 2349.7036, -901.7782, 1482.6418);
        infospotNucleo1.position.set( 2024.5555, -1300, 5000 );
        infospotNucleo2.position.set( 0, -1400, 4625.7409);
        infospotNucleo3.position.set( 2349.7036, -1200, 1482.6418);

        panoramaLobbyB.add(grupoEsferaN1)
        panoramaLobbyB.add(grupoEsferaN2)
        panoramaLobbyB.add(grupoEsferaN3)
        grupoEsferaN1.position.set(-359,-34.7163,5000) 
        grupoEsferaN2.position.set(-1887,0,4192) 
        grupoEsferaN3.position.set(-359.8645,0,2349.7036) 


        panoramaLobbyB.add(sombraPlanoN1) 
        panoramaLobbyB.add(sombraPlanoN2)
        panoramaLobbyB.add(sombraPlanoN3)      

        sombraPlanoN1.position.set(1226.59,-594.24,3000) 
        sombraPlanoN2.position.set(12.7,-420,1746.82) 
        sombraPlanoN3.position.set(1313.29,-594.23,793.07) 

         viewer.autoHideInfospot = false;

        textoPlanoN1.rotation.y = -2.75;
        textoPlanoN2.rotation.y = -Math.PI;
        textoPlanoN3.rotation.y = -2.132;

        // textoPlanoN1.position.set(1807.79,-34.7163,-1552.0745);
        // textoPlanoN2.position.set(1857.7899,-34.7163,-1552.0745);
        // textoPlanoN3.position.set(1531.0248,-34.7163,-1552.0745);

        // textoPlanoN1.position.set(1070,10,-3286);
        // textoPlanoN2.position.set(1920,0,-2635);
        // textoPlanoN3.position.set(1157, 5,-1768);

        textoPlanoN1.position.set(1374,-468,-2527);
        textoPlanoN2.position.set(1900,-450,-2093);
        textoPlanoN3.position.set(500, -330,182);
    }
}

const camaraRot={ 
    x:0, y:0,z:0
}
//Se construye viewer 360
function setupPanolens () {
    // viewer = new PANOLENS.ImagePanorama(panorama);
    viewer = new PANOLENS.Viewer( 
        {
             container: mainContainer,
             //  controlButtons: deteccionIphone() ? controlesIos:controles,
             cameraFov:70,
             autoHideInfospot:false,
             renderer: new THREE.WebGLRenderer({antialias:true})

            //  initialLookAt:new THREE.Vector3(Math.PI/4,1,0.0)
        } 
    );
    viewer.add( panoramaLobbyA );
    viewer.add(panoramaLobbyB);
    viewer.toggleControlBar();

   // viewer.setPanorama(panoramaLobbyB);
    // viewer.tweenControlCenter( new THREE.Vector3(camaraRot.x, 0, 0), 0 );
    // viewer.initialLookAt(new THREE.Vector3(0,1,0));
    //  viewer.initialLookAt = new THREE.Vector3(0.5,0,0);

    viewer.OrbitControls.noZoom = true;
   
}

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


var botonCerrar = document.getElementById("botonCerrar");
console.log(botonCerrar);
botonCerrar.addEventListener('click',()=>
{
    console.log("cerrar");
    cambiarA("home");
    window.location.href = "home.html";


})

botonCerrarTextoSomos.addEventListener('click',()=>{
    console.log("cerrando texto");
    gsap.fromTo(panelTextoSomos,{opacity:1},{duration:0.5,opacity:0}).eventCallback('onComplete',()=>{

        panelTextoSomos.style.visibility = "hidden";
        viewer.enableControl();
    })



})

function cambiarA(dir){

  
    let direccionFinal;
    if(dir == "home")
    {
        direccionFinal = "home.html"
    }
    if(dir == "nucleo1"){
        direccionFinal = "nucleo1.html"


    }
    else if(dir =="nucleo2")
    {
        direccionFinal = "nucleo2.html"
    }
    else if(dir =="nucleo3")
    {
        direccionFinal = "nucleo3.html"
    }
    else if(dir =="auditorio")
    {
        direccionFinal = "auditorio.html"

    }else{
        console.log("no se encontro la ruta") 
        return;
    }

    let barraCarga = document.getElementById("barraCarga");
    barraCarga.parentNode.removeChild(barraCarga);
    document.querySelector(".panelCarga").style.opacity = 1.0;    
    var id = setInterval(frame, 1001);
    function frame(){

            window.location.href = direccionFinal;
    }
}

const pointlight = new THREE.PointLight( 0xFFFFFF, 1000.8 );
pointlight.position.set( 1900,0,-1300 );
panoramaLobbyA.add( pointlight );
// gui.add(pointlight.position,"x").min(-5000).max(5000).step(0.001).name("luz x");
// gui.add(pointlight.position,"y").min(-5000).max(5000).step(0.001).name("luz y");
// gui.add(pointlight.position,"z").min(-5000).max(5000).step(0.001).name("luz z");
        // const directionalLight = new THREE.DirectionalLight(0xffffff, 2.3)
        // panoramaLobbyA.add(directionalLight)
const textoGeometry =new THREE.PlaneGeometry(1.3,1,2);

//NUCLEO 1

const imagenN1 = new Image()
const texturaN1 = new THREE.Texture(imagenN1)
imagenN1.addEventListener('load', () =>
{
    texturaN1.needsUpdate = true
})
imagenN1.src = 'src/img/Esferas_Texturas/nucleo01_low.jpg'

const materialEsferaN1 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:texturaN1,
    side: THREE.BackSide,
    transparent: true,
    opacity:0.9
})//side:THREE.DoubleSide
const esferaGeometry =new THREE.SphereGeometry( 500, 32, 32);

const esferaN1 = new THREE.Mesh( esferaGeometry,materialEsferaN1)
esferaN1.position.z = 1000;
esferaN1.position.set(1900,0,-1300)

//TEXTO Nucleo1
const imageT1 = new Image()
const textureT1 = new THREE.Texture(imageT1)
imageT1.addEventListener('load', () =>
{
    textureT1.needsUpdate = true
})
imageT1.src = 'src/img/Esferas_Texturas/TITULO_01.png'

// const materialTextoN1 = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     map:textureT1,
//     alphaMap:textureT1,
//     side: THREE.Front,
//     transparent: true
    
// })

const materialTextoN1 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:textureT1,
    alphaMap:textureT1,
    side: THREE.Front,
    transparent: true
    
})
// materialTextoN1.blendDst = THREE.OneMinusSrcAlphaFactor
materialTextoN1.depthWrite = false;


const textoPlanoN1 = new THREE.Mesh(textoGeometry,materialTextoN1)
textoPlanoN1.position.set(400,-330,-1300)//400,0,-1300
textoPlanoN1.scale.set(300,150,1);//500,350,1
textoPlanoN1.rotation.y = -Math.PI/2;


const map = new THREE.TextureLoader().load( 'src/img/Esferas_Texturas/LAS_VOCES_DETRAS_DE_LA_SERIE_2.png' );
const material = new THREE.SpriteMaterial( { map: map, color: 0xffffff } );

// const sprite = new THREE.Sprite( material );
// sprite.scale.set(10, 10, 1)
// sprite.position.set(1591.0246,-34.7163,-1300)
// gui.add( sprite.position,"x").min(-50).max(50).step(0.0001).name("spriteX")
// gui.add( sprite.position,"y").min(-50).max(50).step(0.0001).name("spriteY")
// gui.add( sprite.position,"z").min(-50).max(50).step(0.0001).name("spriteZ")

// panoramaLobbyA.add(textoPlanoN2);

// const sombraPlanoN2 = new THREE.Mesh(sombraGeometry,sombraEsfera)
// sombraPlanoN2.position.set(1900,-500,-1335)
// sombraPlanoN2.scale.set(500,500,1);
// sombraPlanoN2.rotation.x = -Math.PI/2;
// panoramaLobbyA.add(sombraPlanoN2);

const grupoEsferaN1 = new THREE.Group();
grupoEsferaN1.add( esferaN1 );
grupoEsferaN1.add(textoPlanoN1 );
// grupoEsferaN1.add(sprite);

grupoEsferaN1.position.set(940.7282,34.7163,1265.8764) 
// esferaN2.scale.multiplyScalar(15);
panoramaLobbyA.add(grupoEsferaN1);



//NUCLEO 2
const imageN2 = new Image()
const texturaN2 = new THREE.Texture(imageN2)
imageN2.addEventListener('load', () =>
{
    texturaN2.needsUpdate = true
})
imageN2.src = 'src/img/Esferas_Texturas/nucleo02_low.jpg'

const materialEsferaN2 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:texturaN2,
    side: THREE.BackSide,
    transparent: true,
    opacity:0.8
})//side:THREE.DoubleSide
// const esferaGeometry =new THREE.SphereGeometry( 500, 32, 32);

const esferaN2 = new THREE.Mesh( esferaGeometry,materialEsferaN2)
esferaN2.position.z = 1000;
esferaN2.position.set(1900,0,-1299.9999)

//TEXTO Nucleo2
const imageT2 = new Image()
const textureT2 = new THREE.Texture(imageT2)
imageT2.addEventListener('load', () =>
{
    textureT2.needsUpdate = true
})
imageT2.src = 'src/img/Esferas_Texturas/TITULO_02.png'

const materialTextoN2 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:textureT2,
    alphaMap:textureT2,
    side: THREE.Front,
    transparent: true
    
})
materialTextoN2.blending = THREE.CustomBlending;
// materialTextoN2.blendDst = THREE.MultiplyBlending;
materialTextoN2.depthWrite = false;


const textoPlanoN2 = new THREE.Mesh(textoGeometry,materialTextoN2)
textoPlanoN2.position.set(500,-330,-468)//1591.0246,-34.7163,-1100
textoPlanoN2.scale.set(300,200,1);
textoPlanoN2.rotation.y = -0.9752//-Math.PI/2;
// panoramaLobbyA.add(textoPlanoN2);

// const sombraPlanoN2 = new THREE.Mesh(sombraGeometry,sombraEsfera)
// sombraPlanoN2.position.set(1900,-500,-1335)
// sombraPlanoN2.scale.set(500,500,1);
// sombraPlanoN2.rotation.x = -Math.PI/2;
// panoramaLobbyA.add(sombraPlanoN2);

const grupoEsferaN2 = new THREE.Group();
grupoEsferaN2.add( esferaN2 );
grupoEsferaN2.add(textoPlanoN2 );
grupoEsferaN2.position.set(940.7282,0,-359.8645) 
// esferaN2.scale.multiplyScalar(15);
panoramaLobbyA.add(grupoEsferaN2);




//NUCLEO 3
const imageN3 = new Image()
const texturaN3 = new THREE.Texture(imageN3)
imageN3.addEventListener('load', () =>
{
    texturaN3.needsUpdate = true
})
imageN3.src = 'src/img/Esferas_Texturas/CARTEL_MEDIO_FOTOS.jpg'
texturaN3.wrapS = THREE.RepeatWrapping;
texturaN3.wrapT = THREE.RepeatWrapping;
texturaN3.repeat.set( 3, 1 );

const materialEsferaN3 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:texturaN3,
    side: THREE.BackSide,
    transparent: true,
    opacity:0.9
})//side:THREE.DoubleSide
// const esferaGeometry =new THREE.SphereGeometry( 500, 32, 32);

const esferaN3 = new THREE.Mesh( esferaGeometry,materialEsferaN3)
esferaN3.position.z = 1000;
esferaN3.position.set(1900,0,-1335)

//TEXTO Nucleo3
const imageT3 = new Image()
const textureT3 = new THREE.Texture(imageT3)
imageT3.addEventListener('load', () =>
{
    textureT3.needsUpdate = true
})
imageT3.src = 'src/img/Esferas_Texturas/TITULO_03.png'

const materialTextoN3 = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map:textureT3,
    alphaMap:textureT3,
    side: THREE.Front,
    transparent: true
    
})
// materialTextoN3.blendDst = THREE.OneMinusSrcAlphaFactor
materialTextoN3.depthWrite = false;


const textoPlanoN3 = new THREE.Mesh(textoGeometry,materialTextoN3)
textoPlanoN3.position.set(500,-330,182)//1591.0246,-34.7163,-950
textoPlanoN3.scale.set(300,150,1);
textoPlanoN3.rotation.y = -0.7666;
// panoramaLobbyA.add(textoPlanoN3);

// const sombraPlanoN3 = new THREE.Mesh(sombraGeometry,sombraEsfera)
// sombraPlanoN3.position.set(1900,-500,-1335)
// sombraPlanoN3.scale.set(500,500,1);
// sombraPlanoN3.rotation.x = -Math.PI/2;
// panoramaLobbyA.add(sombraPlanoN3);

const grupoEsferaN3 = new THREE.Group();
grupoEsferaN3.add( esferaN3 );
grupoEsferaN3.add(textoPlanoN3 );
grupoEsferaN3.position.set(940.7282,0,-1859.8645) 
// esferaN3.scale.multiplyScalar(15);
panoramaLobbyA.add(grupoEsferaN3);


//SOMBRA TEXTURA
const imageSombra = new Image()
const textureSombra = new THREE.Texture(imageSombra)
imageSombra.addEventListener('load', () =>
{
    textureSombra.needsUpdate = true
})
imageSombra.src = 'src/img/Esferas_Texturas/sombra_esferas.png'


const sombraEsferaMAT = new THREE.MeshBasicMaterial({
    color:0xfffffff,
    map:textureSombra,
    side: THREE.DoubleSide, 
    transparent: true,
    opacity:0.5
    })//side:THREE.DoubleSide
const sombraGeometry =new THREE.PlaneGeometry(1,1,2);

const sombraPlanoN1 = new THREE.Mesh(sombraGeometry,sombraEsferaMAT)
sombraPlanoN1.position.set(1900,-500,-13.97)
sombraPlanoN1.scale.set(500,500,1);
sombraPlanoN1.rotation.x = -Math.PI/2;
panoramaLobbyA.add(sombraPlanoN1);

const sombraPlanoN2 = new THREE.Mesh(sombraGeometry,sombraEsferaMAT)
sombraPlanoN2.position.set(2006.94,-500,-1200.48)
sombraPlanoN2.scale.set(500,500,1);
sombraPlanoN2.rotation.x = -Math.PI/2;
panoramaLobbyA.add(sombraPlanoN2);


const sombraPlanoN3 = new THREE.Mesh(sombraGeometry,sombraEsferaMAT)
sombraPlanoN3.position.set(2093.65,-500,-2328.37)
sombraPlanoN3.scale.set(500,500,1);
sombraPlanoN3.rotation.x = -Math.PI/2;
panoramaLobbyA.add(sombraPlanoN3);


// // const geometry = new THREE.SphereBufferGeometry( 5, 32, 32 );
// // const material = new THREE.MeshBasicMaterial( {color: 0xffff000, wireframe:true} );
// // const sphere = new THREE.Mesh( geometry, material );

// // panoramaLobby.add(sphere);

// // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
// // panoramaLobby.add(directionalLight)

// gui.add(grupoEsferaN1.position,"x").min(-5000).max(5000).step(0.0001).name("esferaN1X")
// gui.add(grupoEsferaN1.position,"y").min(-5000).max(5000).step(0.0001).name("esferaN1Y")
// gui.add(grupoEsferaN1.position,"z").min(-5000).max(5000).step(0.0001).name("esferaN1Z")
// gui.add(textoPlanoN1.rotation,"x").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN1X_rot")
// gui.add(textoPlanoN1.rotation,"y").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN1Y_rot")
// gui.add(textoPlanoN1.rotation,"z").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN1Z_rot")
gui.add(textoPlanoN1.position,"x").min(-5000).max(5000).step(0.0001).name("textoPlanoN1X")
gui.add(textoPlanoN1.position,"y").min(-5000).max(5000).step(0.0001).name("textoPlanoN1Y")
gui.add(textoPlanoN1.position,"z").min(-5000).max(5000).step(0.0001).name("textoPlanoN1Z")
gui.add(textoPlanoN1.scale,"x").min(-500).max(500).step(0.01).name("textoPlanoN1Z")
gui.add(textoPlanoN1.scale,"y").min(-500).max(500).step(0.01).name("textoPlanoN1Z")

// gui.add(grupoEsferaN2.position,"x").min(-5000).max(5000).step(0.0001).name("esferaN2X")
// gui.add(grupoEsferaN2.position,"y").min(-5000).max(5000).step(0.0001).name("esferaN2Y")
// gui.add(grupoEsferaN2.position,"z").min(-5000).max(5000).step(0.0001).name("esferaN2Z")
gui.add(textoPlanoN2.position,"x").min(-5000).max(5000).step(0.0001).name("textoPlanoN2X")
gui.add(textoPlanoN2.position,"y").min(-5000).max(5000).step(0.0001).name("textoPlanoN2Y")
gui.add(textoPlanoN2.position,"z").min(-5000).max(5000).step(0.0001).name("textoPlanoN2Z")
// gui.add(textoPlanoN2.rotation,"x").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN2X_rot")
// gui.add(textoPlanoN2.rotation,"y").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN2Y_rot")
// gui.add(textoPlanoN2.rotation,"z").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN2Z_rot")

// gui.add(grupoEsferaN3.position,"x").min(-5000).max(5000).step(0.0001).name("esferaN3X")
// gui.add(grupoEsferaN3.position,"y").min(-5000).max(5000).step(0.0001).name("esferaN3Y")
// gui.add(grupoEsferaN3.position,"z").min(-5000).max(5000).step(0.0001).name("esferaN3Z")
// gui.add(textoPlanoN3.rotation,"x").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN3X_rot")
// gui.add(textoPlanoN3.rotation,"y").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN3Y_rot")
// gui.add(textoPlanoN3.rotation,"z").min(-Math.PI).max(Math.PI).step(0.0001).name("textoPlanoN3Z_rot")
gui.add(textoPlanoN3.position,"x").min(-5000).max(5000).step(0.0001).name("textoPlanoN3X_pos")
gui.add(textoPlanoN3.position,"y").min(-5000).max(5000).step(0.0001).name("textoPlanoN3Y_pos")
gui.add(textoPlanoN3.position,"z").min(-5000).max(5000).step(0.0001).name("textoPlanoN3Z_pos")
// gui.add(esferaN3.position,"x").min(-5000).max(5000).step(0.0001).name("esferaN3X")
// gui.add(esferaN3.position,"y").min(-5000).max(5000).step(0.0001).name("esferaN3Y")
// gui.add(esferaN3.position,"z").min(-5000).max(5000).step(0.0001).name("esferaN3Z")
// // gui.add(sombraPlanoN2.rotation,"x").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRX")
// // gui.add(sombraPlanoN2.rotation,"y").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRY")
// // gui.add(sombraPlanoN2.rotation,"z").min(-Math.PI).max(Math.PI).step(0.0001).name("planoRZ")
// // gui.add(sombraPlanoN2.position,"x").min(-500).max(500).step(0.01).name("positionPX")
// // gui.add(sombraPlanoN2.position,"y").min(-500).max(500).step(0.01).name("positionPY")
// // gui.add(sombraPlanoN2.position,"z").min(-500).max(500).step(0.01).name("positionPZ")
// // gui.add(sombraPlanoN2.scale,"x").min(-50).max(500).step(0.01).name("positionSX")
// // gui.add(sombraPlanoN2.scale,"y").min(-50).max(500).step(0.01).name("positionSY")
// // gui.add(sombraPlanoN2.scale,"z").min(-50).max(500).step(0.01).name("positionSZ")
// gui.add(sombraPlanoN1.position,"x").min(-5000).max(3000).step(0.01).name("planoN1_PX")
// gui.add(sombraPlanoN1.position,"y").min(-5000).max(3000).step(0.01).name("planoN1_PY")
// gui.add(sombraPlanoN1.position,"z").min(-5000).max(3000).step(0.01).name("planoN1_PZ")
// gui.add(sombraPlanoN2.position,"x").min(-5000).max(3000).step(0.01).name("planoN2_PX")
// gui.add(sombraPlanoN2.position,"y").min(-5000).max(3000).step(0.01).name("planoN2_PY")
// gui.add(sombraPlanoN2.position,"z").min(-5000).max(3000).step(0.01).name("planoN2_PZ")
// gui.add(sombraPlanoN3.position,"x").min(-5000).max(3000).step(0.01).name("planoN3_PX")
// gui.add(sombraPlanoN3.position,"y").min(-5000).max(3000).step(0.01).name("planoN3_PY")
// gui.add(sombraPlanoN3.position,"z").min(-5000).max(3000).step(0.01).name("planoN3_PZ")




gsap.to(esferaN1.scale,{duration:5,y:0.9,x:0.9,z:0.9,repeat:-1,yoyo:true,ease:"ease.sin"})
gsap.to(sombraPlanoN1.scale,{duration:5,y:400,x:400,repeat:-1,yoyo:true})

// gsap.to(esferaN2.position,{duration:2,y:50,repeat:-1,yoyo:true,ease:"ease.sin"})
gsap.to(esferaN2.scale,{duration:4,y:0.9,x:0.9,z:0.9,repeat:-1,yoyo:true,ease:"ease.sin"})
gsap.to(sombraPlanoN2.scale,{duration:4,y:400,x:400,repeat:-1,yoyo:true})


gsap.to(esferaN3.scale,{duration:6,y:0.9,x:0.9,z:0.9,repeat:-1,yoyo:true,ease:"ease.sin"})
gsap.to(sombraPlanoN3.scale,{duration:6,y:400,x:400,repeat:-1,yoyo:true})