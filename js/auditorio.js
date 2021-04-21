const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/auditorio_6k.jpg' );
panoramaLobby.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, -376, -300 ), 0 );
  } );
let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );

var infospotVideo;
infospotVideo = new PANOLENS.Infospot(600,"src/img/simbolos/PLAY.png?v=123456781");
infospotVideo.position.set( 5000.00, -576, -300 );
// infospotVideo.addHoverText( 'AUDITORIO' );
infospotVideo.addEventListener('click',()=>{
    console.log("spot video")
   
    
})
panoramaLobby.add(infospotVideo);

// var infospotSomos = new PANOLENS.Infospot(6000,"src/img/simbolos/VER_MAS.png");
// infospotSomos.position.set( 5000.00, -565.23, 197.49 );
// infospotSomos.addHoverText( 'SOMOS' );
// infospotSomos.addEventListener('click',()=>{
//     console.log("spot somos")
 
    
// })
// panoramaLobby.add(infospotSomos);

//DEBUG UI

// const gui = new dat.GUI();
// gui.add(infospotVideo.position,"x").min(-5000).max(5000).step(0.0001).name("video_x")
// gui.add(infospotVideo.position,"y").min(-5000).max(5000).step(0.0001).name("video_y")
// gui.add(infospotVideo.position,"z").min(-5000).max(5000).step(0.0001).name("video_z")


//Se construye viewer 360
function setupPanolens () {
    // viewer = new PANOLENS.ImagePanorama(panorama);
    viewer = new PANOLENS.Viewer( 
        {
             container: mainContainer,
             //  controlButtons: deteccionIphone() ? controlesIos:controles,
             cameraFov:70,
             autoHideInfospot:false,
             initialLookAt:new THREE.Vector3(Math.PI/4,1,0.0)

        } 
    );
    viewer.add( panoramaLobby );
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

