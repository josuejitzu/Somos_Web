const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/auditorio_04.jpg' );
const botonCerrarVideo = document.querySelector(".botonCerrarVid");
const panelVideo = document.querySelector(".panelVideos");
panoramaLobby.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, -376, -300 ), 0 );
  
  } );
  panoramaLobby.addEventListener('progress', function(e){
    // hide the loader
    var pro = e.progress.loaded / e.progress.total;
    console.log(pro)
    bar1.set(pro*100);

    // ocultarLoad();

 });
  panoramaLobby.addEventListener('load', function(e){
    // hide the loader
    console.log(e)
    ocultarLoad();

 });

panoramaLobby.addEventListener( 'infospot-animation-complete', function(){

    // infospotDinamicoA.hide(0);     
    // infospotDinamicoB.hide(0);

})
const videoPlayer = document.querySelector(".player");

let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );

var infospotVideo;
infospotVideo = new PANOLENS.Infospot(500,"src/img/simbolos/PLAY.png?v=123456781");
infospotVideo.position.set( 5000.00, -10, -200 );
// infospotVideo.addHoverText( 'AUDITORIO' );
infospotVideo.addEventListener('click',()=>{
    console.log("spot video")
    panelVideo.style.visibility ="visible";
    gsap.to(panelVideo,{duration:0.5,opacity:1.0});
    callarMusica();
    // activarBotonesDinamicos();
})
panoramaLobby.add(infospotVideo);

var infospotDinamicoA = new PANOLENS.Infospot(450,"src/img/iconos/iraNetflix.png?v=123456781");
infospotDinamicoA.position.set( 5000.00, -2420,  -1660.4572);
infospotDinamicoA.addEventListener('click',()=>{
    console.log("infospot dinamico A")
})
 
panoramaLobby.add(infospotDinamicoA)

var infospotDinamicoB = new PANOLENS.Infospot(450,"src/img/iconos/irA_SitioMuseo.png?v=123456782");
infospotDinamicoB.position.set( 5000.00, -2420,  1699.4073);
infospotDinamicoB.addEventListener('click',()=>{
    console.log("infospot dinamico B")
})

panoramaLobby.add(infospotDinamicoB) 




//DEBUG UI

// const gui = new dat.GUI();
// gui.add(infospotVideo.position,"x").min(-5000).max(5000).step(0.0001).name("video_x")
// gui.add(infospotVideo.position,"y").min(-5000).max(5000).step(0.0001).name("video_y")
// gui.add(infospotVideo.position,"z").min(-5000).max(5000).step(0.0001).name("video_z")
// gui.add(infospotDinamicoA.position,"x").min(-5000).max(5000).step(0.0001).name("posA_x")
// gui.add(infospotDinamicoA.position,"y").min(-5000).max(5000).step(0.0001).name("posA_y")
// gui.add(infospotDinamicoA.position,"z").min(-5000).max(5000).step(0.0001).name("posA_z")

// gui.add(infospotDinamicoB.position,"x").min(-5000).max(5000).step(0.0001).name("posB_x")
// gui.add(infospotDinamicoB.position,"y").min(-5000).max(5000).step(0.0001).name("posB_y")
// gui.add(infospotDinamicoB.position,"z").min(-5000).max(5000).step(0.0001).name("posB_z")

//Se construye viewer 360
function setupPanolens () {
    // viewer = new PANOLENS.ImagePanorama(panorama);
    viewer = new PANOLENS.Viewer( 
        {
             container: mainContainer,
             //  controlButtons: deteccionIphone() ? controlesIos:controles,
             cameraFov:70,
             autoHideInfospot:false,
             renderer: new THREE.WebGLRenderer({antialias:true}),
             initialLookAt:new THREE.Vector3(Math.PI/4,1,0.0)

        } 
    );
    viewer.add( panoramaLobby );
    viewer.OrbitControls.noZoom = true;
        
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



function activarBotonesDinamicos()
{
    // panoramaLobby.add(infospotDinamicoA)     
    // panoramaLobby.add(infospotDinamicoB) 
    // panoramaLobby.update();
    infospotDinamicoA.show();     
    infospotDinamicoB.show();     


}
function desactivarBotonesDinamicos()
{    infospotDinamicoA.hide();     
        infospotDinamicoB.hide();     
}


botonCerrarVideo.addEventListener("click",()=>{
    
    videoPlayer.pause();
    gsap.to(panelVideo,{duration:0.5,opacity:0.0}).eventCallback('onComplete',()=>{
        
        panelVideo.style.visibility ="hidden";
    });

})