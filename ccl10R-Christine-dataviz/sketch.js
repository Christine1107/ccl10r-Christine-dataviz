let data;
function preload(){
  data = loadJSON("pose.json");
}

function setup() {

  createCanvas(500, 500);
}

function draw() {
  background(0);

  for (key in data){
    fill(255);
    circle(data.bodypoints[key], data.bodypoints[key], 10,10 );
  }
}
