// 1) Inicializar aleatoriamente populações p
// 2) Determinar a adequação da população
// 3) Até a convergência repetir:
//       a) Selecione os pais da população
//       b) Crossover e gerar nova população
//       c) Realizar mutação na nova população
//       d) Calcule a aptidão para a nova população
var populationSize = 100;
var genes = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890, .-;:_!"#%&/()=?@${[]}';
var target = "victor";
//main
(function () {
    var generations = 1;
    var found = false;
    var population = [];
    initializePopulation(population);
})();
var initializePopulation = function (population) {
    for (var i = 0; i < populationSize; i++) {
        // criando um chromosome de um individuo
        var individual = new Individual();
        var chromosome = individual.createChromosome();
        // population.push(individual(chromosome));
    }
};
var Individual = /** @class */ (function () {
    function Individual() {
    }
    Individual.prototype.createChromosome = function () {
        return ["a", "b"];
    };
    return Individual;
}());
//# sourceMappingURL=index.js.map