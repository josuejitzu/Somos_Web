const checkpoint = 100;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
    opacityB = 0 + currentScroll / checkpoint;
  } else {
    opacity = 0;
    opacityB = 1;
  }
  document.querySelector(".bloquea").style.opacity = opacity;

 

  document.querySelector(".logosinicio").style.opacity = opacityB; 
});