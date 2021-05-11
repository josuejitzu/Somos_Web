


const panoramaN3 = new PANOLENS.ImagePanorama( 'src/img/360/nucleo03_02.jpg' );
panoramaN3.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, 0, 0), 0 );
  } );
  panoramaN3.addEventListener('progress', function(e){
    // hide the loader
    var pro = e.progress.loaded / e.progress.total;
    console.log(pro)
    bar1.set(pro*100);

    // ocultarLoad();

 });
  panoramaN3.addEventListener('load', function(e){
    // hide the loader
    ocultarLoad();

 });
 const panoramaN3_B = new PANOLENS.ImagePanorama( 'src/img/360/nucleo03_B_03.jpg' );
panoramaN3.addEventListener('enter-fade-start',function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, 0, 0), 0 );

})


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

const botonCerrarPanelFotos = document.querySelector(".botonCerrarPanelFotos");
const panelFotos = document.querySelector(".panelFotos");
const botonCerrarPanelInformacion = document.querySelector(".botonCerrarPanelBanner")
const panelBanner = document.querySelector(".panelBanner");
const botonCerrarPanelVideo = document.querySelector(".botonCerrarPanelVideo")
const panelVideo = document.querySelector(".panelVideo");

const player = new Plyr(document.querySelector('.player'));

const boton_video_1 = document.querySelector(".boton_video1");
const boton_video_2 = document.querySelector(".boton_video2");
const boton_video_3 = document.querySelector(".boton_video3");
const boton_video_4 = document.querySelector(".boton_video4");
const boton_video_5 = document.querySelector(".boton_video5");
const boton_fotografias_1 = document.querySelector(".botonFotografias");

//cultura, arquitectura, moda, bebida, quince, musica,ganadera,popular
let temaSeleccionado = "cultura";




///VIDEOS en videosN3.js

var infoSpotSize = 300;


var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton.png?v=123456782");
infospotSomos.position.set( 4500, -1300, -3210 );
// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaN3.add(infospotSomos);

const infospotPosicionB  = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton.png?v=123456783");
infospotPosicionB.position.set( 5000, -1300, -900 );
// infospotPosicionB.addHoverText( 'SOMOS' );
infospotPosicionB.addEventListener('click',()=>{
    console.log("spot posicion B")
    cambiarPosicion("posB");
    
})
panoramaN3.add(infospotPosicionB);


const infospotPosicionA = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton.png?v=123456784");
infospotPosicionA.position.set( -296, -1300, 5000 );
// infospotPosicionA.addHoverText( 'SOMOS' );
infospotPosicionA.addEventListener('click',()=>{
    console.log("spot posicion A")
    cambiarPosicion("posA");
    
})
panoramaN3_B.add(infospotPosicionA);


const panelGaleria = document.querySelector(".panelGaleria");

// gsap.to(infospotSomos.position,{delay:2,duration:1,y:10, repeat:-1}).eventCallback('onComplete',()=>{
//     infospotSomos.position.set( 1900, -1860, -5000)
// });


//DEBUG infospots
 const gui = new dat.GUI();
 gui.close();

// gui.add(infospotSomos.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
// gui.add(infospotSomos.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
// gui.add(infospotSomos.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotPosicionB.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
// gui.add(infospotPosicionB.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
// gui.add(infospotPosicionB.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotPosicionA.position,"x").min(-5000).max(5000).step(0.0001).name("posicionA_x")
// gui.add(infospotPosicionA.position,"y").min(-5000).max(5000).step(0.0001).name("posicionA_y")
// gui.add(infospotPosicionA.position,"z").min(-5000).max(5000).step(0.0001).name("posicionA_z")

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
    viewer.add( panoramaN3 );
    viewer.add(panoramaN3_B);
    viewer.setPanorama(panoramaN3);
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







// const gui = new dat.GUI({width:500});
// gui.close();




botonCerrarPanelFotos.addEventListener('click',()=>{
    panelFotos.style.visibility ="hidden";
})
botonCerrarPanelInformacion.addEventListener('click',()=>{
    gsap.to(panelBanner,{duration:0.5,opacity:0}).eventCallback('onComplete',()=>{

        panelBanner.style.visibility ="hidden";
    });

})

botonCerrarPanelVideo.addEventListener('click',()=>{
    panelVideo.style.visibility ="hidden";
})

function abrirPanelVideo(){
    callarMusica();
}




//BANNERS
const rutaBanners = "src/img/nucleo_03/";
const cuadroGeometry =new THREE.PlaneGeometry(1,1,2);

const banner_quince_imagen = new Image(), banner_arquitectura_imagen = new Image(), banner_moda_imagen = new Image(),
     banner_bebidas_imagen = new Image(), banner_grafica_imagen = new Image(), banner_musica_imagen = new Image(),
     banner_cultura_imagen = new Image(),banner_ganadera_imagen = new Image();
const texturaQuince = new THREE.Texture(banner_quince_imagen), textura_Arquitectura = new THREE.Texture(banner_arquitectura_imagen);
const texturaModa = new THREE.Texture(banner_moda_imagen), textura_Bebidas = new THREE.Texture(banner_bebidas_imagen);
const texturaGrafica = new THREE.Texture(banner_grafica_imagen), textura_Musica = new THREE.Texture(banner_musica_imagen);
const texturaCultura = new THREE.Texture(banner_cultura_imagen), textura_Ganadera = new THREE.Texture(banner_ganadera_imagen);
// banner_1_imagen.addEventListener('load',()=>{
//     texturaQuince.needsUpdate = true;
// })
banner_arquitectura_imagen.addEventListener('load',()=>{textura_Arquitectura.needsUpdate = true;})
banner_musica_imagen.addEventListener('load',()=>{ textura_Musica.needsUpdate = true})
banner_cultura_imagen.addEventListener('load',()=>{ texturaCultura.needsUpdate = true})
banner_ganadera_imagen.addEventListener('load',()=>{ textura_Ganadera.needsUpdate = true})
banner_moda_imagen.addEventListener('load',()=>{ texturaModa.needsUpdate = true})

banner_arquitectura_imagen.src = rutaBanners + "banner_arquitectura.jpg";
banner_musica_imagen.src = rutaBanners + "banner_musica.jpg";
banner_cultura_imagen.src = rutaBanners + "banner_cultura.jpg";
banner_ganadera_imagen.src = rutaBanners + "banner_ganadera.jpg";
banner_moda_imagen.src = rutaBanners + "banner_moda.jpg";

const banner_quince_MAT =   new THREE.MeshBasicMaterial({color: 0x0000ff,side:THREE.Front})
const banner_Arquitectura_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,map:textura_Arquitectura,side:THREE.Front})
const banner_Moda_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,map:texturaModa,side:THREE.Front})
const banner_Bebidas_MAT =   new THREE.MeshBasicMaterial({color: 0xff0000,side:THREE.Front})
const banner_Grafica_MAT =   new THREE.MeshBasicMaterial({color: 0x00ff00,side:THREE.Front})
const banner_Musica_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,map:textura_Musica,side:THREE.Front})
const banner_Cultura_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,map:texturaCultura,side:THREE.Front})
const banner_Ganadera_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,map:textura_Ganadera,side:THREE.Front})




const hilo_MAT = new THREE.MeshBasicMaterial({color: 0x000000,side:THREE.DoubleSide});


const banner_quince =       new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Arquitectura = new THREE.Mesh(cuadroGeometry,banner_Arquitectura_MAT);
const banner_Moda =         new THREE.Mesh(cuadroGeometry,banner_Moda_MAT);
const banner_Bebidas = new THREE.Mesh(cuadroGeometry,banner_Bebidas_MAT);
const banner_Grafica = new THREE.Mesh(cuadroGeometry,banner_Grafica_MAT);
const banner_Musica = new THREE.Mesh(cuadroGeometry,banner_Musica_MAT);
const banner_Cultura = new THREE.Mesh(cuadroGeometry,banner_Cultura_MAT);
const banner_Ganadero = new THREE.Mesh(cuadroGeometry,banner_Ganadera_MAT);

const hilo_Banner_Quince = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Arquitectura = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Moda = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Bebidas = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Grafica = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Musica = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Cultura = new THREE.Mesh(cuadroGeometry,hilo_MAT);
const hilo_Banner_Ganadero = new THREE.Mesh(cuadroGeometry,hilo_MAT);
// panoramaN3.add(banner_quince)

const bannerGroup = new THREE.Group();
bannerGroup.add(banner_quince);
bannerGroup.add(banner_Arquitectura);
bannerGroup.add(banner_Moda);
bannerGroup.add(banner_Bebidas);
bannerGroup.add(banner_Grafica);
bannerGroup.add(banner_Musica);
bannerGroup.add(banner_Cultura);
bannerGroup.add(banner_Ganadero);

// bannerGroup.add(hilo_Banner_Quince);
// bannerGroup.add(hilo_Banner_Arquitectura);
// bannerGroup.add(hilo_Banner_Moda);
// bannerGroup.add(hilo_Banner_Bebidas);
// bannerGroup.add(hilo_Banner_Grafica);
// bannerGroup.add(hilo_Banner_Musica);
// bannerGroup.add(hilo_Banner_Cultura);
// bannerGroup.add(hilo_Banner_Ganadero);


// panoramaN3_B.add(bannerGroup);
bannerGroup.position.set(30,22.5,0)//(45,20,-3.47);
bannerGroup.rotation.set(0,-1.72,0);

const sizeBanner={ x:7,y:25}
const sizeHilo={x:0.2,y:15}
const posY=19

banner_quince.position.set(4,0,-17)
banner_quince.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_quince.rotation.set(0,-0.23,0);
hilo_Banner_Quince.position.set(-12,posY,14.5);
hilo_Banner_Quince.scale.set(sizeHilo.x,sizeHilo.y,1);
hilo_Banner_Quince.rotation.set(0,-0.23,0);

banner_Arquitectura.position.set(-8,0,-17)
banner_Arquitectura.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Arquitectura.rotation.set(0,0.66,0);
hilo_Banner_Arquitectura.position.set(-14,posY,-1.5);
hilo_Banner_Arquitectura.scale.set(sizeHilo.x,sizeHilo.y,1);
hilo_Banner_Arquitectura.rotation.set(0,0.66,0);

banner_Moda.position.set(-13,0,-1)
banner_Moda.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Moda.rotation.set(0,0.32,0);
hilo_Banner_Moda.position.set(-10.3,posY,-10.5);
hilo_Banner_Moda.scale.set(sizeHilo.x,sizeHilo.y,1);
hilo_Banner_Moda.rotation.set(0,-0.23,0);

banner_Bebidas.position.set(22,0,-6.5)
banner_Bebidas.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Bebidas.rotation.set(0,0,0);
hilo_Banner_Bebidas.position.set(5,posY,11.5);
hilo_Banner_Bebidas.scale.set(0.2,15,1);
hilo_Banner_Bebidas.rotation.set(0,0,0);


banner_Grafica.position.set(18,0,-22)
banner_Grafica.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Grafica.rotation.set(0,0.25,0);
hilo_Banner_Grafica.position.set(10,posY,-5.5);
hilo_Banner_Grafica.scale.set(0.2,15,1);
hilo_Banner_Grafica.rotation.set(0,0.25,0);

banner_Musica.position.set(-10,0,14.5)
banner_Musica.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Musica.rotation.set(0,0.18,0);
hilo_Banner_Musica.position.set(15,posY,-10.5);
hilo_Banner_Musica.scale.set(0.2,15,1);
hilo_Banner_Musica.rotation.set(0,0.25,0);

banner_Cultura.position.set(20,0,9)
banner_Cultura.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Cultura.rotation.set(0,-0.36,0);
hilo_Banner_Cultura.position.set(20,posY,2.5);
hilo_Banner_Cultura.scale.set(0.2,15,1);
hilo_Banner_Cultura.rotation.set(0,-0.36,0);

banner_Ganadero.position.set(4,0,12)
banner_Ganadero.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Ganadero.rotation.set(0,0.39,0);

gui.add(bannerGroup.position,"x").min(-500).max(500).step(0.01).name("positionGroupX")
gui.add(bannerGroup.position,"y").min(-500).max(500).step(0.01).name("positionGroupY")
gui.add(bannerGroup.position,"z").min(-500).max(500).step(0.01).name("positionGroupZ")
gui.add(bannerGroup.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotationGroupY")

gui.add(banner_quince.position,"x").min(-500).max(500).step(0.01).name("1Quince_positionX")
gui.add(banner_quince.position,"y").min(-500).max(500).step(0.01).name("1Quince_positionY")
gui.add(banner_quince.position,"z").min(-500).max(500).step(0.01).name("1Quince_positionZ")
// gui.add(banner_quince.scale,"x").min(-50).max(50).step(0.01).name("1Quince_scalaX")
// gui.add(banner_quince.scale,"y").min(-50).max(50).step(0.01).name("1Quince_scalaY")
// // gui.add(banner_quince.scale,"z").min(-50).max(50).step(0.01).name("positionZ")
// // gui.add(banner_quince.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_quince.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("1Quince_rotacionY")
// // gui.add(banner_quince.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")



gui.add(banner_Arquitectura.position,"x").min(-500).max(500).step(0.01).name("2Arquitectura_positionX")
gui.add(banner_Arquitectura.position,"y").min(-500).max(500).step(0.01).name("2Arquitectura_positionY")
gui.add(banner_Arquitectura.position,"z").min(-500).max(500).step(0.01).name("2Arquitectura_positionZ")
// gui.add(banner_Arquitectura.scale,"x").min(-50).max(50).step(0.01).name("2Arquitectura_scalaX")
gui.add(banner_Arquitectura.scale,"y").min(-50).max(50).step(0.01).name("2Arquitectura_scalaY")
// gui.add(banner_Arquitectura.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("2Arquitectura_rotacionY")

gui.add(banner_Moda.position,"x").min(-500).max(500).step(0.01).name("3Moda_positionX")
gui.add(banner_Moda.position,"y").min(-500).max(500).step(0.01).name("3Moda_positionY")
gui.add(banner_Moda.position,"z").min(-500).max(500).step(0.01).name("3Moda_positionZ")
// gui.add(banner_Moda.scale,"x").min(-50).max(50).step(0.01).name("3Moda_scalaX")
gui.add(banner_Moda.scale,"y").min(-50).max(50).step(0.01).name("3Moda_scalaY")
// gui.add(banner_Moda.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("3Moda_rotacionY")


gui.add(banner_Bebidas.position,"x").min(-500).max(500).step(0.01).name("4Bebidas_positionX")
gui.add(banner_Bebidas.position,"y").min(-500).max(500).step(0.01).name("4Bebidas_positionY")
gui.add(banner_Bebidas.position,"z").min(-500).max(500).step(0.01).name("4Bebidas_positionZ")
// gui.add(banner_Bebidas.scale,"x").min(-50).max(50).step(0.01).name("4Bebidas_scalaX")
gui.add(banner_Bebidas.scale,"y").min(-50).max(50).step(0.01).name("4Bebidas_scalaY")
// gui.add(banner_Bebidas.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("4Bebidas_rotacionY")

gui.add(banner_Grafica.position,"x").min(-500).max(500).step(0.01).name("5Grafica_positionX")
gui.add(banner_Grafica.position,"y").min(-500).max(500).step(0.01).name("5Grafica_positionY")
gui.add(banner_Grafica.position,"z").min(-500).max(500).step(0.01).name("5Grafica_positionZ")
// gui.add(banner_Grafica.scale,"x").min(-50).max(50).step(0.01).name("5Grafica_scalaX")
gui.add(banner_Grafica.scale,"y").min(-50).max(50).step(0.01).name("5Grafica_scalaY")
// gui.add(banner_Grafica.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("5Grafica_rotacionY")

gui.add(banner_Musica.position,"x").min(-500).max(500).step(0.01).name("6Musica_positionX")
gui.add(banner_Musica.position,"y").min(-500).max(500).step(0.01).name("6Musica_positionY")
gui.add(banner_Musica.position,"z").min(-500).max(500).step(0.01).name("6Musica_positionZ")
// gui.add(banner_Musica.scale,"x").min(-50).max(50).step(0.01).name("6Musica_scalaX")
gui.add(banner_Musica.scale,"y").min(-50).max(50).step(0.01).name("6Musica_scalaY")
// gui.add(banner_Musica.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("6Musica_rotacionY")

gui.add(banner_Cultura.position,"x").min(-500).max(500).step(0.01).name("7Cultura_positionX")
gui.add(banner_Cultura.position,"y").min(-500).max(500).step(0.01).name("7Cultura_positionY")
gui.add(banner_Cultura.position,"z").min(-500).max(500).step(0.01).name("7Cultura_positionZ")
// gui.add(banner_Cultura.scale,"x").min(-50).max(50).step(0.01).name("7Cultura_scalaX")
gui.add(banner_Cultura.scale,"y").min(-50).max(50).step(0.01).name("7Cultura_scalaY")
// gui.add(banner_Cultura.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("7Cultura_rotacionY")

gui.add(banner_Ganadero.position,"x").min(-500).max(500).step(0.01).name("8Ganadero_positionX")
gui.add(banner_Ganadero.position,"y").min(-500).max(500).step(0.01).name("8Ganadero_positionY")
gui.add(banner_Ganadero.position,"z").min(-500).max(500).step(0.01).name("8Ganadero_positionZ")
gui.add(banner_Ganadero.scale,"x").min(-50).max(50).step(0.01).name("8Ganadero_scalaX")
gui.add(banner_Ganadero.scale,"y").min(-50).max(50).step(0.01).name("8Ganadero_scalaY")
gui.add(banner_Ganadero.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("8Ganad_rotacionY")


// gui.add(hilo_Banner_Bebidas.position,"x").min(-500).max(500).step(0.01).name("7Cultura_positionX")
// gui.add(hilo_Banner_Bebidas.position,"y").min(-500).max(500).step(0.01).name("7Cultura_positionY")
// gui.add(hilo_Banner_Bebidas.position,"z").min(-500).max(500).step(0.01).name("7Cultura_positionZ")
// gui.add(hilo_Banner_Bebidas.scale,"x").min(-50).max(50).step(0.01).name("7Cultura_scalaX")
// gui.add(hilo_Banner_Bebidas.scale,"y").min(-50).max(50).step(0.01).name("7Cultura_scalaY")
// gui.add(hilo_Banner_Bebidas.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("7Cultura_rotacionY")

//Animacion Banners
const multiplicadorSize = 1.10;
const duracionAnimacionZoom = 0.3;
banner_quince.addEventListener("hoverenter",()=>{
    gsap.to(banner_quince.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
        // banner_quince.scale.set(sizeBanner.x * multiplicadorSize,sizeBanner.y *multiplicadorSize,1)

})
banner_quince.addEventListener("hoverleave",()=>{
    gsap.to(banner_quince.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    // banner_quince.scale.set(sizeBanner.x,sizeBanner.y,1)

})

banner_Arquitectura.addEventListener("hoverenter",()=>{
    gsap.to(banner_Arquitectura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Arquitectura.addEventListener("hoverleave",()=>{
    gsap.to(banner_Arquitectura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Moda.addEventListener("hoverenter",()=>{
    gsap.to(banner_Moda.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Moda.addEventListener("hoverleave",()=>{
    gsap.to(banner_Moda.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})


banner_Bebidas.addEventListener("hoverenter",()=>{
    gsap.to(banner_Bebidas.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Bebidas.addEventListener("hoverleave",()=>{
    gsap.to(banner_Bebidas.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Grafica.addEventListener("hoverenter",()=>{
    gsap.to(banner_Grafica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Grafica.addEventListener("hoverleave",()=>{
    gsap.to(banner_Grafica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Musica.addEventListener("hoverenter",()=>{
    gsap.to(banner_Musica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Musica.addEventListener("hoverleave",()=>{
    gsap.to(banner_Musica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Cultura.addEventListener("hoverenter",()=>{
    gsap.to(banner_Cultura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Cultura.addEventListener("hoverleave",()=>{
    gsap.to(banner_Cultura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})


banner_Ganadero.addEventListener("hoverenter",()=>{
    gsap.to(banner_Ganadero.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Ganadero.addEventListener("hoverleave",()=>{
    gsap.to(banner_Ganadero.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})


let intersectado
panoramaN3_B.addEventListener('click',function(event)
{
    if(event.intersects.length > 0){
        intersectado = event.intersects[0].object;
        if(intersectado.material)
        {
            bannerSeleccionado(intersectado);

            
        }
    }
})

const textoPrincipal = document.querySelector(".textoPrincipal");
const textoTitulo = document.querySelector(".tituloTexto");
var enBanner;

function bannerSeleccionado(banner)
{
    // console.log("bannerSeleccionado")

    boton_video_1.style.visibility ="hidden";
    boton_video_2.style.visibility ="hidden";
    boton_video_3.style.visibility ="hidden";
    boton_video_4.style.visibility ="hidden";
    boton_video_5.style.visibility ="hidden";


    switch(banner)
    {
        case banner_quince:
            console.log("banner_quince")
            temaSeleccionado = "quince";

            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            
            abrirPanelBanner();

            textoTitulo.innerHTML ="Quinceañeras";
            textoPrincipal.innerHTML =
            "De manera tradicional, la fiesta de quince años es un hito importante en la vida de una mujer" +
            "como el momento en que oficialmente deja de ser niña para abrazar la vida adulta. "+"<br/>" +
            "En tierras mexicanas es también cuando se \"presenta\" a una mujer en sociedad, es un rito de "+
            "iniciación dentro de una sociedad patriarcal. Si la festejada es católica, la celebración se "+
            "acompaña con una misa o una ceremonia religiosa, a la que sigue un baile pleno de simbolismos. "+"<br/>"+
            "El vestido de la protagonista suele ser vaporoso y con estilo de princesa. El padre acompaña a la " + "<br/>"+
            "festejada en el primer baile para luego \"entregarla\" a los \"chambelanes\” (hombres jóvenes) que bailan "+
            "con ella distintas piezas, como representación del camino que recorrerá y los obstáculos que enfrentará "+
            "para encontrar el amor y vivir en pareja. Un gran pastel coronado con una muñeca, vestida de forma idéntica "+
            "a la quinceañera –la última muñeca que tendrá–, marca el inicio de la nueva vida."
            break;

        case banner_Arquitectura: 
            console.log("banner_arq")   
            console.log("arquitectura")
            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            abrirPanelBanner();
            temaSeleccionado = "arquitectura";


            textoTitulo.innerHTML ="La arquitectura del noreste";
            textoPrincipal.innerHTML =
            "La arquitectura del noreste tiene una gran diversidad de tipologías arquitectónicas, "+
            "técnicas constructivas y modos de habitar. Esta pluralidad se debe a las distintas influencias "+
            "visuales y estilísticas que han inundado la región, así como a los procesos productivos, migratorios"+
            "y sociales que se han dado en el territorio. En el Allende representado en la serie, la arquitectura "+
            "vernácula es una fuerte presencia que franquea la vida diaria de una población en constante transformación. "+
            "La arquitectura en la serie marca las diferencias sociales y también las ideológicas"
            break;

        case banner_Moda: 
            console.log("banner_moda")
            console.log("moda")
            temaSeleccionado = "moda";

            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            boton_video_3.style.visibility ="visible";
            boton_video_4.style.visibility ="visible";
            boton_video_5.style.visibility ="visible";
            textoTitulo.innerHTML ="La moda";
            textoPrincipal.innerHTML =
            "La moda norteña tiene un carácter singular e híbrido que responde a la cercanía con Estados Unidos, "+
            "al culto a la indumentaria del cowboy así como a la cultura visual generada por el cine. El apego al "+
            "caballo, el rodeo y el campo se refleja en las botas, los sombreros y las camisas vaqueras utilizadas "+
            "por gran parte de la población. Aunada a la cultura vaquera, la construcción visual asociada al narcotráfico, "+
            "descrita por muchos como “buchona”, se ha filtrado poco a poco en la cotidianeidad y en los guardarropas. "+
            "Por ello, la vestimenta de varios personajes de Somos. refleja este complejo fenómeno fronterizo, una mezcla de "+
            "culturas, de deseos y apariencias"
            abrirPanelBanner();

            break;

        case banner_Bebidas: 
            console.log("banner_bebida")
            temaSeleccionado = "bebida";

            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            boton_video_3.style.visibility ="visible";
            boton_video_4.style.visibility ="visible";
            textoTitulo.innerHTML ="Las bebidas ";
            textoPrincipal.innerHTML =
            "La cerveza y el sotol son dos bebidas tradicionales del norte de México, parte de la vida y el imaginario social de la zona. "+
            "A finales del siglo xix una gran productora cervecera se estableció en Nuevo León y detonó la producción industrial sostenida que "+
            "dio como resultado una cultura asociada con esta bebida fermentada, tanto que es costumbre acompañar las reuniones sociales y familiares"+
            "con ella. El clima extremo de la región ha propiciado también el consumo de ese líquido que refresca y revitaliza. "+"<br/>"+
            "El sotol, por su parte, es un aguardiente que se extrae de manera artesanal de la piña de una cactácea originaria de la zona "+
            "desértica del norte de México. Es muy socorrido por las clases populares, especialmente en áreas rurales. "+"<br/>"+
            "En Somos. los personajes acompañan sus reuniones sociales, laborales y momentos cruciales con dichos brebajes."

            abrirPanelBanner();

            break;
        case banner_Grafica: //POPULAR=????
            console.log("banner_grafica")
            console.log("grafica")
            temaSeleccionado = "popular";

            boton_video_1.style.visibility ="visible";
            textoTitulo.innerHTML ="Los rótulos y la gráfica popular ";
            textoPrincipal.innerHTML =
            "Los rótulos, en su mayoría pintados a mano, siguen siendo un distintivo para negocios y locales comerciales "+
            "en zonas rurales de México. A pesar de la estandarización de los medios gráficos impulsados por la tecnología, "+
            "en muchas poblaciones se apuesta por los señalamientos trazados artesanalmente para generar una identidad original. "+"<br/>"+
            "En Somos. los gráficos comerciales acompañan la imagen del pueblo y fortalecen la cultura visual de la región. "+"<br/>"+
            "Estos rótulos vitalizan los exteriores de los poblados alejados de las urbes."
            
            abrirPanelBanner();

            break;
        case banner_Musica: 
            console.log("banner_musica")
            console.log("musica")
            temaSeleccionado = "musica";

            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            boton_video_3.style.visibility ="visible";
            boton_video_4.style.visibility ="visible";
            textoTitulo.innerHTML ="La música norteña";
            textoPrincipal.innerHTML =
            "La música norteña es un género regional que ha viajado más allá de la frontera, su popularidad "+
            "ha crecido de manera amplia. También conocida como música de banda, se caracteriza por el uso del "+
            "acordeón y el bajo extremo y por las letras asociadas con la narración de las \"hazañas\" de los narcos, "+
            "por ello uno de sus subgéneros ha recibido el mote de 'narcocorrido'; otra de sus características es "+
            "romantizar la pobreza y anhelar el amor imposible. "+"<br/>"+
            "La fusión de la música norteña y la música texana ha dado como resultado el género Tex mex, muy divulgado en ambos lados de la frontera. "+"<br/>"+
            "La música norteña es parte de la identidad y la cultura de estos municipios fronterizos y en Somos. su presencia es tenue, pero continua."
            
            abrirPanelBanner();

            break;
        case banner_Cultura: 
            console.log("banner_cultura")
            // console.log("cultura")
            boton_video_1.style.visibility ="visible";
            boton_video_2.style.visibility ="visible";
            boton_video_3.style.visibility ="visible";
            boton_video_4.style.visibility ="visible";
            temaSeleccionado = "cultura";

            textoTitulo.innerHTML ="La cultura y el territorio ";
            textoPrincipal.innerHTML =
            "Coahuila se ubica en el noreste de México, es un estado fronterizo con Estados Unidos, que colinda con Texas. "+
            "Su imponente paisaje es en su mayoría desértico, aunque también cuenta con ciénegas, montañas, lagunas, bosques y oasis. "+"<br/>"+
            "Allende se ubica en la zona conocida como “Los cinco manantiales”, conformada por los municipios de Guerrero, Morelos,"+
            "Nava, Piedras Negras, Sabinas y Zaragoza, los cuales tienen una serie de riachuelos que alimentan el río Escondido."+"<br/>"+
            "Su territorio es amplio y diverso, la economía depende de la ganadería, la agricultura y la minería; la cultura es "+
            "híbrida, con una gran influencia de lo que sucede en el país vecino. En Somos. el paisaje es una referencia real y "+
            "poética que acompaña a los personajes y en la tragedia."

            abrirPanelBanner();

        break;
        case banner_Ganadero: 
        console.log("banner_cultura")
        // console.log("cultura")
        boton_video_1.style.visibility ="visible";
        boton_video_2.style.visibility ="visible";
        boton_video_3.style.visibility ="visible";
        boton_video_4.style.visibility ="visible";
        temaSeleccionado = "ganadera";

        textoTitulo.innerHTML ="La cultura ganadera ";
        textoPrincipal.innerHTML =
        "La ganadería es una de las principales actividades económicas del noreste de México, "+
        "su producto vital no se reduce a la producción de carne, comprende también la de leche de bovino."+"<br/>"+
        "La cultura que se ha generado en torno a la crianza de ganado y la alimentación regida por la carne de "+
        "res es parte del imaginario y de los relatos cotidianos. "+"<br/>"+
        "Los establos y las reses conforman el paisaje y la carne asada, más allá de un platillo regional es una "+
        "actividad obligada para cerrar tratos y convivir en familia"

        abrirPanelBanner();

    break;
    }
    console.log(banner);

}

function abrirPanelBanner(){
    panelBanner.style.visibility ="visible";
    gsap.to(panelBanner,{duration:0.5,opacity:1});

}

const fadeNegro = document.querySelector(".panelFade");
function cambiarPosicion(pos){

    fadeNegro.style.visibility = 'visible';
    gsap.to(fadeNegro,{duration:0.5,opacity:1.0}).eventCallback('onComplete',()=>
    {

        if(pos == "posA")
        {
            viewer.setPanorama(panoramaN3);

        }else if(pos =="posB")
        {
            viewer.setPanorama(panoramaN3_B);
            panoramaN3_B.add(bannerGroup);

        }

        gsap.to(fadeNegro,{delay:1.0,duration:0.5,opacity:0}).eventCallback('onComplete',()=>{
            fadeNegro.style.visibility = 'hidden';
        })
    })

}

boton_video_1.addEventListener('click',()=>{cambiarVideo(temaSeleccionado,1)} );
boton_video_2.addEventListener('click',()=>{cambiarVideo(temaSeleccionado,2)} );
boton_video_3.addEventListener('click',()=>{cambiarVideo(temaSeleccionado,3)} );
boton_video_4.addEventListener('click',()=>{cambiarVideo(temaSeleccionado,4)} );
boton_video_5.addEventListener('click',()=>{cambiarVideo(temaSeleccionado,5)} );

function cambiarVideo(tema,num){
    console.log("cambiando video");
    if(tema =="arquitectura")
    {

        if(num == 1){
            player.source = video_arquitectura_01;
            
        }
        else if(num == 2){
            player.source =  video_arquitectura_02;
        }else{
            console.log("el tema no tiene mas de videos")
            return;
        }
        
    }
    else if(tema == "bebidas")
    {
        if(num == 1){
            player.source =  video_bebidas_01;
            
        }
        else if(num == 2){
            player.source = video_bebidas_02;
        }
        else if(num == 3){
            player.source = video_bebidas_03;
        }
        else if(num == 4){
            player.source = video_bebidas_04;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema =="cultura")
    {
        if(num == 1){
            player.source = video_cultura_01;
            
        }
        else if(num == 2){
            player.source = video_cultura_02;
        }
        else if(num == 3){
            player.source = video_cultura_03;
        }
        else if(num == 4){
            player.source = video_cultura_04;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema =="ganadera")
    {
        if(num == 1){
            player.source = video_ganadera_01;
            
        }
        else if(num == 2){
            player.source = video_ganadera_02;
        }
        else if(num == 3){
            player.source = video_ganadera_03;
        }
        else if(num == 4){
            player.source = video_ganadera_04;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema == "moda")
    {
        if(num == 1){
            player.source = video_moda_01;
            
        }
        else if(num == 2){
            player.source = video_moda_02;
        }
        else if(num == 3){
            player.source = video_moda_03;
        }
        else if(num == 4){
            player.source = video_moda_04;
        }
        else if(num == 5){
            player.source = video_moda_05;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema =="musica")
    {
        if(num == 1){
            player.source = video_musica_01;
            
        }
        else if(num == 2){
            player.source = video_musica_02;
        }
        else if(num == 3){
            player.source = video_musica_03;
        }
        else if(num == 4){
            player.source = video_musica_04;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema=="popular")
    {
        if(num == 1){
            player.source = video_popular_01;
            
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }
    }
    else if(tema =="quince")
    {
        if(num == 1){
            player.source = video_quince_01;
            
        }
        else if(num == 2){
            player.source = video_quince_02;
        }
        else{
            console.log("el tema no tiene mas de videos")
            return;
        }

    }else 
    {
        console.log("tema no encontrado")
        return ;
    }
    panelVideo.style.visibility = "visible";
}
