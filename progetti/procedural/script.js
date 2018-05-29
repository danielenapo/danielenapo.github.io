//INIZIALIZZAZIONI
function setup(){
	//canvas
	width=1000;
	height=500;
	createCanvas(width, height);
	noStroke();


	background(0);
	resolution=13;

	for(var y=0; y<height; y+=resolution){
		for (var x=0; x<width; x+=resolution){
			z=255*noise(x*0.01, y*0.01);
			if(noise(x*0.01, y*0.01)<0.4)
				fill(24, 64, 216);
			else
				fill(z-20, z+30, z-15);

			rect(x, y, resolution, resolution);
		}
	}

}
