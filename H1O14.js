var xJOS = 225;
var yJOS = 375;
let snelheidJOS = 17

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent();
  textFont("Verdana");
  textSize(14);
  frameRate(30);
}

function draw() {
  background('lavender');
  fill('black');
  yJOS -= snelheidJOS;
  snelheidJOS -= 0.5

  xJOS=constrain(xJOS,75,width-75);
  yJOS=constrain(yJOS,75,height-75);
  text("x = " + round(xJOS) + " y = " + yJOS,10,20);
  text('Snelheid JOS = '+ snelheidJOS, 285,20)
  
  translate(xJOS,yJOS);

  // in de volgende regels wordt JOS getekend

  push();
  scale(1);  
  noStroke();
  fill('indianred');
  ellipse(0,0,150);
  fill('slategray');
  ellipse(-20,-30,50);
  ellipse(20,-30,50);
  fill('white');
  ellipse(-20,-25,20,40);
  ellipse(20,-25,20,40);
  fill('orange');
  ellipse(0,10,50);
  stroke('slategray');
  strokeWeight(10);
  fill('white');
  arc(0, 40, 80, 40, 0, PI, CHORD);
  pop();
  // einde tekenen JOS

}

/* Antwoorden vragen

8. De hoeveelheid die yJOS verandert per tijdseenheid wordt steeds kleiner, totdat het negatief is. De yJOS moet altijd de ‘snelheid’ aftrekken van de y-coördinaat, dus als de snelheid negatief is, wordt de y-coördinaat steeds groter. 

*/