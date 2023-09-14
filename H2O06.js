var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent();
  frameRate(10);
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  background(brug);
  tekenRaster();

  if (keyIsDown(RIGHT_ARROW)) {
    xJos += celGrootte;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xJos -= celGrootte;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos -= celGrootte;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += celGrootte;
  }
  
  xJos = constrain(xJos,0,width - celGrootte);
  yJos = constrain(yJos,0,height - celGrootte);
  
  image(spriteJos,xJos,yJos);

  if (xJos == 6*celGrootte && yJos == 4*celGrootte) {
    spriteJos.resize(50,50);
  }
  if ((xJos == 5*celGrootte && yJos == 2*celGrootte) || (xJos == 3*celGrootte && yJos == 1*celGrootte)) {
    spriteJos.filter(ERODE);
  }
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalRijenRaster;rij++) {
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  pop();
}

/* Antwoorden vragen 

1. Eén celgrootte.
3. Onafhankelijk van hoeveel cellen en de breedte van de canvas gaat JOS niet verderdan de canvasranden.
5. Als JOS een bepaalde plek bereikt, wordt het kleiner.
6. Als JOS de vrouw bereikt wordt het kleiner
*/