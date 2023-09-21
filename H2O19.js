let raster = {
  aantalRijen: 6,
  aantalKolommen: 9,
  celGrootte: null,

  berekenCelGrootte() {
    this.celGrootte = width / this.aantalKolommen;
  },

  teken() {
    push();
    noFill();
    stroke('grey');
    for (var rij = 0;rij < this.aantalRijen;rij++) {
      for (var kolom = 0;kolom < this.aantalKolommen;kolom++) {
        rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
      }
    }
    pop();
  }
}

let noMovement;
let lastMovement;

var animatie = [];
var aantalBeeldjes = 7;
var nummer = 3;
var frame;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  for (var b = 0;b < aantalBeeldjes;b++) {
    frame = loadImage("images/sprites/Jos100px/Jos_" + b + ".png");
    animatie.push(frame);
  }
}

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent();
  frameRate(10);
  raster.berekenCelGrootte();
}

function draw() {
  background(brug);
  raster.teken();

  if (keyIsDown(LEFT_ARROW)) {
    xJos -= raster.celGrootte;
    nummer = 2;
    lastMovement = 'horizontal';
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos+=raster.celGrootte;
    nummer=1;
    lastMovement = 'horizontal';
  }
  if (keyIsDown(UP_ARROW)) {
    yJos -= raster.celGrootte;
    nummer = 4;
    lastMovement = 'vertical';
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += raster.celGrootte;
    nummer = 5;
    lastMovement = 'vertical';
  }

//De ogen van Jos keren terug als hij op stilstaat.
  if ((keyIsDown(LEFT_ARROW) == false) && (keyIsDown(RIGHT_ARROW) == false) && (keyIsDown(UP_ARROW) == false) && (keyIsDown(DOWN_ARROW) == false) && (nummer != 6)) {
    noMovement = true;
  } else {
    noMovement = false;
  }

  if (noMovement && lastMovement == "vertical") {
    nummer = 3;
  } else if (noMovement && lastMovement == "horizontal") {
    nummer = 0;
  }

  if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW) &&   keyIsDown(UP_ARROW) && keyIsDown(DOWN_ARROW)) {
    nummer = 6;
  }
  
  xJos = constrain(xJos,0,width - raster.celGrootte);
  yJos = constrain(yJos,0,height - raster.celGrootte);
  
  image(animatie[nummer],xJos,yJos,raster.celGrootte,raster.celGrootte);
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

7. var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;
8. Ja.

*/