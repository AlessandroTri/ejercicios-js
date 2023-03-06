const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

const peliculaPequeñas = [];
const peliculaMedianas = [];
const peliculaGrandes = [];

for (let i = 0; i < movies.length; i++) {
 if  (movies[i].durationInMinutes < 100) peliculaPequeñas.push(movies[i]);
 else if (movies[i].durationInMinutes >= 200) peliculaGrandes.push(movies[i]);
 else peliculaMedianas.push(movies[i]);
}

console.log("pelis Pequeñas", peliculaPequeñas);
console.log("pelis medianas", peliculaMedianas);
console.log("pelis grandes", peliculaGrandes);

