main();

function Individual(){
  this.fitness=0;
  this.numeroGeni=8;
  this.chromosome=[];

  this.generateChromosome= function(){
    for(var a=0; a<this.numeroGeni; a++){
      this.chromosome.push(Math.round(Math.random()));//assegna valore random tra 0 e 1
    }
  }

  this.calculateFitness= function(){
    this.fitness=0;
    for(var b=0; b<this.chromosome.length; b++){
      if (this.chromosome[b]==1)
        this.fitness++;
    }
  }

  this.mutation= function(){
    if(Math.round(Math.random()*100)>=93){
    //  alert("c'e' una mutazione!!!");
      for(var c=2; c<5; c++){
        if(this.chromosome[c]==0)
          this.chromosome[c]=1;
        else
          this.chromosome[c]=0;
      }
    }
  }
//FINE OGGETTO
}


//MAIN
function main(){

  population=[];
  matingPool=[];
  populationSize=15;
  //riempi popolazione + inizializzazioni
  for(var d=0; d<populationSize; d++){
    individuo= new Individual();
    individuo.generateChromosome();
    individuo.calculateFitness();
    population.push(individuo);
  }
  bestFitted=new Individual(); bestFitted.fitness=0;
  generations=0;
  isMutato=0;
  calculateBestFitted();
  //INIZIO SIMULAZIONE
  do{
    selection();
    generateSon();
    killTheWeakest();
    killTheWeakest();
    calculateBestFitted();
    generations++;
    message="generation "+generations;
    document.getElementById("numero").innerHTML=message;
    message="fitness: "+bestFitted.fitness;
    document.getElementById("fittest").innerHTML=message;
    if(generations>300){
      alert("convergenza prematura");
        return;
    }

  }while(bestFitted.fitness!=bestFitted.chromosome.length);
  //alert("soluzione trovata alla generazione "+generations);
}

function calculateBestFitted(){
  for(var e=0; e<population.length; e++){
    population[e].calculateFitness();
    if(population[e].fitness>bestFitted.fitness)
      bestFitted=population[e];
  }
}

function selection(){
  for(var f=0; f<population.length; f++){
    for(var j=0; j<population[f].fitness; j++){
        matingPool.push(population[f]);
    }
  }
  mom=matingPool[Math.floor(Math.random()*matingPool.length)];
  dad=matingPool[Math.floor(Math.random()*matingPool.length)];
  matingPool.slice(0,matingPool.length);//svuoto l'array
  if(mom===dad)
    selection();
}
function generateSon(){

  crossoverPoint=Math.round(Math.random()*7);
  offspring1= new Individual();
  offspring1.generateChromosome();
  offspring2= new Individual();
  offspring2.generateChromosome();

  //inizio crossover
  for(var g=0; g<crossoverPoint; g++){
      offspring1.chromosome[g]=dad.chromosome[g];
      offspring2.chromosome[g]=mom.chromosome[g];
    }
    for(var h=crossoverPoint; h<bestFitted.chromosome.length; h++){
        offspring2.chromosome[h]=dad.chromosome[h];
        offspring1.chromosome[h]=mom.chromosome[h];
    }
    //mutazioni
    offspring1.mutation();
    offspring1.calculateFitness();
    offspring2.mutation();
    offspring2.calculateFitness();
    //nascita
    population.push(offspring1);
    population.push(offspring2);
}

function killTheWeakest(){
  for(var i=0; i<population.length; i++){
    weakest=new Individual();
    weakest.fitness=8;
    if(population[i].fitness<population[i].chromosome.length){
      weakest=population[i];
      indexWeakest=i;
    }
  }
    population.splice(weakest, 1);
}
