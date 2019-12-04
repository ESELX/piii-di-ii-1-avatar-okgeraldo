

function setup() {
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(400,400);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');


}

function draw() {
  background(210);
  posX=mouseX
  posY=mouseY

  fill(237, 245, 252);
  stroke(20,20,20);
  strokeWeight(1)
  circle(200, 200, 300);
  fill(250, 153, 0)
  strokeWeight (0)
  triangle (180, 200, 200, 60, 30, 20);
  fill (0, 0, 0);
  triangle (180, 200, 195,80, 30, 20);
  fill (240, 130, 4);
  triangle (180, 200, 195,80, 30, posY);
  fill (246, 0, 1);
  ellipse ( 300, 350, 100, 80);
  ellipse ( 280, 350, 200, 70);
  ellipse ( 70, 400, 100, 80);
  fill(20,20,20);
  ellipse (200,400, 380, 380);
  translate (300,100);
  rotate (angle);
  stroke (0,0,0)
  strokeWeight(1);
  fill(246, 0, 1);
  circle (0, 0, 50);
  fill(20,20,20);
  circle (0, 0, 10);
  circle (0, 15, 8);
  circle (0, -15, 8);
  translate (0,0);
  fill (250, 255, 254)
  stroke(255,255,255);
  strokeWeight(3);

  angle= angle + 0.05;





}
