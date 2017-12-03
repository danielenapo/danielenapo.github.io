var cont=[];
		function avvio()
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
							cont=["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
						else if(scala=="minore")
							cont=["DO", "RE", "MIb", "FA", "SOL", "LAb", "SIb"];
						else if(scala=="blues")
							cont=["DO" , "MIb" , "FA" , "SOLb" , "SOL" , "SIb" , "DO" ];
					}
					break;

				case "D":
					{
						if(scala=="maggiore")
							cont=["RE", "MI", "FA#", "SOL", "LA", "SI", "DO#", "RE"];
						else if(scala=="minore")
							cont=["RE", "MI", "FA", "SOL", "LA", "SIb", "DO", "RE"];
						else if(scala=="blues")
							cont=["RE", "FA#", "SOL", "LAb", "LA", "DO", "RE"];
					}
					break;
			}
			//output
			progressione=[];
			tempi=[];
			var lead= new nota(cont, progressione, ton, battute, tempo, tempi);
			tempi=lead.generaTempo();
			progressione=lead.prossima();
			output.innerHTML+=visualizza(progressione, tempi);
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
				valori=[0.5,1,2];		//valori possibili(in ordine croma, semiminima, minima)
				for(var k=0; k<battute;k++)	//for delle battute
				{
					sommaf=0; //somma finale
					somma=0;	//somma temporanea
					do       //generazione singolabattuta
					{
						somma=sommaf;
						random=Math.floor(Math.random() * 3);	//generazione dell'indice di valori[] in modo random
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
					random=Math.floor(Math.random()*7);
					progressione.push(note[random]);
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
