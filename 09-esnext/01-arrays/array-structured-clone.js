const superHeroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

//Nueva funcion structuredClone para copiar arreglos:
const superHeroesCopy = structuredClone(superHeroes);

superHeroesCopy[0].name = "Green Lantern";

console.table(superHeroes);
console.table(superHeroesCopy);
