



const panoramaN3_src = document.documentElement.lang == 'en' ? 'src/img/360_En/nucleo01_EN.jpg' : 'src/img/360/nucleo01_07.jpg'


const panoramaLobby = new PANOLENS.ImagePanorama( panoramaN3_src );
panoramaLobby.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5500.00, 0, -4000 ), 0 );
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
let viewer;
const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );
const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';
const botonEntrevistaCompleta = document.querySelector(".botonEntrevistaCompleta");
// const player = new Plyr(document.querySelector('.js-player'));
const player = new Plyr(document.querySelector('.player'));
console.log(player);
const botonThumb1 = document.querySelector(".thumb1");
const botonThumb2 = document.querySelector(".thumb2");
const botonThumb3 = document.querySelector(".thumb3");
const botonMuteVideo = document.querySelector(".botonMuteVideo");
const imgVidConAudio ="src/img/simbolos/AUDIO.png";
const imgVidConAudio_negro ="src/img/simbolos/AUDIO_negro.png";
const imgVidSinAudio ="src/img/simbolos/SIN_AUDIO.png";
const imgVidSinAudio_negro ="src/img/simbolos/SIN_AUDIO_negro.png";

const entrevistaCompleta1 = document.getElementsByClassName("completaText1") 
const botonEntrevistaCompletaTitulo =  document.querySelector(".botonEntrevistaCompletaTitulo");

console.log(entrevistaCompleta1)
const videoJames ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src: 'src/vids/JAMES_2.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };
  const videoJames_Completo ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src: 'src/vids/James_completo.mp4',//'http://jitzu.mx/videos/James_completo.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };


  const videoMonica ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src: 'src/vids/Monika_2.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };
  const videoMonica_Completo ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src:  'src/vids/Monika_completo.mp4',// 'http://jitzu.mx/videos/Monika_completo.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };
  

const videoFernanda ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src: 'src/vids/Fernanda_2.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };
  const videoFernanda_Completo ={
    type: 'video',
    title: 'Example title',
    sources: [
      {
        src:  'src/vids/Fernanda_completo.mp4',//'http://jitzu.mx/videos/Fernanada_completo.mp4',
        type: 'video/mp4',
        size: 1080,
      }
    ],
    poster: 'src/img/netflix_video_poster.jpg',
    previewThumbnails: {
      src: '',
    },
  };


var infoSpotSize = 200;
var infospotVideos;
infospotVideos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton.png?v=123456781");
infospotVideos.position.set( 5000.00, -2000, -400 );
// infospotVideos.addHoverText( 'VIDEOS' );
infospotVideos.addEventListener('click',()=>{
    console.log("spot Videos")
    abrirVideos(true);

    
})
panoramaLobby.add(infospotVideos);

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton.png?v=123456782");
infospotSomos.position.set( 1900, -1660, -5000 );
// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaLobby.add(infospotSomos);


//DEBUG infospots
// const gui = new dat.GUI();

// gui.add(infospotSomos.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
// gui.add(infospotSomos.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
// gui.add(infospotSomos.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotVideos.position,"x").min(-5000).max(5000).step(0.0001).name("Videos_x")
// gui.add(infospotVideos.position,"y").min(-5000).max(5000).step(0.0001).name("Videos_y")
// gui.add(infospotVideos.position,"z").min(-5000).max(5000).step(0.0001).name("Videos_z")

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
             renderer: new THREE.WebGLRenderer({antialias:true})

            //  initialLookAt:new THREE.Vector3(Math.PI*2,1,0.0)

        } 
    );
    viewer.add( panoramaLobby );
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
    viewer.toggleControlBar();
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
console.log(videoPlayer);
// videoPlayer.responsive(true);

const botonCerrarVideo = document.querySelector(".botonCerrarVid");
botonCerrarVideo.addEventListener("click",()=>{{
    abrirVideos(false);
    player.pause();
}})

const panelVideos = document.querySelector(".panelVideos");
function abrirVideos(abrir){
    if(abrir)
    {
        panelVideos.style.visibility ="visible";
        // player.source = videoMonica;

        callarMusica();
        
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

let enEntrevistasCompletas = false;
let enVideo = 1;
player.on('play', function(){
    console.log("reproduciendo")
    // callarMusica();
})

botonThumb1.addEventListener('click',()=>{
console.log("tumb1")
    enVideo = 1;
    if(enEntrevistasCompletas)
    {
      cambiarVideoCompleto();
    }else
      cambiarVideo(1);
})
    
botonThumb2.addEventListener('click', ()=>{
    enVideo = 2;
    cambiarVideo(2)
    if(enEntrevistasCompletas)
    {
      cambiarVideoCompleto();
    }else
      cambiarVideo(2);
});
botonThumb3.addEventListener('click', ()=>{
    enVideo = 3;
    if(enEntrevistasCompletas)
    {
      cambiarVideoCompleto();
    }else
      cambiarVideo(3);
});

botonEntrevistaCompleta.addEventListener('click',()=>{
    cambiarVideoCompleto();
    if(enEntrevistasCompletas)
    {
      enEntrevistasCompletas = false;
      botonEntrevistaCompletaTitulo.innerHTML = document.documentElement.lang == "en" ? "Complete interview ": "Entrevista completa";
      for (let i = 0; i < entrevistaCompleta1.length; i++) {
        var element = entrevistaCompleta1[i];
        element.style.visibility="hidden";
      }
      cambiarVideo(1);
    }else if(!enEntrevistasCompletas)
    {

      enEntrevistasCompletas = true;
      botonEntrevistaCompletaTitulo.innerHTML = document.documentElement.lang == "en" ? "Short interview ": "Entrevista corta";
    }
})

function cambiarVideo(num){
    console.log("cambiando video");
    if(num == 1){
        player.source = videoJames;
        enVideo = 1;
    }
    else if(num == 2){
        player.source = videoFernanda;
        enVideo = 2;

    }
    else if (num == 3)
    {
        player.source = videoMonica;
        enVideo = 3;

    }
}

function cambiarVideoCompleto()
{
        if(enVideo == 1){
            player.source = videoJames_Completo;
        }
        else if (enVideo == 2)
        {
            player.source = videoFernanda_Completo;

        }else if (enVideo == 3)
        {
            player.source = videoMonica_Completo;

        }
      
       for (let i = 0; i < entrevistaCompleta1.length; i++) {
         var element = entrevistaCompleta1[i];
         element.style.visibility="visible";
       }

}
    



// var videoMuteado = false;
botonMuteVideo.addEventListener('click',()=>{
    console.log("mutear video");
    player.muted = !player.muted;
    
    //ojo estamos usando las ruta de imagenes de musica.js
    botonMuteVideo.src = player.muted ? imgVidSinAudio:imgVidConAudio;
    

})