var animatie = [];
var aantalBeeldjes = 3;
var nummer = 0;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b +".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(460,460);
  canvas.parent();
  noStroke();
  frameRate(5);
  textFont("Georgia");
  textSize(18);
}

function draw() {
  background('lavender');
  image(animatie[nummer],80,160,300,300);
  nummer++;

  if (nummer == aantalBeeldjes) {
    nummer = 0;
  }
  
  text("frameCount=" + frameCount,5,20);
  text("nummer=" + nummer,5,40);
}

/* Antwoorden vragen

2. De positie en grootte van JOS verandert. Goed.
3. De loop gebeurt vaker per seconde, dus het lijkt alsof de snelheid waarmee JOS zijn ogen beweegt omhoog gaat.

*/