const panorama = new PANOLENS.ImagePanorama( '../src/img/360/01_Acceso.jpg' );
let viewer;

const panoramaContainer = document.getElementById( 'panorama-container' );
// const galleryContainer = document.getElementById( 'gallery-container' );
const mainContainer = document.getElementById( 'main-container' );
const progressBar = document.getElementById( 'progress-bar' );
// const closeButton = panoramaContainer.querySelector( '.close' );

var infospot;
infospot = new PANOLENS.Infospot(600,"../src/img/simbolos/VER_MAS.png");
infospot.position.set( 5000.00, -665.23, -3996.49 );
infospot.addHoverText( 'The Where Is Bar' );
infospot.addEventListener('click',()=>{console.log("hola")})
panorama.add(infospot);

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
    viewer.add( panorama );
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
    // var elem = document.getElementById("myBar");
    // var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
    //   if (bar1. >= 100) {
    //     clearInterval(id);
    //     i = 0;
    //   } else {
    //     // width++;
    //     // elem.style.width = width + "%";
    //   }
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