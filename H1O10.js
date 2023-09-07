function setup() {
  canvas = createCanvas(450,450);
  textFont("Verdana");
  textSize(14);
  noStroke();
  background('lavender');
  //noLoop();
}

function draw() {
  fill('wheat');
  rect(0,0,450,30)
  fill('black');
  text("mouseX:" + round(mouseX) + " mouseY:"+round(mouseY),10,20);
  fill('indianred');
  ellipse(mouseX,mouseY,10);
}

/* Antwoorden vragen 

1. Hij heeft zowel de hoogte als de breedte door 2 gedeelt.
2. Als het in de draw zit dan gaat ie ook loopen, en de vorige stippen worden verwijderd omdat de background nogmals getekent wordt boven die. Nu is de background alleen deel van de setup, dus de vorige stippen blijven in het scherm.

*/