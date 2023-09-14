var strand;
var strandX = 0;

function preload() {
  strand = loadImage("images/backgrounds/strand.jpg");
}

function setup() {
  canvas = createCanvas(600,400);
  canvas.parent();
  frameRate(90)
}

function draw() {
  background('grey');
  image(strand,strandX,0);
  image(strand,strandX + strand.width,0);  

  strandX--;
  
  if (strandX == (0 - strand.width)) {
    strandX = 0;
    image(strand,strandX + strand.width,0);
  }
}

/* Antwoorden vragen

2. 0
3. width (600)
4. Nee

*/