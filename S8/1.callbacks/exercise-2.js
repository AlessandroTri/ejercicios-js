const userAnwsers = [];


const confirmExample = (description) => {
  
    return confirm(description);
 
  
};

const promptExample = (description) => {
    return prompt(description);
 
    
};

const father = (description, callback) => {
 
   
 userAnwsers.push(callback(description));
 
};

father("confirmando", confirmExample);
father("confirmado", promptExample);

console.log(userAnwsers);
