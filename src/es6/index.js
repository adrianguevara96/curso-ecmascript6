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

//========== Clase 2 - LET y CONST, Multilínea, Spread Operator y Desestructuración ==========
let lorem = "hola \n" +
"que tal";

let lorem2 = `hola
que tal`

//Desestructuracion
let person = {
    name: 'Adrian',
    age: 27,
    country: 'VNZL'
}

console.log(person.name, person.age);

let {name, age} = person;
console.log(name, age);

//Operacion de Propagacion
let team1 = ['Adrian', 'Anyami', 'Yuumi'];
let team2 = ['Jose', 'Pedro', 'Maria'];

let education = ['Juan', ...team1, ...team2];
console.log(education);

//LET : nueva forma de trabajar para guardar elementos en variable

//========== Clase 3 - Arrow Functions, Promesas y Parámetros en objetos ==========

//objetos
let namee = 'Adrian';
let agee = 26;

obj = {name: namee, age:agee};
obj2 = {namee, agee};
console.log(obj2);

//arrow function (funciones anonimas) - this no vinculable
const names = [
    { name: 'Adrian', age: 26 },
    { name: 'Anyami', age: 27}
]

let listOfNames = names.map( (element) => {
    console.log(element.name)
})

const listOfNames3 = (name, age, country) => {
    //...
}

const listOfNames4 = name => {
    //...
}

const square = num => num * num;

//asincronismo - javascript no es un lenguaje sincronico
//promesa - algo va a pasar

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!!');
        }
    })
}

helloPromise().then( (response) => {
    console.log("response: ", response);
}).catch( (error) => {
    console.log("error: ", error);
})

//========== Clase 4 - Clases, Módulos y Generadores ==========
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modulos
//import { helloF } from './module';
const helloF = require('./module');

console.log(helloF());

//generadores
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }

    if(true){
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);