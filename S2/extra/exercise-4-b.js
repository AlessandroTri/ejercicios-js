array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(array, text) {

    for(i = 0; i < array.length; i++){

        if(array[i] === text){

            return i;
        }
    }

}

array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

findArrayIndex(array, "Ajolote");




function removeItem(array, text){

    findArrayIndex(array, text)
    array.splice(text, 1);

}

removeItem(array, i); 
console.log(array);