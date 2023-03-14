const numbersList = [];

const sum = (a, b)=> {
   
  return a +b;
};

const substract = (a, b) => {
  
  return a - b;
};

const  father = (a, b, callback) => {
 const result = callback(a,b);

 numbersList.push(result);

};
 
father(7,3,sum);
father(6,2,substract);



console.log(numbersList);