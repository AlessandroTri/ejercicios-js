function findArrayIndex(array, text) {

    for(let i = 0; i < array.length; i++){

        if(array[i] == text){
            
            console.log(i)
        
        }
    }
          return array;
}

array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

findArrayIndex(array, "Ajolote");

