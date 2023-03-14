const button$$ = document.querySelector("button");
const input$$ = document.querySelector("input");


const getDatos = async () => {

try{

const respuesta = await fetch (`https://api.nationalize.io?name=${input$$.value}`);
const res = await respuesta.json();
console.log(res);
} catch (error) {

  console.log(error);
}

};

button$$.addEventListener ("click", getDatos);

















