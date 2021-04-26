
var i = 0;

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
    var id = setInterval(frame, 20);
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
        // ocultarLoad();
    }else{ i++
        bar1.set(i);
    }
    }
  }
//    loadBar.set(2);
}
move()

function ocultarLoad(){
  console.log("ocultar load")
  document.querySelector(".panelCarga").style.opacity = 0.0;
  //document.querySelector(".panelCarga").style.visibility = "hidden";
}