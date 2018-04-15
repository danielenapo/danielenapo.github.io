//Musedia   Copyright (C)   2017   Daniele Napolitano

var scala=[];
		function avvio()
		{
			output=document.getElementById("generato");//output
			var tempo=document.getElementById("tempo").value; //tempo  (4/4, 3/4,...)
			var battute = document.getElementById("battute").value;//n°battute
			var scala_value = document.getElementById("scala").value;//tipo di scala(maggiore, minore,...)
			var tonalita=document.getElementById("ton").value;//tonalità(do, re....)
			//calcolo delle scale in base alla tonalità
			switch(tonalita)
			{
				case "C"://do
					{
						if(scala_value=="maggiore")
							scala=["DO", "RE", "MI", "FA", "SOL", "LA", "SI"];
						else if(scala_value=="minore")
							scala=["DO", "RE", "MIb", "FA", "SOL", "LAb", "SIb"];
						else if(scala_value=="blues")
							scala=["DO" , "MIb" , "FA" , "SOLb" , "SOL" , "SIb" , "DO" ];
					}
					break;

				case "D"://re
					{
						if(scala_value=="maggiore")
							scala=["RE", "MI", "FA#", "SOL", "LA", "SI", "DO#", "RE"];
						else if(scala_value=="minore")
							scala=["RE", "MI", "FA", "SOL", "LA", "SIb", "DO", "RE"];
						else if(scala_value=="blues")
							scala=["RE", "FA#", "SOL", "LAb", "LA", "DO", "RE"];
					}
					break;
			}
			//output
			progressione=[];
			tempi=[];
			var lead= new nota(scala, progressione, tonalita, battute, tempo, tempi);
			tempi=lead.generaTempo();
			progressione=lead.prossima();
			output.innerHTML+=visualizza(progressione, tempi);
		}
//**********************************************************************************************************************************
		function nota(note,progressione, prec, battute, max, tempi) //oggetto
		{
			this.tempi=tempi;//tempi generati
			this.max=max;	//max è il tempo, chiamato così per non confondere nella funzione generaTempo()
			this.battute=battute
			this.note=note;//note possibili(scala_value)
			this.progressione=progressione;//note generate
			this.prec=prec;
//****************************
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
//****************************
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
//***************************************************************************************
//EXTRA FUNCTIONS
		function visualizza(nota, tempo)//visualizza in una tabella, solo per ragioni di testing
		{
			var out="<table>";
			for (var i=0; i<tempo.length;i++)
			{
				out+="<tr><td>"+nota[i]+"</td><td>";
				out+=tempo[i]+"</td></tr>";

			}
			out+="</table>";
				return out;
		}
/*
		function Probabilita(percentuale)	//calcola una bool data una percentuale di probabilità
		{
			var random=Math.floor((Math.random()*10)+1);
			if (random<=percentuale)
				return true;
			else
				return false;
		}
*/
