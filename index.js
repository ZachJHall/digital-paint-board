let digitalCanvas = document.getElementById("paint-canvas");

let ctx = digitalCanvas.getContext("2d");



let mouseDown = 2

function getMousePosition(digitalCanvas, event) {
  let rect = digitalCanvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

digitalCanvas.addEventListener('mousedown', function(){
   mouseDown = true
   console.log(mouseDown)
   mousePosition = getMousePosition(digitalCanvas, event)

   ctx.fillRect(mousePosition.x,mousePosition.y,10,10);

})

digitalCanvas.addEventListener('mousemove', function(){
  if (mouseDown === true) {
    mousePosition = getMousePosition(digitalCanvas, event)

    ctx.fillRect(mousePosition.x,mousePosition.y,10,10);
  }

})



digitalCanvas.addEventListener('mouseup', function(){
  mouseDown = false
  console.log(mouseDown)
})

function whileMouseDown() {

  mousePosition = getMousePosition(digitalCanvas, event)

  ctx.fillRect(mousePosition.x,mousePosition.y,10,10);

}
