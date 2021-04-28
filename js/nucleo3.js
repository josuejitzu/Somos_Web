

import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js'
const panoramaN3 = new PANOLENS.ImagePanorama( 'src/img/360/Nucleo03_low.jpg' );
panoramaN3.addEventListener( 'enter-fade-start', function(){
    viewer.tweenControlCenter(  new THREE.Vector3(5000.00, 0, 0), 0 );
  } );
  panoramaN3.addEventListener('progress', function(e){
    // hide the loader
    var pro = e.progress.loaded / e.progress.total;
    console.log(pro)
    bar1.set(pro*100);

    // ocultarLoad();

 });
  panoramaN3.addEventListener('load', function(e){
    // hide the loader
    ocultarLoad();

 });



let viewer;

const mainContainer = document.getElementById( 'main-container' );
const botonCerrarTextoSomos = document.querySelector(".botonCerrarTextoSomos");
const panelTextoSomos = document.querySelector(".panelSomos");
panelTextoSomos.style.visibility = 'hidden';

const navegacionInferior = document.querySelector(".navegacionInferior");
const navegacionInferiorN2 = document.querySelector(".navegacionInferiorN2")
      navegacionInferiorN2.style.visibility = "hidden";
const botonCambiarPosA = document.querySelector(".cambiarPos");
botonCambiarPosA.addEventListener("click",()=>{cambioPosicion("posicionA")});

const botonCerrarPanelFotos = document.querySelector(".botonCerrarPanelFotos");
const panelFotos = document.querySelector(".panelFotos");
const botonCerrarPanelInformacion = document.querySelector(".botonCerrarPanelBanner")
const panelBanner = document.querySelector(".panelBanner");
const botonCerrarPanelVideo = document.querySelector(".botonCerrarPanelVideo")
const panelVideo = document.querySelector(".panelVideo");

var infoSpotSize = 400;


var infospotSomos ;
infospotSomos = new PANOLENS.Infospot(infoSpotSize,"src/img/iconos/mas_boton_white.png?v=123456782");
infospotSomos.position.set( 4500, -1300, -3210 );
// infospotSomos.addHoverText( 'SOMOS' );
infospotSomos.addEventListener('click',()=>{
    console.log("spot somos")
    panelTextoSomos.style.visibility = 'visible';
    gsap.fromTo(panelTextoSomos,{opacity:0},{duration:0.5,opacity:1.0})
    viewer.disableControl();
    
})
panoramaN3.add(infospotSomos);

const panelGaleria = document.querySelector(".panelGaleria");

// gsap.to(infospotSomos.position,{delay:2,duration:1,y:10, repeat:-1}).eventCallback('onComplete',()=>{
//     infospotSomos.position.set( 1900, -1860, -5000)
// });


//DEBUG infospots
 const gui = new dat.GUI();
 gui.close();

gui.add(infospotSomos.position,"x").min(-5000).max(5000).step(0.0001).name("Somos_x")
gui.add(infospotSomos.position,"y").min(-5000).max(5000).step(0.0001).name("Somos_y")
gui.add(infospotSomos.position,"z").min(-5000).max(5000).step(0.0001).name("Somos_z")

// gui.add(infospotFotos.position,"x").min(-5000).max(5000).step(0.0001).name("Videos_x")
// gui.add(infospotFotos.position,"y").min(-5000).max(5000).step(0.0001).name("Videos_y")
// gui.add(infospotFotos.position,"z").min(-5000).max(5000).step(0.0001).name("Videos_z")

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
            //  enableReticle: true,
             renderer: new THREE.WebGLRenderer({antialias:true})
            //  initialLookAt:new THREE.Vector3(Math.PI*2,1,0.0)

        } 
    );
    viewer.add( panoramaN3 );

    viewer.setPanorama(panoramaN3);
    viewer.OrbitControls.noZoom = true;
    viewer.autoHideInfospot = false;
    viewer.toggleControlBar();
    
  
    viewer.registerEventListeners();
    viewer.reticle.hide()
    viewer.disableReticleControl()
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



const fadeNegro = document.querySelector(".panelFade");



// const gui = new dat.GUI({width:500});
// gui.close();




botonCerrarPanelFotos.addEventListener('click',()=>{
    panelFotos.style.visibility ="hidden";
})
botonCerrarPanelInformacion.addEventListener('click',()=>{
    gsap.to(panelBanner,{duration:0.5,opacity:0}).eventCallback('onComplete',()=>{

        panelBanner.style.visibility ="hidden";
    });

})

botonCerrarPanelVideo.addEventListener('click',()=>{
    panelVideo.style.visibility ="hidden";
})

function abrirPanelVideo(){
    callarMusica();
}




//BANNERS

const cuadroGeometry =new THREE.PlaneGeometry(1,1,2);

const banner_quince_imagen = new Image(), banner_arquitectura_imagen = new Image(), banner_moda_imagen = new Image(),
     banner_bebidas_imagen = new Image(), banner_grafica_imagen = new Image(), banner_musica_imagen = new Image(),
     banner_cultura_imagen = new Image();
const texturaQuince = new THREE.Texture(banner_quince_imagen), textura_Arquitectura = new THREE.Texture(banner_arquitectura_imagen);
const texturaModa = new THREE.Texture(banner_moda_imagen), textura_Bebidas = new THREE.Texture(banner_bebidas_imagen);
const texturaGrafica = new THREE.Texture(banner_grafica_imagen), textura_Musica = new THREE.Texture(banner_musica_imagen);
const texturaCultura = new THREE.Texture(banner_cultura_imagen);
// banner_1_imagen.addEventListener('load',()=>{
//     texturaQuince.needsUpdate = true;
// })

const banner_quince_MAT =   new THREE.MeshBasicMaterial({color: 0xffffff,side:THREE.Front})
const banner_quince =       new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Arquitectura = new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Moda =         new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Bebidas = new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Grafica = new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Musica = new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
const banner_Cultura = new THREE.Mesh(cuadroGeometry,banner_quince_MAT);
// panoramaN3.add(banner_quince)

const bannerGroup = new THREE.Group();
bannerGroup.add(banner_quince);
bannerGroup.add(banner_Arquitectura);
bannerGroup.add(banner_Moda);
bannerGroup.add(banner_Bebidas);
bannerGroup.add(banner_Grafica);
bannerGroup.add(banner_Musica);
bannerGroup.add(banner_Cultura);

panoramaN3.add(bannerGroup);
bannerGroup.position.set(45,10,-3.47);
bannerGroup.rotation.set(0,-1.72,0);

const sizeBanner={ x:7,y:25}

banner_quince.position.set(-20,0,0)
banner_quince.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_quince.rotation.set(0,0.8,0);

banner_Arquitectura.position.set(-10,0,0)
banner_Arquitectura.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Arquitectura.rotation.set(0,0.8,0);

banner_Moda.position.set(0,0,0)
banner_Moda.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Moda.rotation.set(0,0.8,0);

banner_Bebidas.position.set(10,0,0)
banner_Bebidas.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Bebidas.rotation.set(0,0.2,0);

banner_Grafica.position.set(20,0,0)
banner_Grafica.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Grafica.rotation.set(0,-0.4,0);

banner_Musica.position.set(30,0,0)
banner_Musica.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Musica.rotation.set(0,-0.8,0);

banner_Cultura.position.set(40,0,0)
banner_Cultura.scale.set(sizeBanner.x,sizeBanner.y,1)
banner_Cultura.rotation.set(0,-0.8,0);


gui.add(bannerGroup.position,"x").min(-500).max(500).step(0.01).name("positionGroupX")
gui.add(bannerGroup.position,"y").min(-500).max(500).step(0.01).name("positionGroupY")
gui.add(bannerGroup.position,"z").min(-500).max(500).step(0.01).name("positionGroupZ")
gui.add(bannerGroup.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotationGroupY")

gui.add(banner_quince.position,"x").min(-500).max(500).step(0.01).name("positionX")
gui.add(banner_quince.position,"y").min(-500).max(500).step(0.01).name("positionY")
gui.add(banner_quince.position,"z").min(-500).max(500).step(0.01).name("positionZ")
gui.add(banner_quince.scale,"x").min(-50).max(50).step(0.01).name("scalaX")
gui.add(banner_quince.scale,"y").min(-50).max(50).step(0.01).name("scalaY")
// gui.add(banner_quince.scale,"z").min(-50).max(50).step(0.01).name("positionZ")
// gui.add(banner_quince.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_quince.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_quince.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Arquitectura.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Arquitectura.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Arquitectura.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Moda.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Moda.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Moda.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Bebidas.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Bebidas.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Bebidas.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Grafica.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Grafica.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Grafica.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Musica.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Musica.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Musica.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

// gui.add(banner_Cultura.rotation,"x").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionX")
gui.add(banner_Cultura.rotation,"y").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionY")
// gui.add(banner_Cultura.rotation,"z").min(-Math.PI).max(Math.PI).step(0.01).name("rotacionZ")

//Animacion Banners
const multiplicadorSize = 1.10;
const duracionAnimacionZoom = 0.3;
banner_quince.addEventListener("hoverenter",()=>{
    gsap.to(banner_quince.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
        // banner_quince.scale.set(sizeBanner.x * multiplicadorSize,sizeBanner.y *multiplicadorSize,1)

})
banner_quince.addEventListener("hoverleave",()=>{
    gsap.to(banner_quince.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    // banner_quince.scale.set(sizeBanner.x,sizeBanner.y,1)

})

banner_Arquitectura.addEventListener("hoverenter",()=>{
    gsap.to(banner_Arquitectura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Arquitectura.addEventListener("hoverleave",()=>{
    gsap.to(banner_Arquitectura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Moda.addEventListener("hoverenter",()=>{
    gsap.to(banner_Moda.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Moda.addEventListener("hoverleave",()=>{
    gsap.to(banner_Moda.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})


banner_Bebidas.addEventListener("hoverenter",()=>{
    gsap.to(banner_Bebidas.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Bebidas.addEventListener("hoverleave",()=>{
    gsap.to(banner_Bebidas.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Grafica.addEventListener("hoverenter",()=>{
    gsap.to(banner_Grafica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Grafica.addEventListener("hoverleave",()=>{
    gsap.to(banner_Grafica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Musica.addEventListener("hoverenter",()=>{
    gsap.to(banner_Musica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Musica.addEventListener("hoverleave",()=>{
    gsap.to(banner_Musica.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

banner_Cultura.addEventListener("hoverenter",()=>{
    gsap.to(banner_Cultura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x*multiplicadorSize,y:sizeBanner.y*multiplicadorSize});
  
})
banner_Cultura.addEventListener("hoverleave",()=>{
    gsap.to(banner_Cultura.scale,{duration:duracionAnimacionZoom,x:sizeBanner.x,y:sizeBanner.y});

    
})

let intersectado
panoramaN3.addEventListener('click',function(event)
{
    if(event.intersects.length > 0){
        intersectado = event.intersects[0].object;
        if(intersectado.material)
        {
            bannerSeleccionado(intersectado);

            
        }
    }
})

const textoPrincipal = document.querySelector(".textoPrincipal");
const textoTitulo = document.querySelector(".tituloTexto");
var enBanner;

function bannerSeleccionado(banner)
{
    switch(banner)
    {
        case banner_quince:
            console.log("banner_quince")

            abrirPanelBanner();

            textoTitulo.innerHTML ="Titulo Quinceañera";
            textoPrincipal.innerHTML =
            "Este último núcleo busca explorar y desentrañar el mundo de Somos. Para construirlo echamos "+
            "mano del recurso de la “Doble pantalla” o Second Screen, que es una nueva manera de consumir "+
            "y disfrutar los productos audiovisuales que ofrecen las plataformas digitales. A través de "+
            "una segunda pantalla -que bien puede ser un dispositivo móvil-, el espectador es capaz de "+
            "buscar en la red, información complementaria sobre temas y sucesos representados en la "+
            "serie, y así informarse y documentarse sobre la historia y los personajes." + "<br/>"+
            "Delineamos entonces, ocho temas o casos de estudio, que dibujan el mundo de Somos., y nos permiten"+
            "revisar a los personajes, adentrarnos en su cotidianidad y su cultura, así como profundizar en la"+
            "complejidad de la región. Los temas seleccionados son: cultura y territorio, arquitectura del"+
            "noreste, cultura ganadera con la costumbre de la carne asada incluida; bebidas propias del norte "+
            "de México, la tradición de los rótulos y la gráfica popular que adorna calles y negocios; "+
            "la música norteña, las quinceañeras y sus celebraciones y por último, la moda tan particular "+
            "asociada a la zona fronteriza. Con breves clips extraídos de la producción, y múltiples recursos"+
            "existentes en Internet que complementan la experiencia y generan nuevas vetas de información, "+
            "estos temas tratados en la serie, nos permiten humanizar a los personajes, conocer su contexto "+
            "y repasar su cotidianidad. Al mismo tiempo, nos permiten acercarnos a la particular cultura de"+
            "un territorio como es el de Coahuila, con problemáticas sociales determinadas como son el "+
            "narcotráfico y la cercanía con Estados Unidos."+
            "Al explorar cada uno de estos temas, no sólo reconocemos a los personajes y su forma de vida "+
            "y convivencia, sino que también, accedemos a su colectividad y a su forma de encontrarse y "+
            "reconocerse, lo mismo en la intimidad que en el espacio público."
            
            break;
        case banner_Arquitectura: 
        console.log("banner_arq")   
        abrirPanelBanner();
        

        textoTitulo.innerHTML ="Titulo Arquitectura";
            textoPrincipal.innerHTML =
            "Este último núcleo busca explorar y desentrañar el mundo de Somos. Para construirlo echamos "+
            "mano del recurso de la “Doble pantalla” o Second Screen, que es una nueva manera de consumir "+
            "y disfrutar los productos audiovisuales que ofrecen las plataformas digitales. A través de "+
            "una segunda pantalla -que bien puede ser un dispositivo móvil-, el espectador es capaz de "+
            "buscar en la red, información complementaria sobre temas y sucesos representados en la "+
            "serie, y así informarse y documentarse sobre la historia y los personajes."+"<br/>"+
            "Delineamos entonces, ocho temas o casos de estudio, que dibujan el mundo de Somos., y nos permiten"+
            "revisar a los personajes, adentrarnos en su cotidianidad y su cultura, así como profundizar en la"+
            "complejidad de la región. Los temas seleccionados son: cultura y territorio, arquitectura del"+
            "noreste, cultura ganadera con la costumbre de la carne asada incluida; bebidas propias del norte "+
            "de México, la tradición de los rótulos y la gráfica popular que adorna calles y negocios; "+
            "la música norteña, las quinceañeras y sus celebraciones y por último, la moda tan particular "+
            "asociada a la zona fronteriza. Con breves clips extraídos de la producción, y múltiples recursos"+
            "existentes en Internet que complementan la experiencia y generan nuevas vetas de información, "+
            "estos temas tratados en la serie, nos permiten humanizar a los personajes, conocer su contexto "+
            "y repasar su cotidianidad. Al mismo tiempo, nos permiten acercarnos a la particular cultura de"+
            "un territorio como es el de Coahuila, con problemáticas sociales determinadas como son el "+
            "narcotráfico y la cercanía con Estados Unidos."+
            "Al explorar cada uno de estos temas, no sólo reconocemos a los personajes y su forma de vida "+
            "y convivencia, sino que también, accedemos a su colectividad y a su forma de encontrarse y "+
            "reconocerse, lo mismo en la intimidad que en el espacio público." 
            break;
        case banner_Moda: 
        console.log("banner_moda")
        textoTitulo.innerHTML ="Titulo Moda";
        abrirPanelBanner();

            break;
        case banner_Bebidas: 
        console.log("banner_bebida")
        textoTitulo.innerHTML ="Titulo Bebida";
        abrirPanelBanner();

            break;
        case banner_Grafica: 
        console.log("banner_grafica")
        textoTitulo.innerHTML ="Titulo Grafica";
        abrirPanelBanner();

            break;
        case banner_Musica: 
        console.log("banner_musica")
        textoTitulo.innerHTML ="Titulo Musica";
        abrirPanelBanner();

            break;
        case banner_Cultura: 
        console.log("banner_cultura")
        textoTitulo.innerHTML ="Titulo Cultura";
        abrirPanelBanner();

            break;
    }
    console.log(banner);

}

function abrirPanelBanner(){
    panelBanner.style.visibility ="visible";
    gsap.to(panelBanner,{duration:0.5,opacity:1});

}