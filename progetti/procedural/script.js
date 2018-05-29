//INIZIALIZZAZIONI
function setup(){
	//canvas
	width=1000;
	height=500;
	createCanvas(width, height);
	noStroke();
	//name generator
	ng=new JapaneseNameGenerator(2,6);
	var name="";
	name+=ng.generateName()+" "+ng.generateName();
	document.getElementById("name").value=name;

	generate();
}

//GENERA IL TERRENO
function generate(){
	//prende come seed il valore dell'input box
	var name=document.getElementById("name").value;
	//trasformo il nome della zona in un numero(per poter essere utilizzato come seed)
	seedName=0;
	for(var i=0; i<name.length; i++){
		seedName+=(name.charCodeAt(i)*Math.pow(10,i));
	}
	noiseSeed(seedName);

	background(0);
	resolution=13; //risoluzione dell'mmagine(grandezza dei quadrati)

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
