export interface IIndividual {
    fitness: number;
    chromosome: Array<string>;
    mate: (arr: IIndividual) => IIndividual;
    calcFitness: () => void;
}
