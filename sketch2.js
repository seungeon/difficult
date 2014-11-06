var img;  
var img2;
var bg;
var img3;

function setup()
{
    createCanvas(900,900);
    bg = loadImage("back.jpg");
    img = loadImage("star1.png");
    img2 = loadImage("earth.png")
    img3 = loadImage("moon.png")
    img4 = loadImage("starcopy.png")
  // Load the image 
}

function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 


    var duration = 8000;
    var timing = (new Date()%duration)/duration;


	// Displays the image at its actual size at point (0,0)
	image(img, 450 + Math.cos(timing*2*PI)*200 - 8.5, 450 + Math.sin(timing*2*PI)*200 - 8.5);

    //지구
    var duration = 7500;
    image(img2, 450 + Math.cos(timing*2*PI)*350 - 37.5, 450 + Math.sin(timing*2*PI)*350 - 37.5);
	/*fill(255);
    ellipse(450 + Math.cos(timing*2*PI)*350,                       
    450 + Math.sin(timing*2*PI)*350,
    100, 100); */ 

    //달

    image(img3,450 + Math.cos(timing*2*PI)*350 - 25 + Math.cos(timing*4*PI)*80,                       
    450 + Math.sin(timing*2*PI)*350 - 25 + Math.sin(timing*4*PI)*80)

    /*
	fill(255);
    ellipse(450 + Math.cos(timing*2*PI)*350 - 3.75 + Math.cos(timing*4*PI)*80,                       
    450 + Math.sin(timing*2*PI)*350 - 3.75 + Math.sin(timing*4*PI)*80,
    30, 30);  */

    //수성
    var duration = 6000;
    var timing = (new Date()%duration)/duration;

    fill(0);
    ellipse(450 + Math.cos(timing*2*PI)*200,                       
    450 + Math.sin(timing*2*PI)*200,
    10, 10);  

    //금성
    var duration = 9000;
    var timing = (new Date()%duration)/duration;


    image(img4,450 + Math.cos(timing*2*PI)*250,450 + Math.sin(timing*2*PI)*250)

/*
    fill(169,127,93);
    ellipse(450 + Math.cos(timing*2*PI)*250,                       
    450 + Math.sin(timing*2*PI)*250,
    50, 50);  
*/
}