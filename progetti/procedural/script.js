//INIZIALIZZAZIONI
function setup(){
	//canvas
	width=1000;
	height=500;
	createCanvas(width, height);
	noStroke();
	seed=Math.floor(Math.random()*1000000);
	noiseSeed(seed);

	background(0);
	resolution=13; //risoluzione dell'mmagine(grandezza dei quadrati)
	document.getElementById("seed").innerHTML="seed: "+seed;

	for(var y=0; y<height; y+=resolution){ //per ogni quadrato del canvas
		for (var x=0; x<width; x+=resolution){
			z=255*noise(x*0.01, y*0.01); //genera un colore con perlin noise con valori x e y
			if(noise(x*0.01, y*0.01)<0.4) //se il noise è minore di 0.4 ()genera valori tra 0 e 1), allora è acqua
				fill(24, 64, 216);
			else                         //altrimenti è terreno
				fill(z-20, z+30, z-15);
			rect(x, y, resolution, resolution); //disegna il quadrato
		}
	}

}
