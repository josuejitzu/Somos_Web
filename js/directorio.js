


function cambiarA(dir){

    if(dir === "lobby"){
       
        window.location.href =  document.documentElement.lang == "en" ? "lobby_en.html" : 'lobby.html';

    }
}


//BOTON GENERAL A LOBBY
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

                    window.location.href =  document.documentElement.lang == "en" ? "lobby_en.html" : 'lobby.html';

    }
  
    //directorio.cambiarA("lobby");

})

function idioma(){

    
}