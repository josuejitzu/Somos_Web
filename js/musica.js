const botonSilencio = document.querySelector(".audioSilencio");
let botonSilencioB;
const imgConAudio ="src/img/simbolos/AUDIO_negro.png";
const imgSinAudio ="src/img/simbolos/SIN_AUDIO_negro.png";
let muteado = false;
const botonFlecha = document.querySelector('.botonFlecha');
const botonIniciar = document.querySelector('.botonInicio');
const textoPiso = document.querySelector(".infoPista");
const textoPisoB = document.querySelector(".infoPistaB");
let pistaSeleccionadaA; 
let pistaseleccionadaB;
let pistaSeleccionadaC;
var reproductorA, reproductorB, reproductorC;

function obtenerNombrePagina(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log( page );
    return page;
}
var nombrePagina = obtenerNombrePagina()
console.log(nombrePagina)

const musciaPagina =
[
    ["home.html",
        [
            "SOMOS_101m02_SOMOS_STEREO.mp3",
            "SOMOS_101m03_The_Arrival_STEREO.mp3"
        ],
        [
            "Somos.",
            "The Arrival"
        ]
    ], 
    ["lobby.html",
        [
            "SOMOS_101m04_AA_Meeting_STEREO.mp3",
            "SOMOS_101m05_Flor_Maria_STEREO.mp3"
        ],
        
        [
            "AA Meeting",
            "Flor Maria"
        ]
    ],
    ["auditorio.html",
        [
            "SOMOS_106m25_El_Despertar_STEREO.mp3",
            
        ],
        [
            "El Despertar",
            "The Arrival"
        ]
    ],
    ["nucleo1.html",
        [
            "SOMOS_106m04_Hacienda_Somos_STEREO.mp3"
        ],
        [
            "Hacienda Somos.",
            
        ]
    ],
    ["nucleo2.html",
        [
            "SOMOS_101m29_Allende_STEREO.mp3",
            "SOMOS_102m33_Allende_Pueblo_STEREO.mp3"
        ],
        [
            "Allende",
            "Allende Pueblo"
        ]
    ],
    ["nucleo3.html",
        [
            "SOMOS_101m08_Silverio_STEREO.mp3",
            "SOMOS_101m13_Paquito_STEREO.mp3",
            "SOMOS_101m27_Nancy_STEREO.mp3"
        ],
        [
            "Silverio",
            "Paquito",
            "Nancy"
        ]
    ],
]

//BOTON SILENCIO

botonSilencio.addEventListener("click",()=>{
    console.log("audio")
    if(muteado){
        botonSilencio.src = imgConAudio;
        sound.mute(false);
        muteado = false;

        // reproductorA.mute(false);
        // if(nombrePagina != "auditorio.html")
        // reproductorB.mute(false);
        // if(nombrePagina =="nucleo3.html")
        // reproductorC.mute(false);

    }else{ 
        botonSilencio.src = imgSinAudio;

        // reproductorA.mute(true);
        // if(nombrePagina != "auditorio.html")

        // reproductorB.mute(true);
        // if(nombrePagina =="nucleo3.html")

        // reproductorC.mute(true);
        sound.mute(true);
        muteado = true;

    }
 

})



if(nombrePagina == "nucleo2.html")
{
    botonSilencioB = document.querySelector(".audioSilencioB");
    botonSilencioB.addEventListener("click",()=>{
        console.log("audio")
        if(muteado){
            botonSilencio.src = imgConAudio;
            botonSilencioB.src = imgConAudio;
            // reproductorA.mute(false);
            // reproductorB.mute(false);
            // reproductorC.mute(false);
            sound.mute(false);

            muteado = false;

        }else{ 
            botonSilencio.src = imgSinAudio;
            botonSilencioB.src = imgSinAudio;

            // reproductorA.mute(true);
            // reproductorB.mute(true);
            // reproductorC.mute(true);
            sound.mute(true);

            muteado = true;

        }
    

    })
}



//[pagina][pistas][pista]
//pistaSeleccionadaA = musciaPagina[1][1][0]
var textoA,textoB,textoC;
function cargarPista()
{

    if(nombrePagina == "home.html"){
        
        //  pistaSeleccionadaA = musciaPagina[0][1][0]
        //  pistaSeleccionadaB = musciaPagina[0][1][1]
        //  textoA = musciaPagina[0][2][0]
        //  textoB = musciaPagina[0][2][1]
        reproducir(0,0);

    }
    else if(nombrePagina == "lobby.html")
    {
        pistaSeleccionadaA = musciaPagina[1][1][0]
        pistaSeleccionadaB = musciaPagina[1][1][1]
        textoA = musciaPagina[1][2][0]
        textoB = musciaPagina[1][2][1]
        reproducir(1,0);


    }
    else if(nombrePagina == "auditorio.html")
    {
        pistaSeleccionadaA = musciaPagina[2][1][0]
        textoA = musciaPagina[2][2][0]
        textoB = musciaPagina[2][2][1]

        reproducir(2,0);
        
      
    }
    else if(nombrePagina == "nucleo1.html")
    {
        pistaSeleccionadaA = musciaPagina[3][1][0]
        pistaSeleccionadaB = musciaPagina[3][1][1]
        textoA = musciaPagina[3][2][0]
        textoB = musciaPagina[3][2][1]
        reproducir(3,0);

    }
    else if(nombrePagina == "nucleo2.html")
    {
        pistaSeleccionadaA = musciaPagina[4][1][0]
        pistaSeleccionadaB = musciaPagina[4][1][1]
        textoA = musciaPagina[4][2][0]
        textoB = musciaPagina[4][2][1]
        reproducir(4,0);


    }
    else if(nombrePagina == "nucleo3.html")
    {
        pistaSeleccionadaA = musciaPagina[5][1][0]
        pistaSeleccionadaB = musciaPagina[5][1][1]
        pistaSeleccionadaC = musciaPagina[5][1][2]
        textoA = musciaPagina[5][2][0]
        textoB = musciaPagina[5][2][1]
        textoC = musciaPagina[5][2][2]
        reproducir(5,0);


    }
    return;
    
    // console.log(pistaSeleccionadaA);
    // textoPiso.innerHTML = "Somos. - Victor Hernandez Stumphauser";
    cambiarNombrePista();


    
    reproductorA = new Howl({ 
    src:["src/musica/"+pistaSeleccionadaA],
    // autoplay:true,
    volume:0.5,
    // loop:true,
    html:true,
    // mute:true
    }
    )
    

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
        console.log("reproduciendoA");
        cambiarNombrePista(textoA);

    })
    reproductorA.on('end', function(){
        console.log('Finished A!');
        if("auditorio.html" != nombrePagina  || "home.html" != nombrePagina  )
        {   
            console.log(nombrePagina)
            reproductorB.play();
            console.log("reproduciendoB");
            cambiarNombrePista(textoB);


        }else{
             reproductorB.stop();
            //Howler.stop();
        }
    });
    reproductorB.on('end', function(){
        console.log('Finished B!');
        if(nombrePagina=="nucleo3.html")
        {

            reproductorC.play();
            cambiarNombrePista(textoC);

            console.log("reproduciendoC");

        }
    });
    reproductorC.on('end', function(){
        console.log('Finished C!');
        // reproductorB.play();
    });


}
cargarPista();

var sound;

///i=pagina,j=desde que pista
function reproducir(i,j)
{
     sound = new Howl({
        src: ["src/musica/"+ musciaPagina[i][1][j]],
        volume:0.5,
        html:true,
        onend: function(){
            // console.log("pista fin");
            if(j + 1 == musciaPagina[0][0].length)
            {
                console.log("no mas pistas")
            }else{
                if(nombrePagina != "home.html")
                {

                    console.log("reproduciendo pista 2")
                    reproducir(i,j+1)
                }
            }
        }
    
    })
    sound.play();


    cambiarNombrePista( musciaPagina[i][2][j]);


}
 
var botonCerrar = document.getElementById("botonCerrar");
botonCerrar.addEventListener('click',()=>
{
    reproductorA.fade(1,0,1000);
    reproductorB.fade(1,0,1000);
    reproductorC.fade(1,0,1000);
  
    //directorio.cambiarA("lobby");

})

if(botonFlecha !== null){

    botonFlecha.addEventListener('click',()=>{
        sound.stop();
        reproducir(0,1);
    
    });
}

// })
if(botonIniciar !== null)
{
    botonIniciar.addEventListener('click',()=>{
        // reproductorA.stop();
        // var id1 = reproductorA;
        // reproductorA.fade(1, 0, 1000, id1);
        // reproductorB.play();
        sound.stop();
        reproducir(0,1);
    })
}

function cambiarNombrePista(pista)
{
    
    textoPiso.innerHTML = pista ;//+ " - Victor Hernández Stumphauser";
    if(textoPisoB)
        textoPisoB.innerHTML = pista;
    if(pista == null||pista==" ")
    {

        textoPiso.innerHTML = "Somos." ;//+ "- Victor Hernández Stumphauser";

    }

    console.log("cambiando nombre");
}

function callarMusica(){


    // console.log("audio")
    // if(muteado){
        // botonSilencio.src = imgConAudio;
        // reproductorA.mute(false);
        // if(nombrePagina != "auditorio.html")
        // reproductorB.mute(false);
        // if(nombrePagina =="nucleo3.html")
        // reproductorC.mute(false);
        // muteado = true;

    // }else{ 
        botonSilencio.src = imgSinAudio;

        // reproductorA.mute(true);
        // if(nombrePagina != "auditorio.html")

        // reproductorB.mute(true);
        // if(nombrePagina =="nucleo3.html")

        // reproductorC.mute(true);
        sound.mute(true);

        muteado = true;

    // }

}

window.addEventListener('load',()=>{
    // reproductorA.play();
})

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log("DOM fully loaded and parsed");
    // reproductorA.play();
    // sound.play();
  });