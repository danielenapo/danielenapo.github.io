timersec=300;
turno=0;
cont=0; //variabile che riporta il click
vecchiaPos="";//stringa di appoggio che salva la posizione del click precedente
mosse=0;
colturno='b';
document.getElementById("mosse").innerHTML="mossa numero: "+turno+"";
document.getElementById("messaggi").innerHTML="tocca ai bianchi";
document.getElementById("faccia").innerHTML="(• ‿ •)";
setInterval(Timer,1000);

function mossa(pos)
{
//reset in casella statistiche e messaggi a sinistra dello schermo
	document.getElementById("faccia").innerHTML="(• ‿ •)";
	if(colturno=='n')
		document.getElementById("messaggi").innerHTML="tocca ai neri";
	else
		document.getElementById("messaggi").innerHTML="tocca ai bianchi";

/*_________________________PRIMO CLICK___________________________________*/

	if(cont%2==0)//primo click
	{
		primo=document.getElementById(pos).innerHTML;
		vecchiaPos=pos;
		//ottengo colore giocatore
		var lenstr=primo.length;
		var colp=primo.charAt(lenstr-7);
		//controllo se la selezione corrisponde al colore della mossa
		if(colp!=colturno)
		{
			document.getElementById("messaggi").innerHTML="mossa non valida...";
			document.getElementById('faccia').innerHTML="(ಠ╭╮ಠ)";
				return;//esce dalla funzione in caso di selezione colore sbagliato
		}

		//cambia colore selezionato
		document.getElementById(pos).className="selezionato";
		//CONTROLLO TIPO DI PEDINA
		switch(primo)
		{
			case '<img src="imm/pedone_n.png">': //pedone nero
				//controllo dove può andare
				if(document.getElementById(parseInt(pos)+9)!=null && document.getElementById(parseInt(pos)+9).innerHTML!='<img src="imm/vuota.png">')//diagonale sinistra
				{
						var lenstr2=(document.getElementById(parseInt(pos)+9).innerHTML).length;
						var col2=(document.getElementById(parseInt(pos)+9).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
						//controllo non mangi pedina amica
						if(colp!=col2)
							document.getElementById(parseInt(pos)+9).className="selezionato";
				}
				if(document.getElementById(parseInt(pos)+11)!=null && document.getElementById(parseInt(pos)+11).innerHTML!='<img src="imm/vuota.png">')//diagonale destra
				{
					var lenstr2=(document.getElementById(parseInt(pos)+11).innerHTML).length;
					var col2=(document.getElementById(parseInt(pos)+11).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
					//controllo non mangi pedina amica
					if(colp!=col2)
						document.getElementById(parseInt(pos)+11).className="selezionato";
				}

				if(document.getElementById(parseInt(pos)+10)!=null&&document.getElementById(parseInt(pos)+10).innerHTML=='<img src="imm/vuota.png">')
				{
					document.getElementById(parseInt(pos)+10).className="selezionato";
					if(parseInt(pos)>=20&&parseInt(pos)<=28 && document.getElementById(parseInt(pos)+20).innerHTML=='<img src="imm/vuota.png">')
						document.getElementById(parseInt(pos)+20).className="selezionato";
				}
			break;

			case '<img src="imm/pedone_b.png">': //pedone bianco
				if(document.getElementById(parseInt(pos)-9)!=null && document.getElementById(parseInt(pos)-9).innerHTML!='<img src="imm/vuota.png">')//diagonale sinistra
				{
					var lenstr2=(document.getElementById(parseInt(pos)-9).innerHTML).length;
					var col2=(document.getElementById(parseInt(pos)-9).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
					//controllo non mangi pedina amica
					if(colp!=col2)
						document.getElementById(parseInt(pos)-9).className="selezionato";
				}

				if(document.getElementById(parseInt(pos)-11)!=null && document.getElementById(parseInt(pos)-11).innerHTML!='<img src="imm/vuota.png">')//diagonale destra
				{
					var lenstr2=(document.getElementById(parseInt(pos)-11).innerHTML).length;
					var col2=(document.getElementById(parseInt(pos)-11).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
					//controllo non mangi pedina amica
					if(colp!=col2)
						document.getElementById(parseInt(pos)-11).className="selezionato";
				}

				if(document.getElementById(parseInt(pos)-10)!=null&&document.getElementById(parseInt(pos)-10).innerHTML=='<img src="imm/vuota.png">')
				{
					document.getElementById(parseInt(pos)-10).className="selezionato";
					if(parseInt(pos)>=70&&parseInt(pos)<=78 && document.getElementById(parseInt(pos)-20).innerHTML=='<img src="imm/vuota.png">')
						document.getElementById(parseInt(pos)-20).className="selezionato";
				}
			break;
			//torri nere e bianche
			case '<img src="imm/torre_n.png">':
			case '<img src="imm/torre_b.png">':
			  var i=0;
			  var sum=[10, 1, -1, -10];
			  for(var k=0; k<4; k++)
			  {
			    for(var j=1; j<8; j++)
			    {
			      i+=sum[k];
			      if(document.getElementById(parseInt(pos+i))!=null && document.getElementById(parseInt(pos+i)).innerHTML=='<img src="imm/vuota.png">')
			        document.getElementById(parseInt(pos+i)).className="selezionato";
			      else if(document.getElementById(parseInt(pos+i))!=null)
			      {
					var lenstr2=(document.getElementById(parseInt(pos+i)).innerHTML).length;
					var col2=(document.getElementById(parseInt(pos+i)).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
					//controllo non mangi pedina amica
					if(colp!=col2)
						document.getElementById(parseInt(pos+i)).className="selezionato";
			        break;
			      }
			      else
			        break;
			    }
					i=0;
			  }
			  break;

				//alfieri neri e bianchi
				case '<img src="imm/alfiere_n.png">':
				case '<img src="imm/alfiere_b.png">':
				  var i=0;
				  var sum=[11, 9, -9, -11];
				  for(var k=0; k<4; k++)
				  {
				    for(var j=1; j<8; j++)
				    {
						i+=sum[k];
						if(document.getElementById(parseInt(pos+i))!=null&&document.getElementById(parseInt(pos+i)).innerHTML=='<img src="imm/vuota.png">')
							document.getElementById(parseInt(pos+i)).className="selezionato";
							else if(document.getElementById(parseInt(pos+i))!=null)
						{
							var lenstr2=(document.getElementById(parseInt(pos+i)).innerHTML).length;
							var col2=(document.getElementById(parseInt(pos+i)).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
							//controllo non mangi pedina amica
							if(colp!=col2)
								document.getElementById(parseInt(pos+i)).className="selezionato";
							break;
						}
						else
							break;
					}
					i=0;
				}
				break;//fine alftieri


					//regine nere e bianche
					case '<img src="imm/regina_n.png">':
					case '<img src="imm/regina_b.png">':
					var sum=[10, 1, -1, -10, 11, 9, -9, -11];
					var i=0;
					for(var k=0; k<8; k++)
					{
						for(var j=0; j<8; j++)
						{
							i+=sum[k];
							if(document.getElementById(parseInt(pos+i))!=null && document.getElementById(parseInt(pos+i)).innerHTML=='<img src="imm/vuota.png">')
								document.getElementById(parseInt(pos+i)).className="selezionato";
							else if(document.getElementById(parseInt(pos+i))!=null)
							{
								var lenstr2=(document.getElementById(parseInt(pos+i)).innerHTML).length;
								var col2=(document.getElementById(parseInt(pos+i)).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
								//controllo non mangi pedina amica
								if(colp!=col2)
									document.getElementById(parseInt(pos+i)).className="selezionato";
								break;
							}
							else
								break;
						}
						i=0;
					}
					break;

					//re neri e bianchi
					case '<img src="imm/re_n.png">':
					case '<img src="imm/re_b.png">':
					var sum=[10, 1, -1, -10, 11, 9, -9, -11];
					var i=0;
					for(var k=0; k<8; k++)
					{
						for(var j=0; j<8; j++)
						{
						i=sum[k];
						if(document.getElementById(parseInt(pos+i))!=null)
						{
							var lenstr2=(document.getElementById(parseInt(pos+i)).innerHTML).length;
							var col2=(document.getElementById(parseInt(pos+i)).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
							//controllo non mangi pedina amica
							if(colp!=col2)
								document.getElementById(parseInt(pos+i)).className="selezionato";
							break;
						}
						}
					}
					break;

					//cavallo nero e bianco
					case '<img src="imm/cavallo_n.png">':
					case '<img src="imm/cavallo_b.png">':
					sum=[10, -10, 1, -1];
					sum1=[1, -1];
					sum2=[10, -10];
					for(var k=0; k<4; k++)
					{
						for(var j=0; j<2; j++)
						{
							i=sum[k];
							if(k<2)
								z=sum1[j];
							else
								z=sum2[j];
							if(document.getElementById(parseInt(pos+i+i+z))!=null)
							{
								var lenstr2=(document.getElementById(parseInt(pos+i+i+z)).innerHTML).length;
								var col2=(document.getElementById(parseInt(pos+i+i+z)).innerHTML).charAt(lenstr2-7);//colore pedina raggiungibile
								//controllo non mangi pedina amica
								if(colp!=col2)
									document.getElementById(parseInt(pos+i+i+z)).className="selezionato";
							}

						}
					}
					break;

		}//fine switch
	}
//_________________________________FINE PRIMO CLICK___________________________//


	else//secondo click
	{
		//controllo possibilità mossa
		if(document.getElementById(pos).className=="selezionato"&&pos!=vecchiaPos)
		{
			//se viene mangiata una pedian avversaria, la faccia si stupisce
			if(document.getElementById(pos).innerHTML!='<img src="imm/vuota.png">')
				document.getElementById('faccia').innerHTML="(^ ‿ ^)";
			//se viene mangiato il re, è scacco matto, e la faccina gioisce.
			if(document.getElementById(pos).innerHTML=='<img src="imm/re_b.png">')//vincono i neri
			{
				fine(true);
			}
			if(document.getElementById(pos).innerHTML=='<img src="imm/re_n.png">')//vincono i bianchi
			{
				fine(false);
			}

			document.getElementById(pos).innerHTML=primo; //assegna alla nuova casella la pedina
			document.getElementById(vecchiaPos).innerHTML="<img src='imm/vuota.png'>"; //cancella la pedina nella vecchia casella



			turno++;
			timersec=300;
			document.getElementById("mosse").innerHTML="mossa numero: "+turno;
			//indica a chi tocca il turno
			if(colturno=='b')
			{
				document.getElementById("messaggi").innerHTML="tocca ai neri";
				colturno='n';
			}
			else
			{
				document.getElementById("messaggi").innerHTML="tocca ai bianchi";
				colturno='b';
			}

		}
		else
			document.getElementById("messaggi").innerHTML="mossa non valida!!!";

		//deseleziona tutto
        for(var i=1;i<9; i++)
        {
            for(var j=1; j<9; j++)
            {
				if(i%2==0 && j%2==0)
					document.getElementById(i+""+j).className="arancione";
				else if(i%2!=0 && j%2!=0)
					document.getElementById(i+""+j).className="arancione";
				else
					document.getElementById(i+""+j).className="marrone";
            }
        }
	}
	cont++;
}

function Timer()
{
	document.getElementById("tempo").innerHTML=timersec;
	if(timersec==0)
	{
		timersec=300;
		if(colturno=='b')
		{
			document.getElementById("messaggi").innerHTML="tocca ai neri";
			colturno='n';			
		}
		else
		{
			document.getElementById("messaggi").innerHTML="tocca ai bianchi";
			colturno='b';
		}
	}
	timersec--;
}

function fine(coloreVinto)
{
	clearInterval();
	document.getElementById("body").innerHTML='<div id="stats"><h1 id="faccia">ヽ( ´ ∇ ｀ )ノ</h1></div><div id="vintoscreen"><div>';
	document.getElementById("body").className="vintobg";
	if(coloreVinto==true)
	{
		document.getElementById("vintoscreen").innerHTML="<p>Hanno vinto i NERI!</p>";
	}
	else
	{
		document.getElementById("vintoscreen").innerHTML="<p>Hanno vinto i BIANCHI!</p>";
	}
	//document.getElementById("stats").style.margin=" 50px auto;";
	//document.getElementById("stats").style.position=" relative;";
}
