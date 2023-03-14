let botton$$ = document.createElement ('button');

botton$$.setAttribute ('id', 'btnToClick');

document.body.appendChild(botton$$);
console.log(botton$$);



botton$$.addEventListener ('click', clickk );

function clickk () {
    console.log(event);
}

const click = (event)=>{console.log()}