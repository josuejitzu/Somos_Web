const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/05_Ludoteca.jpg' );

let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );
const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';


var infospotVideos;
infospotVideos = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png?v=123456781");
infospotVideos.position.set( 5000.00, -665.23, -3000 );
infospotVideos.addHoverText( 'VIDEOS' );
infospotVideos.addEventListener('click',()=>{
    console.log("spot Videos")
    
    
})
panoramaLobby.add(infospotVideos);

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






//Se construye viewer 360 FOV,panorama,etc
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
}

init();


botonCerrarTextoSomos.addEventListener('click',()=>{
    console.log("cerrando texto");
    panelTextoSomos.style.visibility = "hidden";
    viewer.enableControl(0);

})