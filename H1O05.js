function setup() {
  canvas = createCanvas(450,450);
  background('cornflowerblue');
  noLoop();
}

function draw(){
  noStroke();
  fill('tan');
  translate(25,25);
  rect(0,0,400,400);
  translate(200,50);
  fill('peru');
  rect(0,0,150,150);
}

/* Antwoorden vragen

2. Het huis wordt omhoog verschuift, omdat de y coördinaat boven begint
3. Ja. Alles na de translate wordt verschuift, maar nadat het huis alleen één keer verschuift is, worden andere dingen twee keer verschuift: één keer met het huis en de tweede terug naar de oorspronkelijke positie, daarom zijn de getallen het tegenovergestelde van de getallen bij de translate voor het huis. 

*/