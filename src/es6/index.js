function newFunction(name, age, country){
    var name = name || 'adrian';
    var age = age || 26;
    var country = country || 'venezuela';
    console.log(name, age, country);
}

// es6 - Clase 1 Default Params y Concatenacion

function newFunction2(name = 'oscar', age = 26, country = 'venezuela'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Anyami', 27, 'Venezuela');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);
