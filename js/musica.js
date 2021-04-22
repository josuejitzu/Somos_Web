const botonSilencio = document.querySelector(".audioSilencio");
let muteado = false;



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
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
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
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ]
    ],
    ["nucleo1.html",
        [
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ]
    ],
    ["nucleo2.html",
        [
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ]
    ],
    ["nucleo3.html",
        [
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ]
    ],
]

var pistaSeleccionadaA, pistaseleccionadaB, pistaSeleccionadaC;

botonSilencio.addEventListener("click",()=>{
    console.log("audio")
    if(muteado){
        reproductorA.mute(false);
        reproductorB.mute(false);
        reproductorC.mute(false);
        muteado = false;

    }else{ 
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
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
    }
    else if(nombrePagina() == "nucleo1.html")
    {
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
    }
    else if(nombrePagina() == "nucleo2.html")
    {
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
    }
    else if(nombrePagina() == "nucleo3.html")
    {
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
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
        reproductorA.play();
    })
    reproductorA.on('end', function(){
        console.log('Finished!');
        reproductorB.play();
    });
    reproductorB.on('end', function(){
        console.log('Finished!');
        reproductorC.play();
    });
    reproductorC.on('end', function(){
        console.log('Finished!');
        // reproductorB.play();
    });

}
cargarPista();
 
