var img;  
var img2;
var bg;

function setup()
{
    createCanvas(900,900);
    bg = loadImage("back.jpg");
    img = loadImage("star1.png");
    img2 = loadImage("earth.png")
  // Load the image 
}

function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 


    var duration = 5000;
    var timing = (new Date()%duration)/duration;


	// Displays the image at its actual size at point (0,0)
	image(img, 450 + Math.cos(timing*2*PI)*200 - 8.5, 450 + Math.sin(timing*2*PI)*200 - 8.5);

    //지구
	fill(255);
    ellipse(450 + Math.cos(timing*2*PI)*350,                       
    450 + Math.sin(timing*2*PI)*350,
    100, 100);  

    //달
	fill(255*random);
    ellipse(450 + Math.cos(timing*2*PI)*350 + Math.cos(timing*4*PI)*80,                       
    450 + Math.sin(timing*2*PI)*350 + Math.sin(timing*4*PI)*80,
    30, 30);  

    //수성
    var duration = 7000;
    var timing = (new Date()%duration)/duration;

    fill(197,182,182);
    ellipse(450 + Math.cos(timing*2*PI)*200,                       
    450 + Math.sin(timing*2*PI)*200,
    10, 10);  

    //금성
    var duration = 7600;
    var timing = (new Date()%duration)/duration;

    fill(169,127,93);
    ellipse(450 + Math.cos(timing*2*PI)*250,                       
    450 + Math.sin(timing*2*PI)*250,
    50, 50);  

}