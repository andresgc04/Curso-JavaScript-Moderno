// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido,
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Andrés", "Guerrero");

console.log(persona);

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
  //   console.log({edad, args});
  return args;
};

imprimeArgumentos(10, true, false, "Fernando", "Hola");

// const argumentos = imprimeArgumentos2(10, true, false, "Fernando", "Hola");
// console.log({ argumentos });

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Fernando",
  "Hola"
);
console.log({ casado, vivo, nombre, saludo });

// const { apellido } = crearPersona("Fernando", "Herrera");
// console.log({ apellido });

const { apellido: nuevoApellido } = crearPersona("Fernando", "Herrera");
console.log({ nuevoApellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Iron man",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("nombre ", personaje.nombre);
//   console.log("codeName ", personaje.codeName);
//   console.log("vivo ", personaje.vivo);
//   console.log("edad", personaje.edad);
//   console.log("trajes ", personaje.trajes);
// };

//Destructuración de argumentos:
const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
