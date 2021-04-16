const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/posicion01.jpg' );

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
infospotAuditorio = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png?v=123456781");
infospotAuditorio.position.set( 5000.00, -665.23, -3000 );
infospotAuditorio.addHoverText( 'AUDITORIO' );
infospotAuditorio.addEventListener('click',()=>{
    console.log("spot Auditorio")
    // document.querySelector(".panelCarga").style.opacity = 1.0;

    // window.location.href = 'auditorio.html';
    cambiarA("auditorio");
    // panoramaLobby.dispose();
    // viewer.remove(panoramaLobby);
    // viewer.add(panoramaAuditorio);
    
})
panoramaLobby.add(infospotAuditorio);

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png?v=123456782");
infospotSomos.position.set( 0000, -565.23, -3000 );
infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    viewer.disableControl();
    
})
panoramaLobby.add(infospotSomos);


var infospotNucleo1 = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png?v=123456783");
infospotNucleo1.position.set( 1000, -565.23, -3000 );
infospotNucleo1.addHoverText( 'Nucleo 1' );
infospotNucleo1.addEventListener('click',()=>{
    console.log("spot nucleo 1")
    cambiarA("nucleo1");
    
    
    
})
panoramaLobby.add(infospotNucleo1);



//Se construye viewer 360
function setupPanolens () {
    // viewer = new PANOLENS.ImagePanorama(panorama);
    viewer = new PANOLENS.Viewer( 
        {
             container: mainContainer,
             //  controlButtons: deteccionIphone() ? controlesIos:controles,
             cameraFov:90
        } 
    );
    viewer.add( panoramaLobby );
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
}

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

})

botonCerrarTextoSomos.addEventListener('click',()=>{
    console.log("cerrando texto");
    panelTextoSomos.style.visibility = "hidden";
    viewer.enableControl(0);

})

function cambiarA(dir){
    let barraCarga = document.getElementById("barraCarga");
    barraCarga.parentNode.removeChild(barraCarga);
    document.querySelector(".panelCarga").style.opacity = 1.0;
  
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

    }
    else if(dir =="nucleo3")
    {

    }
    else if(dir =="auditorio")
    {
        direccionFinal = "auditorio.html"

    }else{ }
    var id = setInterval(frame, 1001);
    function frame(){

            window.location.href = direccionFinal;
    }
}