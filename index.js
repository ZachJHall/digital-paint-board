let digitalCanvas = document.getElementById("paint-canvas");

let ctx = digitalCanvas.getContext("2d");

let mouseDown = null

let paintColor = 'blue'

//Paint Colors

let blueButton = document.getElementById("blue-selector");
blueButton.onclick = function(){paintColor='blue'};

let greenButton = document.getElementById("green-selector");
greenButton.onclick = function(){paintColor='green'};

let redButton = document.getElementById("red-selector");
redButton.onclick = function(){paintColor='red'};

let yellowButton = document.getElementById("yellow-selector");
yellowButton.onclick = function(){paintColor='yellow'};

let blackButton = document.getElementById("black-selector");
blackButton.onclick = function(){paintColor='black'};

let eraserButton = document.getElementById("eraser-selector");
eraserButton.onclick = function(){paintColor='white'};

//

//brush sizes
let radius = 40;

let largeBrushButton = document.getElementById("large-brush-selector");
largeBrushButton.onclick = function(){radius = 60};

let mediumBrushButton = document.getElementById("medium-brush-selector");
mediumBrushButton.onclick = function(){radius = 40};

let smallBrushButton = document.getElementById("small-brush-selector");
smallBrushButton.onclick = function(){radius = 20};

let tinyBrushButton = document.getElementById("tiny-brush-selector");
tinyBrushButton.onclick = function(){radius = 10};

//Clear Canvas
let clearCanvasButton = document.getElementById("clear-canvas-selector");
clearCanvasButton.onclick = function(){digitalCanvas.width = digitalCanvas.width};




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

   // ctx.fillRect(mousePosition.x,mousePosition.y,10,10); square

   ctx.beginPath();
   ctx.arc(mousePosition.x, mousePosition.y, radius, 0, 2 * Math.PI);
   ctx.fillStyle = paintColor;
   ctx.fill();

})


digitalCanvas.addEventListener('mousemove', function(){
  if (mouseDown === true) {
    mousePosition = getMousePosition(digitalCanvas, event)

    ctx.beginPath();
    ctx.arc(mousePosition.x, mousePosition.y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = paintColor;
    ctx.fill();


  }

})


digitalCanvas.addEventListener('mouseup', function(){
  mouseDown = false
  console.log(mouseDown)
})
