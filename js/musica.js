const botonSilencio = document.querySelector(".audioSilencio");
let muteado = false;

const imgConAudio ="src/img/simbolos/AUDIO.png";
const imgSinAudio ="src/img/simbolos/SIN_AUDIO.png";


function nombrePagina(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( page );
    return page;
}


const musciaPagina =
[
    ["home.html",
        [
            "SOMOS_101m02_SOMOS_STEREO.mp3",
            "SOMOS_101m03_The_Arrival_STEREO.mp3"
        ]
    ], 
    ["lobby.html",
        [
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ]
    ],
    ["auditorio.html",
        [
            "SOMOS_106m25_El_Despertar_STEREO",
            
        ]
    ],
    ["nucleo1.html",
        [
            "SOMOS_106m04_Hacienda_Somos_STEREO.mp3"
        ]
    ],
    ["nucleo2.html",
        [
            "SOMOS_101m29_Allende_STEREO.mp3",
            "SOMOS_102m33_Allende_Pueblo_STEREO.mp3"
        ]
    ],
    ["nucleo3.html",
        [
            "SOMOS_101m08_Silverio_STEREO.mp3",
            "SOMOS_101m13_Paquito_STEREO.mp3",
            "SOMOS_101m27_Nancy_STEREO"
        ]
    ],
]

var pistaSeleccionadaA, pistaseleccionadaB, pistaSeleccionadaC;

botonSilencio.addEventListener("click",()=>{
    console.log("audio")
    if(muteado){
        botonSilencio.src = imgConAudio;
        reproductorA.mute(false);
        reproductorB.mute(false);
        reproductorC.mute(false);
        muteado = false;

    }else{ 
        botonSilencio.src = imgSinAudio;

        reproductorA.mute(true);
        reproductorB.mute(true);
        reproductorC.mute(true);
        muteado = true;

    }
 

})


var reproductorA, reproductorB, reproductorC;
//[pagina][pistas][pista]
//pistaSeleccionadaA = musciaPagina[1][1][0]

function cargarPista()
{
    if(nombrePagina() == "home.html"){

         pistaSeleccionadaA = musciaPagina[0][1][0]
         pistaSeleccionadaB = musciaPagina[0][1][1]

    }
    else if(nombrePagina() == "lobby.html")
    {
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
    }
    else if(nombrePagina() == "auditorio.html")
    {
        pistaSeleccionadaA = musciaPagina[2][1][0]
        pistaSeleccionadaB = musciaPagina[2][1][1]
    }
    else if(nombrePagina() == "nucleo1.html")
    {
        pistaSeleccionadaA = musciaPagina[3][1][0]
        pistaSeleccionadaB = musciaPagina[3][1][1]
    }
    else if(nombrePagina() == "nucleo2.html")
    {
        pistaSeleccionadaA = musciaPagina[4][1][0]
        pistaSeleccionadaB = musciaPagina[4][1][1]
    }
    else if(nombrePagina() == "nucleo3.html")
    {
        pistaSeleccionadaA = musciaPagina[5][1][0]
        pistaSeleccionadaB = musciaPagina[5][1][1]
        pistaSeleccionadaC = musciaPagina[5][1][2]
    }
    
    console.log(pistaSeleccionadaA);
    
    reproductorA = new Howl({ 
    src:["src/musica/"+pistaSeleccionadaA],
    // autoplay:true,
    volume:0.5,
    // loop:true,
    html:true,
    // mute:true
    })
    reproductorB = new Howl({ 
        src:["src/musica/"+pistaSeleccionadaB],
        // autoplay:true,
        volume:0.5,
        // loop:true,
        html:true,
        // mute:true
    })
    reproductorC = new Howl({ 
        src:["src/musica/"+pistaSeleccionadaC],
        // autoplay:true,
        volume:0.5,
        // loop:true,
        html:true,
        // mute:true
    })
  

    // muteado = reproductor.mute;


    reproductorA.once('load',()=>{
        console.log("audio Cargado");
        // reproductorA.play();
    })
    reproductorA.on('end', function(){
        console.log('Finished!');
        reproductorB.play();
    });
    reproductorB.on('end', function(){
        console.log('Finished!');
        if(nombrePagina()=="nucleo3.html")
        {

            reproductorC.play();
        }
    });
    reproductorC.on('end', function(){
        console.log('Finished!');
        // reproductorB.play();
    });

}
cargarPista();
 
var botonCerrar = document.getElementById("botonCerrar");
botonCerrar.addEventListener('click',()=>
{
    reproductorA.fade(1,0,1000);
    reproductorB.fade(1,0,1000);
    reproductorC.fade(1,0,1000);
  
    //directorio.cambiarA("lobby");

})