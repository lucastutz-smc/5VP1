var kater,katerKlein,landschap,kever;
var keverX;
var keverY;

function preload() {
  kater = loadImage("images/brieck.jpg");
  bomen = loadImage("images/bomen.jpg");
  kever = loadImage("images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent();
  keverX = 150;
  keverY = 100;
}

function draw() {
  background('grey');  
  image(kater,25,25,400,400);
  keverX+=random(-5,5);
  keverY+=random(-5,5);
  image(kever,keverX,keverY,30,30);
}

/* Antwoorden vragen

3. brieck.jpg
4. De breedte van de canvas is niet dezelfde als de breedte van de afbeelding, dus als beeld heeft het zijn eigen breedte, als achtergrond krijgt het de breedte van de canvas.
6. Er is een grijze rand. Breedte en hoogte.
7. De positie van de kever verandert willekeurig, tot 5 pixels in elke richting.

*/