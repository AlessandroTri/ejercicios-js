const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesName = cities.map((city) => {
  if (city.isVisited === true) {
    return city.name + "(Visitado)";
  } else {
    return city.name;
  }
});

console.log(citiesName);



//const citiesName = cities.map(city =>
  //city.isVisited === true ?
   //city.name + "(Visitado)" : city.name);

//console.log(citiesName);




//const ciudades = cities.map (paseo => {
//return paseo.isVisited == true ?
// name = paseo.name + '-visitado' :
//paseo.name

//});
//console.log(ciudades);
