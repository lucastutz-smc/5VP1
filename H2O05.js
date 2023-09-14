var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var spriteJos;
var xJos;
var yJos;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  spriteJos = loadImage("images/sprites/Jos100px/Jos_0.png");
}

function setup() {
  canvas = createCanvas(901,601);
  canvas.parent();
  celGrootte = width / aantalKolommenRaster;
  xJos = 4 * celGrootte;
  yJos = 3 * celGrootte;
}

function draw() {
  background(brug)
  tekenRaster();
  image(spriteJos,xJos,yJos,celGrootte,celGrootte)
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  /*
  Maak hieronder een dubbele herhaling om een raster te maken.
  HINT: je kunt terugkijken naar het raster dat je in H1 hebt gemaakt.
  Maak gebruik van de variabelen die bovenaan zijn gedeclareerd.
  */

  for (let i = 0; i < aantalKolommenRaster; i++) {
    for (let j = 0; j < aantalRijenRaster; j++) {
      rect(i * celGrootte, j * celGrootte,celGrootte);
    }
  }
  
  pop();
}

/* Antwoorden vragen

2. Regel 17. 100.

*/