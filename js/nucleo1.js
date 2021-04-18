const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/nucleo01_2.jpg' );

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
infospotVideos.position.set( 5000.00, -2000, -400 );
// infospotVideos.addHoverText( 'VIDEOS' );
infospotVideos.addEventListener('click',()=>{
    console.log("spot Videos")
    // abrirVideos(true);
    
})
panoramaLobby.add(infospotVideos);

var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png?v=123456782");
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
             initialLookAt:new THREE.Vector3(Math.PI*2,1,0.0)

        } 
    );
    viewer.add( panoramaLobby );
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
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

const botonCerrarVideo = document.querySelector(".botonCerrarVid");
botonCerrarVideo.addEventListener("click",()=>{{
    abrirVideos(false);
}})

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