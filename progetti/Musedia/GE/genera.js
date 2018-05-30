function setup() {
    seed = Math.floor(Math.random() * 100000);
    noiseSeed(seed);
	cont=[];
	t=0;
    pianoforte = new Instrument('piano');
    progressione = [];
    tempi = [];
    document.getElementById("seed").innerHTML = "seed: "+seed;
}

function cancella() {
    document.getElementById("generato").innerHTML = "";
    setup();
    genera();
}

function genera()
{
	//output
	output=document.getElementById("generato");
	//input tempo
	var tempo=document.getElementById("tempo").value;
	//input n°battute
	var battute = document.getElementById('battute').value;
	//input tipo di scala
	var scala_value = document.getElementsByName('scala');
	var scala;
	for(var i = 0; i < scala_value.length; i++)
	{
		if(scala_value[i].checked){
			scala = scala_value[i].value;
		}
	}
	//tonalità
	var ton=document.getElementById("ton").value;
	//calcolo delle note
	switch(ton)
	{
		case "C":
			{
				if(scala=="maggiore")
					cont=["C","D","E","F","G","A","B","c","d","e","f","g","a","b"];
				else if(scala=="minore")
                    cont = ["C", "D", "^C", "D", "^D", "F", "G", "^G", "^A","c", "d", "^d", "f", "g", "^g", "^a"];
				else if(scala=="blues")
					cont=["c" , "MIb" , "FA" , "SOLb" , "SOL" , "SIb" , "DO" ];
			}
			break;

		case "D":
			{
				if(scala=="maggiore")
					cont=["D","E","^F","G","A","B","^C","d", "e", "^f", "g", "a", "b", "^c"];
				else if(scala=="minore")
					cont=["RE", "MI", "FA", "SOL", "LA", "SIb", "DO", "RE"];
				else if(scala=="blues")
					cont=["RE", "FA#", "SOL", "LAb", "LA", "DO", "RE"];
			}
			break;
	}
	//output
	var lead= new nota(cont, progressione, ton, battute, tempo, tempi);
	tempi=lead.generaTempo();
	progressione=lead.prossima();
	output.innerHTML+=visualizza(progressione, tempi);
	c=0;
	suona()
}


function nota(note,progressione, prec, battute, max, tempi) //oggetto
{
	this.tempi=tempi;//tempi generati
	this.max=max;	//max è il tempo, chiamato così per non confondere nella funzione generaTempo()
	this.battute=battute
	this.note=note;//note possibili(scala)
	this.progressione=progressione;//note generate
	this.prec=prec;

	this.generaTempo=function()
    {
        var tempNoise = 0;
		valori=[0.5,1,2];		//valori possibili(in ordine croma, semiminima, minima)
		for(var k=0; k<100;k++)	//for delle battute
		{
			sommaf=0; //somma finale
			somma=0;	//somma temporanea
			do       //generazione singolabattuta
            {
                tempNoise += 3;
				somma=sommaf;
				random=Math.round(noise(tempNoise) * 3);	//generazione dell'indice di valori[] in modo random
				somma+=valori[random];
				if(somma<=max)	//se la somma temporanea non supera il numero di battiti massimi, aggiorna somma finale
				{
					sommaf+=valori[random];
					tempi.push(valori[random]);
				}

			}while(sommaf!=max);
		}
		return tempi;
	}

	//metodo che calcola la progressione di accordi
	this.prossima =function()
	{
		for(var i=0; i<tempi.length; i++)
		{
            t += 2
            random = Math.round(noise(t) * cont.length);
			progressione.push( cont[random]);
		}
			return progressione;
	}
}

function visualizza(nota, tempo)
{
	var out="<table>";
	var apertura="<tr><td>";
	var chiusura="</td></tr>";
	for (var i=0; i<tempo.length;i++)
	{
		out+=apertura+nota[i]+"</td><td>";
		out+=tempo[i]+chiusura;

	}
	out+="</table>";
		return out;
}

function Probabilita(percentuale)
{
	var random=Math.floor((Math.random()*10)+1);
	if (random<=5)
		return true;
	else
		return false;
}

function suona(){
	if(c==tempi.length)
		return;

	pianoforte.tone(progressione[c], 1, tempi[c]/2);
	c++;
	setTimeout(function(){suona()},tempi[c-1]*500);
}
