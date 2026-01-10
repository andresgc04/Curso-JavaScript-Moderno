function saludar(nombre) {
  // console.log(arguments);
  // console.log("Hola " + nombre);
  return 10;

  console.log("Soy un código que estj después del return");
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = () => {
  console.log("Hola Mundo");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("Fernando", 40, true, "Costa Rica");
// console.log(retornoDeSaludar);

// saludar("Andrés", 40, true, "Costa Rica");
// saludar2("Andrés");
// saludarFlecha();
// saludarFlecha2("Melissa");

function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2));

// const sumar2 = (a, b) => {
//   return a + b;
// };

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

console.log(getAleatorio());

// En una función de flecha, que no tenga llaves {}
// se va a llamar getAleatorio2():
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
