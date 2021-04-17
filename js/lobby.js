const panoramaLobbyA = new PANOLENS.ImagePanorama( 'src/img/360/posicion01_2.jpg' );
const panoramaLobbyB = new PANOLENS.ImagePanorama( 'src/img/360/posicion02_2.jpg' );

let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );
const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';


var infospotAuditorio;
infospotAuditorio = new PANOLENS.Infospot(400,"src/img/simbolos/FLECHA.png?v=123456782");
infospotAuditorio.position.set( 4000.00, -665.23, 100 );
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

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(400,"src/img/simbolos/VER_MAS.png?v=123456782");
infospotSomos.position.set( -100, -765.23, -3000 );

// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaLobbyA.add(infospotSomos);



//nucleo2 pos 2800, -1200, -2500
var infospotNucleo1 = new PANOLENS.Infospot(400,"src/img/simbolos/VER_MAS.png?v=123456783");
infospotNucleo1.position.set( 3975.4445, -1118.5436, 34.7162 );
// infospotNucleo1.position.y = -850;
// infospotNucleo1.addHoverText( 'Nucleo 1' );
infospotNucleo1.addEventListener('click',()=>{
    console.log("spot nucleo 1")
    cambiarA("nucleo1");
     
})
panoramaLobbyA.add(infospotNucleo1);


var infospotNucleo2 = new PANOLENS.Infospot(400,"src/img/simbolos/VER_MAS.png?v=123456784");
infospotNucleo2.position.set(  4083.8273, -950, -2635.9018);
infospotNucleo2.addEventListener('click',()=>{
    console.log("spot nucleo 2")
    cambiarA("nucleo2");
     
})
panoramaLobbyA.add(infospotNucleo2);


var infospotNucleo3 = new PANOLENS.Infospot(400,"src/img/simbolos/VER_MAS.png?v=123456785");
infospotNucleo3.position.set(  3867.0618, -793.3954, -4500);

// infospotNucleo3.addHoverText( '' );
infospotNucleo3.addEventListener('click',()=>{
    console.log("spot nucleo 3")
    cambiarA("nucleo3");
     
})
panoramaLobbyA.add(infospotNucleo3);


var infospotPosicionA = new PANOLENS.Infospot(400,"src/img/simbolos/FLECHA.png?v=123456781");
infospotPosicionA.position.set( -1010.1609, -565.23, 3000 );
// infospotPosicionA.addHoverText( 'Posicion A' );
infospotPosicionA.addEventListener('click',()=>{
    console.log("posicionA")
    // cambiarA("nucleo1");
    cambioPosicion('posA')
    
})
panoramaLobbyB.add(infospotPosicionA);

var infospotPosicionB = new PANOLENS.Infospot(400,"src/img/simbolos/FLECHA.png?v=123456783");
infospotPosicionB.position.set( 1000, -565.23, -3000 );
// infospotPosicionB.addHoverText( 'Posicion B' );
infospotPosicionB.addEventListener('click',()=>{
    console.log("posicionB")
    // cambiarA("nucleo1");
    cambioPosicion('posB')
    
})
panoramaLobbyA.add(infospotPosicionB);

//DEBUG GUI
// const gui = new dat.GUI();

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
        infospotNucleo1.position.set( 3975.4445, -1118.5436, 34.7162 );
        infospotNucleo2.position.set(  4083.8273, -950, -2635.9018);
        infospotNucleo3.position.set(  3867.0618, -793.3954, -4500);


        viewer.autoHideInfospot = false;
        



    }else if(pos == "posB")
    {
        
        viewer.setPanorama(panoramaLobbyB);
        
        panoramaLobbyB.add(infospotSomos);
        panoramaLobbyB.add(infospotNucleo1); 
        panoramaLobbyB.add(infospotNucleo2); 
        panoramaLobbyB.add(infospotNucleo3); 
        infospotSomos.position.set( -3069.4332, -1118.5436, 2349.7036 );
        infospotNucleo1.position.set( 50, -750, 5000 );
        infospotNucleo2.position.set( 1100, -1010.1609, 4625.7409);
        infospotNucleo3.position.set( 2024.5555, -1118.5441, 1807.79);
         viewer.autoHideInfospot = false;

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
             initialLookAt:new THREE.Vector3(Math.PI/4,1,0.0)
        } 
    );
    viewer.add( panoramaLobbyA );
    viewer.add(panoramaLobbyB);
    // viewer.setPanorama(panoramaLobbyB);
    // viewer.tweenControlCenter( new THREE.Vector3(camaraRot.x, 0, 0), 0 );
    // viewer.initialLookAt(new THREE.Vector3(0,1,0));
     viewer.initialLookAt = new THREE.Vector3(0.5,0,0);

    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
}
// gui.add(camaraRot,"x").min(-1).max(1).step(0.001).name("nucleo3_z").onFinishChange(()=>{
//      viewer.initialLookAt = new THREE.Vector3(camaraRot.x,0,0);
//      // viewer.tweenControlCenter( new THREE.Vector3(camaraRot.x, 0, 0), 0 );

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

    // Dispose panorama when close
    // closeButton.addEventListener( 'click', function () {
    //     disposePanorama();
    //     progressBar.style.width = 0;
    //     progressBar.style.opacity = 1;
    //     panoramaContainer.classList.remove( 'open' );
    // }, false );
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
        return;
    }
    else if(dir =="nucleo3")
    {
        return;
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