//INIZIALIZZAZIONI
function setup(){
	//canvas
	width=400;
	height=400;
	createCanvas(width, height);
	noStroke();

	//perlin noise
	//seed=Math.random()*100;
	//noiseSeed(seed);


	//input
	//contaInput=16;

	background(0);
	resolution=3;

	for(var y=0; y<height; y+=resolution){ 
		for (var x=0; x<width; x+=resolution){
			z=255*noise(x*0.01, y*0.01);
			fill(z-10, z-10, z+10);
			rect(x, y, resolution, resolution);
		}
	}

	//input
	// if (keyIsDown(RIGHT_ARROW) && contaInput>15){
	// 	seed+=10;
	// 	contaInput=0;
	// }
	// else if (keyIsDown(LEFT_ARROW) && contaInput>=15){
	// 	seed-=10;
	// 	contaInput=0;
	// }
	// else if (keyIsDown(UP_ARROW)&& contaInput>15){
	// 	seed++;
	// 	contaInput=0;
	// }
	// else if(keyIsDown(DOWN_ARROW)&& contaInput>15){
	// 	seed--;
	// 	contaInput=0;
	// }

	//cambio seed
	//noiseSeed(seed);

	//noLoop();
}
