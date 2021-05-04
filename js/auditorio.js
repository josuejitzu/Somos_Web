const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/auditorio_04.jpg' );
const botonCerrarVideo = document.querySelector(".botonCerrarVid");
const panelVideo = document.querySelector(".panelVideos");
panoramaLobby.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, -1776,  ), 0 );
  
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
const videoPlayer =  new Plyr(document.querySelector('.player'));
const imgVidConAudio_blanco ="src/img/simbolos/AUDIO.png";
const imgVidSinAudio_blanco ="src/img/simbolos/SIN_AUDIO.png";
const fbPlayer = document.querySelector(".fb-video ");

let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const player = new Plyr(document.querySelector('.player'));

const botonMuteVideo = document.querySelector( '.botonMuteVideo')
// const closeButton = panoramaContainer.querySelector( '.close' );

var infospotVideo;
infospotVideo = new PANOLENS.Infospot(350,"src/img/simbolos/PLAY.png?v=123456781");
infospotVideo.position.set( 5000.00, -10, -200 );
// infospotVideo.addHoverText( 'AUDITORIO' );
infospotVideo.addEventListener('click',()=>{
    console.log("spot video")
    panelVideo.style.visibility ="visible";
    gsap.to(panelVideo,{duration:0.5,opacity:1.0});
    fbPlayer.style.pointerEvents = "all";

    callarMusica();
    // activarBotonesDinamicos();
})
panoramaLobby.add(infospotVideo);

var infospotDinamicoA = new PANOLENS.Infospot(450,"src/img/iconos/iraNetflix_negro.png?v=123456781");
infospotDinamicoA.position.set( 5000.00, -1200,  -1400);//y:-3220
infospotDinamicoA.addEventListener('click',()=>{
    console.log("infospot dinamico A")
})
 
panoramaLobby.add(infospotDinamicoA)

var infospotDinamicoB = new PANOLENS.Infospot(450,"src/img/iconos/irA_SitioMuseo_negro.png?v=123456782");
infospotDinamicoB.position.set( 5000.00, -1200,  1310);
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
    viewer.toggleControlBar();

        
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

botonMuteVideo.addEventListener('click',()=>{
    console.log("mutear video");
    videoPlayer.muted = !videoPlayer.muted;
    
    //ojo estamos usando las ruta de imagenes de musica.js
    botonMuteVideo.src = videoPlayer.muted ? imgVidSinAudio_blanco:imgVidConAudio_blanco;
    

})

document.addEventListener('DOMContentLoaded', () => {
	const source ='https://www.facebook.com/100065115183986/videos/128256386021534/' //'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
	// const video = document.querySelector('video');
	
	// For more options see: https://github.com/sampotts/plyr/#options
	// captions.update is required for captions to work with hls.js
	// const player = new Plyr(video, {captions: {active: true, update: true, language: 'en'}});
	
	if (!Hls.isSupported()) {
		videoPlayer.src = source;
	} else {
		// For more Hls.js options, see https://github.com/dailymotion/hls.js
		const hls = new Hls();
		hls.loadSource(source);
		hls.attachMedia(videoPlayer);
		window.hls = hls;
		
		// Handle changing captions
		videoPlayer.on('languagechange', () => {
			// Caption support is still flaky. See: https://github.com/sampotts/plyr/issues/994
			setTimeout(() => hls.subtitleTrack = videoPlayer.currentTrack, 50);
		});
	}
	
	// Expose player so it can be used from the console
	window.player = videoPlayer;
});


