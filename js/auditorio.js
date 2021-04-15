const panoramaLobby = new PANOLENS.ImagePanorama( 'src/img/360/05_Ludoteca.jpg' );
const panoramaAuditorio = new PANOLENS.ImagePanorama( '../src/img/360/05_Ludoteca.jpg' );
let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );

var infospotAuditorio;
infospotAuditorio = new PANOLENS.Infospot(600,"src/img/simbolos/VER_MAS.png");
infospotAuditorio.position.set( 5000.00, -665.23, -3996.49 );
infospotAuditorio.addHoverText( 'AUDITORIO' );
infospotAuditorio.addEventListener('click',()=>{
    console.log("spot Auditorio")
    // panoramaLobby.dispose();
    // viewer.remove(panoramaLobby);
    // viewer.add(panoramaAuditorio);
    
})
panoramaLobby.add(infospotAuditorio);

var infospotSomos = new PANOLENS.Infospot(6000,"src/img/simbolos/VER_MAS.png");
infospotSomos.position.set( 5000.00, -565.23, 197.49 );
infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
 
    
})
panoramaLobby.add(infospotSomos);


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


//FAKE loading
var i = 0;
// var loadBar = document.getElementById("barraCarga").ldBar;

var bar1 = new ldBar("#barraCarga");
var bar2 = document.getElementById("barraCarga").ldBar;
// bar1.style.width = "100%";
bar1.set(10)
// bar1.style.width = "100px";
function move() {
  if (i == 0) {
    i = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if(i>=100)
        {
            clearInterval(id);
            ocularLoad();
        }else{ i++
            bar1.set(i);
        }
        
    }
  }
//    loadBar.set(2);
}
move()

function ocularLoad(){
    console.log("ocultar load")
    document.querySelector(".panelCarga").style.opacity = 0.0;
    //document.querySelector(".panelCarga").style.visibility = "hidden";
}

var botonCerrar = document.getElementById("botonCerrar");
console.log(botonCerrar);
botonCerrar.addEventListener('click',()=>
{
    console.log("cerrar");
    let barraCarga = document.getElementById("barraCarga");
    barraCarga.parentNode.removeChild(barraCarga);
    document.querySelector(".panelCarga").style.opacity = 1.0;
    var id = setInterval(frame, 1001);
    function frame(){

            window.location.href = 'lobby.html';
    }
  
    //directorio.cambiarA("lobby");

})