const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

// for (const toy of toys) {
//   if (toy.name.includes("gato")) {
//     let cont = toys.index0f(toy);
//     delete toys[cont];
//   }
// }
// console.log(toys);




const nuevalista = [];
for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    nuevalista.push(toy);
  }
};

console.log(nuevalista);