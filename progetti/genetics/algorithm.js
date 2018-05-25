main();

function Individual(){
  this.fitness=0;
  this.numeroGeni=8;
  this.chromosome=[];

  this.generateChromosome= function(){
    for(var i=0; i<this.numeroGeni; i++){
      this.chromosome.push(Math.round(Math.random()));//assegna valore random tra 0 e 1
    }
  }

  this.calculateFitness= function(){
    for(var i=0; i<this.chromosome.length; i++){
      if (this.chromosome[i]==1)
        this.fitness++;
    }
  }

  this.mutation= function(){
    if(Math.round(Math.random()*100)>=93){
      alert("c'e' una mutazione!!!");
      for(var i=2; i<5; i++){
        if(this.chromosome[i]==0)
          this.chromosome[i]=1;
        else
          this.chromosome[i]=0;
      }
    }
  }

//FINE OGGETTO
}


//MAIN
function main(){

  population=[];
  //riempi popolazione + inizializzazioni
  for(var i=0; i<5; i++){
    individuo= new Individual();
    individuo.generateChromosome();
    individuo.calculateFitness();
    population.push(individuo);
  }
  bestFitted=new Individual(); bestFitted.fitness=0;
  secondBestFitted= new Individual(); secondBestFitted.fitness=0;
  generations=0;
  isMutato=0;

  //INIZIO SIMULAZIONE
  do{
    calculateBestFitted();
    calculateSecondBestFitted();
    generateSon();
    killTheWeakest();
    killTheWeakest();
    generations++;
    alert(generations+" : fittest: "+ bestFitted.fitness+", "+secondBestFitted.fitness);
  }while(bestFitted.fitness!=8);

  alert("soluzione trovata alla generazione "+generations);
}


function calculateBestFitted(){
  for(var i=0; i<population.length; i++){
    if(population[i].fitness>bestFitted.fitness)
      bestFitted=population[i];
  }
}

function calculateSecondBestFitted(){
  for(var i=0; i<population.length; i++){
    if(population[i].fitness<bestFitted.fitness && population[i].fitness>secondBestFitted.fitness)
      secondBestFitted=population[i];
  }
}

function generateSon(){
  crossoverPoint=Math.round(Math.random()*7);
  offspring1= new Individual();
  offspring2= new Individual();
  //inizio crossover
  for(var i=0; i<crossoverPoint; i++){
      offspring1.chromosome[i]=bestFitted.chromosome[i];
      offspring2.chromosome[i]=secondBestFitted.chromosome[i];
    }
    for(var i=crossoverPoint; i<bestFitted.chromosome.length; i++){
        offspring2.chromosome[i]=bestFitted.chromosome[i];
        offspring1.chromosome[i]=secondBestFitted.chromosome[i];
    }
    //mutazioni
    offspring1.mutation();offspring1.calculateFitness();
    offspring2.mutation();offspring2.calculateFitness();
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
