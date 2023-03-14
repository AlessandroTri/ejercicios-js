fetch("https://api.agify.io?name=michael")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
    pintarDatos(responseJson);
  })
  .catch((err) => console.log(err));

//forma facil
//     const get = async () => {
//    try {
//  const respuesta = await fetch ("https://api.agify.io?name=michael");
//const res = await respuesta.json();
//console.log(res);

//    }catch (error) {
//   console.log(error);
// };

//  };

// get();
