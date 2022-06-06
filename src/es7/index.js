//ES7 - Nace en junio del 2016
//========== Clase 5 - Include, para buscar valores ==========

//Include, el sustituto de indexOf
let numbers = [1,2,3,7,8];

if(numbers.includes(7)){
    console.log('Si se encuentra el valor 7')
}else{
    console.log('No se encuentra')
}

//Potencia

let base = 4;
let exponent = 4;
let result = base ** exponent;
console.log(result);