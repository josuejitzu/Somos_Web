

//DEBUG para probar llamado
// const botonSilencioTest = document.querySelector(".audioSilencio");
// botonSilencioTest.addEventListener('click',()=>{
//     activarBotones();
// })

function activarBotones(){
    activarBotonesDinamicos();
    console.log("Se activaron externamente");
}

$(document).ready(function() {
  
			
    function checkbut(){
    	$.ajax({
    			url:"https://venteli.mx/botones/function/Change.php",
    			type:"POST",
    			success:function(data){
    				if(data == 0){
    					// $("#divbt").removeClass("sbtn");
    					// $("#divbt").addClass("hbtn");
                        console.log("desactivado")
    				}
    				if(data == 1){
    					// $("#divbt").addClass("sbtn");
    					// $("#divbt").removeClass("hbtn");
                        console.log("activado")
                        activarBotones();

    				}
    }
  }); 
    }  

    setInterval(checkbut, 2000);
             

});