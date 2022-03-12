// 1) Inicializar aleatoriamente populações p
// 2) Determinar a adequação da população
// 3) Até a convergência repetir:
//       a) Selecione os pais da população
//       b) Crossover e gerar nova população
//       c) Realizar mutação na nova população
//       d) Calcule a aptidão para a nova população

import { IIndividual } from "./interfaces/IIndividuals";
import _ from "lodash";

const populationSize = 500;
const genes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const target = "victor";

export class Individual implements IIndividual {
    public fitness;
    constructor(public chromosome: Array<string>) {
        this.fitness = this.calcFitness();
    }
    static createGnome() {
        const gnome = [];
        for (let i = 0; i < target.length; i++) {
            gnome.push(this.mutatedGenes());
        }
        return gnome;
    }
    static mutatedGenes(): string {
        // Retorna um gene aleatório baseado na cadeia de genes válidos
        const gene = genes[Math.floor(Math.random() * genes.length)];
        return gene;
    }
    calcFitness(): number {
        let fitness: number = 0;

        this.chromosome.map((el, i) => {
            if (el !== target[i]) fitness += 1;
        });

        return fitness;
    }
    mate(par2: IIndividual): IIndividual {
        const childChromosome: Array<string> = [];

        this.chromosome.map((el, i) => {
            const prob = _.random(0, 1);

            if (prob < 0.45) {
                childChromosome.push(el);
            } else if (prob < 0.9) {
                childChromosome.push(par2.chromosome[i]);
            } else {
                childChromosome.push(Individual.mutatedGenes());
            }
        });

        return new Individual(childChromosome);
    }
}

function getRandomElement<T>(arr: Array<T>): T {
    const index = _.random(0, arr.length - 1);
    return arr[index];
}

//main
((): void => {
    let generation: number = 1;
    let found: boolean = false;
    let population: Array<IIndividual> = [];

    for (let i = 0; i < populationSize; i++) {
        // criando um cromossomo de um individuo
        const chromosome: Array<string> = Individual.createGnome();
        population.push(new Individual(chromosome));
    }

    while (!found) {
        let populationSorted = _.sortBy(population, (p) => p.fitness);
        population = populationSorted;
        if (population[0].fitness <= 0) {
            found = true;
            break;
        }

        let newGeneration: Array<IIndividual> = [];
        let s = Number((10 * populationSize) / 100);
        for (let i = 0; i < s; i++) {
            newGeneration.push(population[s]);
        }

        s = Number((90 * populationSize) / 100);

        for (let i = 0; i < s; i++) {
            let parent1 = getRandomElement(population.slice(0, 50));
            let parent2 = getRandomElement(population.slice(0, 50));
            const child: IIndividual = parent1.mate(parent2);
            newGeneration.push(child);
        }

        population = newGeneration;

        console.log(
            `Generation: ${generation} \t String: ${population[0].chromosome} \t Fitness: ${population[0].fitness}`
        );
        generation += 1;
    }

    console.log(
        `Generation: ${generation} \t String: ${population[0].chromosome} \t Fitness: ${population[0].fitness}`
    );
})();
