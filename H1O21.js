var x = 120;
var snelheid = 5;
var diameter = 200;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent();
  textFont("Verdana");
  textSize(30);
  frameRate(50);
}

function draw() {
  background('orange');
  fill('white');
  noStroke();
  rect(0,0,width,40);
  fill('black');  
  text("De bol beweegt heen en weer (snelheid = " + snelheid + "). | Klik met je muis!",10,30);
  stroke('white');
  strokeWeight(10);

  if (snelheid == 5 && mouseIsPressed == false) {
      fill('green');
  } else if (mouseIsPressed == true) {
    fill('red');
  } else {
    fill('dodgerblue');
  }

  if (mouseIsPressed == true) {
    diameter = 100;
  } else {
    diameter = 200;
  }
  
  if (x>880 || x<120) {
    snelheid = -1*snelheid;
  }
  

  x += snelheid;
  ellipse(x,170,diameter);
}

/* Antwoorden vragen

3. 
  a. Als het naar links gaat.
  b. Nooit.
  c. Niets verandert.
7. De diameter heeft precies de omgekeerde relatie met mouseIsPressed dan als er true staat.

*/