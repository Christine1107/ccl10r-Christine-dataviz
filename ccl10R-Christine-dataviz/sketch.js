let data;

function preload(){
	data = loadJSON("pose.json");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {

	background(255);
	
	
	strokeWeight(5);
	stroke(0);
	
	for (let key = 0; key< data.bodypoints.length; key++){
	
	circle(data.bodypoints[key].x, data.bodypoints[key].y,10);
	}
  beginShape();
	
	
	line(data.bodypoints[7].x, data.bodypoints[7].y, data.bodypoints[9].x, data.bodypoints[9].y);
  line(data.bodypoints[10].x, data.bodypoints[10].y, data.bodypoints[7].x, data.bodypoints[7].y);
	circle(data.bodypoints[12].x-20, data.bodypoints[9].y-100, 70);
  line(data.bodypoints[12].x, data.bodypoints[12].y, data.bodypoints[14].x, data.bodypoints[14].y);
  line(data.bodypoints[14].x, data.bodypoints[14].y, data.bodypoints[16].x, data.bodypoints[16].y);
	
	
	 line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[6].x, data.bodypoints[6].y);
  line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[7].x, data.bodypoints[7].y);
  line(data.bodypoints[7].x, data.bodypoints[7].y, data.bodypoints[9].x, data.bodypoints[9].y);
  line(data.bodypoints[6].x, data.bodypoints[6].y, data.bodypoints[8].x, data.bodypoints[8].y);
  line(data.bodypoints[8].x, data.bodypoints[8].y, data.bodypoints[10].x, data.bodypoints[10].y);

  line(data.bodypoints[5].x, data.bodypoints[5].y, data.bodypoints[11].x, data.bodypoints[11].y);
  line(data.bodypoints[6].x, data.bodypoints[6].y, data.bodypoints[12].x, data.bodypoints[12].y);
  line(data.bodypoints[11].x, data.bodypoints[11].y, data.bodypoints[12].x, data.bodypoints[12].y);

  line(data.bodypoints[11].x, data.bodypoints[11].y, data.bodypoints[13].x, data.bodypoints[13].y);
  line(data.bodypoints[13].x, data.bodypoints[13].y, data.bodypoints[15].x, data.bodypoints[15].y);
  line(data.bodypoints[12].x, data.bodypoints[12].y, data.bodypoints[14].x, data.bodypoints[14].y);
  line(data.bodypoints[14].x, data.bodypoints[14].y, data.bodypoints[16].x, data.bodypoints[16].y);

	
	
	
	
 
	
}
